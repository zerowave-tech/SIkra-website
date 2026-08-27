// Google Analytics bootstrap.
//
// This lives in its own file rather than an inline <script> on purpose: the CSP
// in vercel.json / _headers sets script-src without 'unsafe-inline', so an
// inline block is refused by the browser and gtag never gets configured. Being
// same-origin, this file is covered by 'self' and needs no CSP change.
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-VM756WGCL0');
