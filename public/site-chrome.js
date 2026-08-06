/* Redesign v2 site chrome, for the standalone pages under public/.
   The Astro pages get the equivalent from Navigation.astro; this keeps the
   hand-written HTML behaving identically.

   Sole job: the bar is `position: fixed`, so the spacer under it has to
   track the bar's real height rather than a hardcoded number that drifts
   when the font loads or the viewport narrows. */
(function () {
  var nav = document.getElementById('topNav');
  if (!nav) return;

  function fitNav() {
    var h = nav.offsetHeight;
    document.documentElement.style.setProperty('--nav-h', h + 'px');
  }

  fitNav();
  window.addEventListener('resize', fitNav);
  window.addEventListener('load', fitNav);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitNav);
})();
