/* tour highlights start */
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    },
    1560: {
      slidesPerView: 3
    }
  }
});
/* tour highlights end */

/* accordians start */
$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this).prev(".card-header").addClass("highlight");
  });

  // Highlight open collapsed element 
  $(".card-header .btn").click(function () {
    $(".card-header").not($(this).parents()).removeClass("highlight");
    $(this).parents(".card-header").toggleClass("highlight");
  });
});
/* accordians end */

// smooth scroll
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
