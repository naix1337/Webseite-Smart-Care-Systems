// SmartCare Systems - Main JS

(function() {
  // Mobile nav toggle
  var toggle = document.querySelector('[data-nav-toggle]');
  var links = document.querySelector('[data-nav-links]');
  if (toggle && links) {
    toggle.addEventListener('click', function() {
      links.classList.toggle('open');
    });
  }

  // AOS init (Animate On Scroll) minimal clone
  // Adds 'aos-animate' when element enters viewport
  var aosElements = [].slice.call(document.querySelectorAll('[data-aos]'));
  function onScroll() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    aosElements.forEach(function(el) {
      if (el.classList.contains('aos-animate')) return;
      var rect = el.getBoundingClientRect();
      var offset = parseInt(el.getAttribute('data-aos-offset') || '80', 10);
      if (rect.top <= vh - offset) {
        el.classList.add('aos-animate');
      }
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  document.addEventListener('DOMContentLoaded', onScroll);
  onScroll();
})();



