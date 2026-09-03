/* ============================================================
   GENERAL SITE INTERACTIONS
   ============================================================ */
(function () {
  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Reel work-card videos: play a muted preview on hover, pause on leave.
  // // If you'd rather they always autoplay, remove this block and add
  // // the `autoplay muted loop playsinline` attributes directly in the
  // // <video> tag inside reel.html instead.
  document.querySelectorAll(".work-card video").forEach(function (video) {
    var card = video.closest(".work-card");
    if (!card) return;
    card.addEventListener("mouseenter", function () {
      video.currentTime = 0;
      video.play().catch(function () {});
    });
    card.addEventListener("mouseleave", function () {
      video.pause();
    });
  });
})();
