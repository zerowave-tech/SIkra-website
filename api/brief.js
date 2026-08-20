// Receives the contact-page brief form and forwards it by email through Resend.
//
// Runs as a Vercel Node function. Deliberately dependency-free: it calls the
// Resend REST API with fetch instead of pulling in the `resend` package, so the
// repo stays build-free (no package.json, no node_modules).
//
// Environment variables (set in the Vercel project):
//   RESEND_API_KEY  required — the Resend API key
//   BRIEF_TO        optional — recipient, defaults to hello@sikra.agency
//   BRIEF_FROM      optional — sender, defaults to Sikra <noreply@sikra.agency>
//                              (must be on a domain verified in Resend)

const LIMITS = { name: 120, contact: 200, description: 5000 };
const ALLOWED_LANGS = ['RU', 'EN', 'UA', 'HU'];

const str = (v) => (typeof v === 'string' ? v.trim() : '');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {};

  // Honeypot: a field hidden from people, so anything in it came from a bot.
  // Answer 200 so the bot cannot tell it was rejected.
  if (str(body.company)) return res.status(200).json({ ok: true });

  const name = str(body.name);
  const contact = str(body.contact);
  const description = str(body.description);

  if (!name || !contact || !description) {
    return res.status(400).json({ error: 'missing_fields' });
  }
  if (name.length > LIMITS.name || contact.length > LIMITS.contact ||
      description.length > LIMITS.description) {
    return res.status(400).json({ error: 'too_long' });
  }

  const langs = Array.isArray(body.langs)
    ? body.langs.filter((l) => ALLOWED_LANGS.includes(l)).slice(0, ALLOWED_LANGS.length)
    : [];
  const uiLang = ALLOWED_LANGS.includes(String(body.lang || '').toUpperCase())
    ? String(body.lang).toUpperCase()
    : str(body.lang).slice(0, 5);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('brief: RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'not_configured' });
  }

  const lines = [
    `Name: ${name}`,
    `Contacts: ${contact}`,
    `Project languages: ${langs.length ? langs.join(', ') : '—'}`,
    `Site language: ${uiLang || '—'}`,
    '',
    'Description:',
    description,
  ];

  // Let a plain "Reply" go straight to the person, when they left an email.
  const replyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) ? contact : undefined;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.BRIEF_FROM || 'Sikra <noreply@sikra.agency>',
        to: [process.env.BRIEF_TO || 'hello@sikra.agency'],
        subject: `Brief from the site — ${name}`,
        text: lines.join('\n'),
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });

    if (!r.ok) {
      // Log the provider's reason server-side; do not leak it to the caller.
      console.error('brief: resend rejected', r.status, await r.text().catch(() => ''));
      return res.status(502).json({ error: 'send_failed' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('brief: resend request threw', err);
    return res.status(502).json({ error: 'send_failed' });
  }
};

function safeParse(s) {
  try { return JSON.parse(s); } catch (e) { return {}; }
}
