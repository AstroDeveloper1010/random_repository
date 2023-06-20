// Smooth scrolling for older browsers
(function () {
  // Check if the browser supports the 'scrollBehavior' property
  if ('scrollBehavior' in document.documentElement.style) {
    return;
  }

  // Smooth scroll polyfill
  function smoothScrollPolyfill() {
    var duration = 500; // Adjust this value to control the scroll speed
    var target = document.getElementById(event.target.getAttribute('href').substring(1));
    if (!target) return;

    var startPosition = window.pageYOffset;
    var targetPosition = target.offsetTop;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var percentage = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + (distance * percentage));
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  // Attach smooth scrolling behavior to all internal links
  var links = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', smoothScrollPolyfill);
  }
})();
