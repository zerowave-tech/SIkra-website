// English guide copy. Keys are the slugs from ui.mjs (GUIDE_SLUGS).
export default {
  'tech-stack-for-agency': {
    title: 'The tech stack for an agency: what you need in 2026',
    seoTitle: 'Tech stack for an agency — the complete list | Sikra',
    desc: 'The tech stack for an agency: domain, website, work email, CRM, database, email campaigns, forms, payments and analytics. What to pick and in what order.',
    lead: 'An agency tech stack is the set of services that sales, client work and money run on. Below is the minimum set we put together for marketing, creative, recruiting and consulting agencies — and the order to set it up in.',
    sections: [
      {
        h: 'What an agency tech stack is made of',
        p: ['Every agency, whatever its niche, needs the same eight layers. The specific tools can change, but if a layer is missing, the gap always shows up — as lost leads, emails in spam or manual payment reconciliation.'],
        list: [
          'Domain and DNS — your address and record management (Cloudflare, a domain registrar).',
          'Website — a showcase with case studies and an enquiry form (Webflow, WordPress, Framer or custom code on Vercel).',
          'Work email — name@agency mailboxes with SPF, DKIM and DMARC (Google Workspace, Microsoft 365, Zoho Mail).',
          'CRM — deal pipeline, client records and tasks (HubSpot, Pipedrive, Kommo, Bitrix24).',
          'Database — clients, projects and history in one place (PostgreSQL, Supabase, Airtable).',
          'Email campaigns — newsletters and automated sequences (Brevo, Mailchimp).',
          'Forms and payments — website enquiries straight into the CRM, invoices and online payment (Stripe or a local acquirer).',
          'Analytics — where clients come from and what works (Google Analytics 4, Search Console).',
        ],
      },
      {
        h: 'The order to set it up in',
        p: ['Order matters: email depends on the domain, forms on the CRM, analytics on the website. We build an agency stack in this sequence:'],
        list: [
          'Domain and DNS on a reliable provider.',
          'Work email with SPF, DKIM and DMARC — before the first client email goes out.',
          'CRM with pipeline stages that match your services.',
          'Website and forms that write enquiries straight into the CRM and copy them to email.',
          'Payments, invoicing and automatic receipts.',
          'Campaigns and analytics — once there is someone to email and something to measure.',
        ],
      },
      {
        h: 'Common mistakes when choosing a stack',
        list: [
          'Registering the domain and tools on an employee’s or contractor’s personal account — getting access back can take months.',
          'Running clients in spreadsheets and chat apps instead of a CRM — leads get lost and history leaves with the account manager.',
          'Sending campaigns from the main domain without DKIM and DMARC — day-to-day email starts landing in spam.',
          'Buying an all-in-one suite on day one: a huge platform used at 10% costs more and is harder to run than a few simple, connected tools.',
          'Not connecting the tools: when form, CRM and payments live apart, your team becomes the integration.',
        ],
      },
      {
        h: 'What an agency tech stack costs',
        p: ['For a team of 3–10 people, subscriptions usually land between a few dozen and a couple of hundred dollars a month: email is billed per user, CRM per seat, campaign tools by list size. The expensive part is not the subscriptions but the time to set up and connect everything, so we start with a minimal stack and upgrade plans as you grow.'],
      },
      {
        h: 'How Sikra builds an agency stack',
        p: ['We pick tools to fit your services and budget, register everything on the agency’s own accounts, set up domain, email, CRM, database, forms, payments and campaigns, connect them to each other and hand every login over to you — with a short guide for the team.'],
      },
    ],
    faq: [
      { q: 'What is the minimum tech stack for a new agency?', a: 'A domain, work email with SPF/DKIM/DMARC, a simple website with a form, a CRM and a way to take payment. Campaigns, a database and end-to-end analytics come once clients start flowing in.' },
      { q: 'Can an agency start without a CRM?', a: 'The first 5–10 clients can live in a spreadsheet, but do not wait long: the later you move deal history over, the more of it gets lost. Entry plans of most CRMs are cheap or free.' },
      { q: 'How long does it take to set up the stack?', a: 'A minimal stack — domain, email, website with a form and CRM — usually takes one to two weeks. The full set with payments, campaigns and a database takes two to four weeks.' },
    ],
  },

  'tech-stack-for-business': {
    title: 'The tech stack for a business: which tools a small or mid-sized business needs',
    seoTitle: 'Tech stack for a small business — what to choose | Sikra',
    desc: 'The tech stack for a business: website, domain, work email, CRM, database, email campaigns, forms and payments. A ready-made set for small and mid-sized businesses.',
    lead: 'A business tech stack is more than a website. It is a connected system of services through which a client finds you, sends an enquiry, pays and comes back. Here is what it is made of for a small or mid-sized business, and how not to overpay.',
    sections: [
      {
        h: 'The core tech stack for a business',
        list: [
          'A website on your own domain with SSL and fast hosting.',
          'Work email on the company domain with correct SPF, DKIM and DMARC.',
          'A CRM for enquiries, clients and repeat sales.',
          'A database or back-office system for orders, products and history.',
          'Website forms connected to the CRM and email.',
          'Online payments, invoices and receipts.',
          'An email campaign tool for notifications, offers and win-back.',
          'Analytics: Google Analytics 4 and Google Search Console.',
        ],
      },
      {
        h: 'Service businesses vs. retail',
        p: [
          'For a service business — a salon, studio, clinic, law or accounting firm — booking, CRM and client reminders come first: an online booking calendar, a CRM client record and automatic emails or messages.',
          'For retail and e-commerce, the catalogue, stock and payments come first: an online shop or storefront, a product and order database, a payment gateway, shipping integration and transactional order-status emails.',
        ],
      },
      {
        h: 'How to choose tools without overpaying',
        list: [
          'Start from jobs, not brands: map the client’s path from first touch to payment.',
          'Prefer tools with an open API and ready-made integrations.',
          'Check where the data lives and whether you can export it if you switch.',
          'Take the smallest plans and upgrade when you hit the limits.',
          'Put every account in the company’s name and keep logins in a password manager.',
        ],
      },
      {
        h: 'Signs it is time to rebuild your stack',
        list: [
          'Enquiries arrive in five different places and some get lost.',
          'Staff copy data by hand between spreadsheets, the CRM and accounting.',
          'Emails to clients land in spam.',
          'Nobody can say which channel brought your best clients.',
          'Only a former contractor has access to the domain or website.',
        ],
      },
      {
        h: 'How Sikra helps',
        p: ['We audit your current tools, propose a target tech stack for your business, migrate the data, set up website, email, CRM, database, forms, payments and campaigns and connect them into one system. Every account stays yours.'],
      },
    ],
    faq: [
      { q: 'What is in a small business tech stack?', a: 'Website and domain, work email, CRM, enquiry forms, payments, email campaigns and analytics. Retail adds a catalogue and order management; services add online booking.' },
      { q: 'Does a small business need its own developer?', a: 'Usually not. A modern stack is assembled from ready-made services that are configured without code. Development is needed for unusual logic or complex integrations.' },
      { q: 'Can a business move to a new stack without downtime?', a: 'Yes. We migrate the data and switch DNS in an agreed window, and turn the old tools off only after checking everything works.' },
    ],
  },

  'start-an-agency': {
    title: 'How to start an agency: a step-by-step digital launch plan',
    seoTitle: 'How to start an agency from scratch — step by step | Sikra',
    desc: 'How to start an agency from scratch: niche and services, name and domain, a website with case studies, work email, CRM, contracts, payments and first clients.',
    lead: 'Starting an agency — marketing, creative, digital, recruiting or consulting — begins not with a logo but with a clear service and a system for clients to come into. Here is the step-by-step plan we use to help launch agencies.',
    sections: [
      {
        h: 'Step 1. Niche, services and packaging',
        p: ['Decide who you work for and which problem you solve. Define 2–4 services with a clear outcome, timeline and starting price. A narrow focus — say, “paid social for clinics” — sells more easily than “marketing for everyone”.'],
      },
      {
        h: 'Step 2. Name, domain and legal entity',
        p: ['Check the name is free as a domain and on social networks. Register the domain in the company’s name, not an employee’s. In parallel, set up the legal entity in your country and open a business bank account — you will need it to take payments.'],
      },
      {
        h: 'Step 3. The agency’s digital foundation',
        list: [
          'Work email on your domain with SPF, DKIM and DMARC.',
          'Website: services, case studies, team, enquiry form and a link to book a call.',
          'CRM with a pipeline: enquiry → brief → proposal → contract → payment → delivery.',
          'Templates for the brief, the proposal and the contract.',
          'Payments and invoicing.',
          'Google Analytics 4 and Search Console on the website.',
        ],
      },
      {
        h: 'Step 4. Team processes and tools',
        p: ['Decide where the team tracks tasks and stores files, how clients receive reports and who owns each stage. Even a two-person agency benefits from writing the process down: it speeds up hiring and prevents chaos as clients multiply.'],
      },
      {
        h: 'Step 5. First clients',
        list: [
          'Produce 2–3 case studies — even on discounted terms — and publish them on the site.',
          'Work through your network and ask for referrals.',
          'Start a simple newsletter or content channel for a warm audience.',
          'Set up repeat-sales reminders in the CRM.',
        ],
      },
      {
        h: 'How long it takes to start an agency',
        p: ['The digital launch — domain, email, website, CRM, forms and payments — takes two to four weeks once services and copy are ready. Legal setup and the first clients run in parallel and depend on your country and niche.'],
      },
    ],
    faq: [
      { q: 'Where do I start when starting an agency?', a: 'With a niche and 2–4 clear services. Then a domain, work email, a website with case studies and a CRM, so no enquiry gets lost.' },
      { q: 'Does an agency need a website if clients come by referral?', a: 'Yes. A referred client almost always checks the website before calling. A site with case studies and clear services builds trust and converts more referrals into deals.' },
      { q: 'Can one partner handle the whole digital launch of an agency?', a: 'Yes — that is what Sikra does: we set up the domain, email, website, CRM, databases, forms, payments and campaigns and hand all access over to you.' },
    ],
  },

  'start-a-business': {
    title: 'How to start a business: what you need to launch online',
    seoTitle: 'How to start a business — a launch checklist | Sikra',
    desc: 'How to start a business from scratch: idea and demand check, registration, domain, website, work email, CRM, payments, email campaigns and analytics. A practical checklist.',
    lead: 'Starting a business today almost always includes a digital side: even an offline café or workshop gets clients through its website, maps and messaging apps. This checklist helps you miss nothing at launch.',
    sections: [
      {
        h: 'Test the idea before spending big',
        p: ['Describe the client, their problem and what they are willing to pay. Build a simple page with the offer and an enquiry form and send a little paid traffic to it, or show it to people in your target audience. Enquiries and payments are the best proof of demand.'],
      },
      {
        h: 'Registration and finance',
        list: [
          'Choose a legal form and register the company or sole proprietorship.',
          'Open a business bank account with online banking.',
          'Decide how you will issue invoices and receipts.',
          'Keep personal and business money separate from day one.',
        ],
      },
      {
        h: 'The digital foundation of a business',
        list: [
          'A domain — short, without hyphens, registered to the company.',
          'A website with a clear offer, starting prices, testimonials and a form.',
          'Work email instead of a personal Gmail — clients trust an address on your domain more.',
          'A CRM, or at least a single database of clients and enquiries.',
          'Online payments with automatic receipts.',
          'A Google Business Profile if you have a location or serve a specific city.',
          'Analytics: Google Analytics 4 and Search Console.',
        ],
      },
      {
        h: 'Winning and keeping clients',
        p: ['Launch one or two channels and make them work: SEO and content, search ads, social media, partnerships. Every enquiry should land in the CRM. Collect consent for email and bring clients back with campaigns — the cheapest source of repeat sales.'],
      },
      {
        h: 'Common mistakes when starting a business',
        list: [
          'Spending months on a “perfect” website instead of testing demand.',
          'Putting the domain and accounts in a contractor’s name.',
          'Ignoring unit economics: what a client costs and what they bring in.',
          'Spreading across every channel at once.',
        ],
      },
    ],
    faq: [
      { q: 'What do you need to start a business online?', a: 'A registered company and bank account, a domain, a website, work email, a CRM, payments and analytics — then one or two channels to win clients.' },
      { q: 'How much does a digital business launch cost?', a: 'It depends on scope: a simple website with email and a form costs far less than a shop with payments and integrations. We give you a scope and timeline after a short brief.' },
      { q: 'Can you start a business without a website?', a: 'You can start on social media or a marketplace, but a website on your own domain is an asset you own: it collects search traffic and does not depend on someone else’s platform rules.' },
    ],
  },

  'business-email-and-domain': {
    title: 'Business email and domain: how to set them up properly',
    seoTitle: 'Business email on your own domain — setup guide | Sikra',
    desc: 'How to set up business email on your company domain: choosing a provider, MX, SPF, DKIM and DMARC so your mail stays out of spam. A guide for businesses and agencies.',
    lead: 'An address like name@company is the first thing a client sees after your website. But the DNS records behind it matter more than the address: without them even legitimate email lands in spam. Here is how to set up business email and a domain.',
    sections: [
      {
        h: 'Choosing a domain',
        list: [
          'Short and easy to spell out over the phone, without hyphens or digits.',
          'On a TLD your clients trust: .com, your country code or an industry TLD.',
          'Registered to the company, with auto-renewal switched on.',
          'DNS kept with a reliable provider such as Cloudflare.',
        ],
      },
      {
        h: 'Choosing an email provider',
        p: ['The most common options are Google Workspace, Microsoft 365 and Zoho Mail. They differ in interface, office apps and price per user. For a small team the brand matters less than having every mailbox, alias such as info@ and sales@, and shared calendar in one place.'],
      },
      {
        h: 'DNS records: MX, SPF, DKIM, DMARC',
        list: [
          'MX — tells the world which server receives mail for the domain.',
          'SPF — lists the servers allowed to send mail on behalf of the domain.',
          'DKIM — a cryptographic signature proving the message was not tampered with.',
          'DMARC — the policy for messages that fail those checks, plus reports on spoofing attempts.',
        ],
        p: ['Since 2024 Gmail and Yahoo require SPF, DKIM and DMARC from bulk senders. Even if you only email clients by hand, deliverability is noticeably worse without them.'],
      },
      {
        h: 'Campaigns and transactional email',
        p: ['Your campaign tool and website notifications (confirmations, receipts) must also be included in SPF and signed with DKIM. Bulk campaigns are often sent from a separate subdomain so that campaign issues do not hurt day-to-day email.'],
      },
    ],
    faq: [
      { q: 'Why does email from my company domain go to spam?', a: 'Most often SPF, DKIM and DMARC are missing or misconfigured, or the domain is new and has no reputation yet. Checking and fixing the DNS records usually solves it.' },
      { q: 'Can I move email to another provider without losing messages?', a: 'Yes. Messages are copied with migration tools and the MX records are switched last, so no new mail is lost.' },
      { q: 'How many mailboxes does a small company need?', a: 'One personal mailbox per employee, plus free aliases such as info@, sales@ and support@ forwarded to the right people.' },
    ],
  },

  'crm-for-small-business': {
    title: 'CRM for a small business or agency: how to choose and roll it out',
    seoTitle: 'CRM for small business and agencies — choosing and setup | Sikra',
    desc: 'How to choose a CRM for a small business or agency: HubSpot, Pipedrive, Kommo, Bitrix24 and others. Pipeline, website and email integration, and a painless rollout.',
    lead: 'A CRM is where every client, enquiry and agreement lives. Without one, sales depend on people’s memory. Here is how to choose a CRM for a small business or agency and roll it out so the team actually uses it.',
    sections: [
      {
        h: 'What a CRM should do',
        list: [
          'Client and company records with the history of emails, calls and deals.',
          'A sales pipeline with stages that match your process.',
          'Tasks and reminders so no client is left without a reply.',
          'Enquiries captured from the website, email and messaging apps.',
          'Reports: how many enquiries, what conversion, how much revenue in play.',
          'An API and integrations with email, calendar, payments and campaigns.',
        ],
      },
      {
        h: 'Popular CRMs for small businesses',
        list: [
          'HubSpot — an easy start with a free plan and a strong marketing module.',
          'Pipedrive — a simple, visual pipeline for sales teams.',
          'Kommo (formerly amoCRM) — strong on messaging apps.',
          'Bitrix24 — CRM plus tasks, chat and a team intranet.',
          'Airtable or a Supabase database — when your process is unusual and needs its own data model.',
        ],
      },
      {
        h: 'Rolling out a CRM without team pushback',
        list: [
          'Write your sales process on one page before configuring anything.',
          'Keep only the fields you need — every extra field lowers data quality.',
          'Connect website forms and email so enquiries arrive on their own.',
          'Import current clients and open deals.',
          'Run a short training and name an owner.',
        ],
      },
      {
        h: 'CRM for agencies',
        p: ['Beyond sales, an agency needs to see projects and renewals: stages like brief, proposal, contract, in progress and renewal. It helps to connect the CRM to invoicing and a task tracker so a paid deal becomes a project for the team automatically.'],
      },
    ],
    faq: [
      { q: 'Which CRM should a small business choose?', a: 'For a simple sales team, Pipedrive or HubSpot; with lots of messaging, Kommo; if you also want tasks and internal chat, Bitrix24. The final choice depends on your process and integrations.' },
      { q: 'How long does a CRM rollout take?', a: 'A basic setup with a pipeline, website forms and client import usually takes from a few days to two weeks.' },
      { q: 'Can a CRM be connected to the website and payments?', a: 'Yes. Website form enquiries flow into the CRM automatically, and payment statuses come in from the payment provider through integrations or the API.' },
    ],
  },
};
