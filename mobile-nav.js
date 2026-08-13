(function () {
  var root = document.documentElement;
  root.setAttribute('data-js', 'true');
  var btn = document.querySelector('[data-mobile-nav-toggle]');
  var header = document.querySelector('.site-header');
  if (!btn || !header) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function setOpen(open) {
    header.setAttribute('data-mobile-nav-open', open ? 'true' : 'false');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  btn.addEventListener('click', function () {
    var open = header.getAttribute('data-mobile-nav-open') === 'true';
    setOpen(!open);
  });
  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.getAttribute('data-mobile-nav-open') === 'true') {
      setOpen(false);
      btn.focus();
    }
  });
  // Reduced-motion users get the open state with no animation regardless.
  if (reduce) root.setAttribute('data-reduced-motion', 'true');
})();
