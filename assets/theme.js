// Applies the visitor's saved colour theme before the first paint.
//
// Loaded as a plain blocking <script> in <head> (no defer/async) on purpose:
// nothing but the body background is visible until React boots, so a visitor
// who picked the light theme would otherwise get a flash of the dark page on
// every load. It can't be inline for the same reason as analytics.js — the CSP
// sets script-src without 'unsafe-inline'.
//
// The component in index.html owns the toggle and the palette (tokens()); this
// file only has to agree with it on the storage key and the two values.
(function () {
  var theme;
  try { theme = localStorage.getItem('sikra-theme'); } catch (e) {}
  if (theme !== 'light') return;

  document.documentElement.setAttribute('data-theme', 'light');
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', '#F5F4F0');

  // The static preloads in <head> are the dark-theme images; start on the
  // light ones now too, rather than once React has mounted and swapped them.
  ['/assets/sikra-mark-light.webp', '/assets/sikra-logo-light.webp'].forEach(function (href) {
    var link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.type = 'image/webp';
    link.href = href;
    document.head.appendChild(link);
  });
})();
