/* ============================================================
   CUSTOM STAR CURSOR
   Replaces the system pointer with the pink star (#star-cursor,
   defined in _layouts/default.html) and grows/rotates it slightly
   over links, buttons and work cards.
   Disabled automatically on touch devices — see style.scss.
   ============================================================ */
(function () {
  var cursor = document.getElementById("star-cursor");
  if (!cursor) return;
  if (window.matchMedia("(hover: none)").matches) return; // touch device, skip

  var targetX = 0, targetY = 0, x = 0, y = 0;
  var visible = false;

  window.addEventListener("mousemove", function (e) {
    targetX = e.clientX;
    targetY = e.clientY;
    if (!visible) { visible = true; cursor.style.opacity = "1"; }
  });

  cursor.style.opacity = "0";
  cursor.style.transition += ", opacity .2s ease";

  function raf() {
    // light easing so the star trails the pointer just a touch
    x += (targetX - x) * 0.35;
    y += (targetY - y) * 0.35;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  var hoverTargets = "a, button, .work-card, .btn, input, textarea, [role='button']";
  document.addEventListener("mouseover", function (e) {
    if (e.target.closest(hoverTargets)) cursor.classList.add("is-hovering");
  });
  document.addEventListener("mouseout", function (e) {
    if (e.target.closest(hoverTargets)) cursor.classList.remove("is-hovering");
  });
})();
