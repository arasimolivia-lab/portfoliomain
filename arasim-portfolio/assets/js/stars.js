/* ============================================================
   MOVING PINK STARS BACKGROUND
   Draws small 4-point stars on a full-screen canvas that drift
   slowly and twinkle. Respects prefers-reduced-motion.
   // EDIT: tweak STAR_COUNT / SPEED / COLORS below to taste.
   ============================================================ */
(function () {
  var canvas = document.getElementById("star-field");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");

  var STAR_COUNT = 70;              // // EDIT: number of stars on screen
  var SPEED = 0.12;                 // // EDIT: drift speed (px/frame-ish)
  var COLORS = ["#FF2E93", "#F4C21A", "#F1ECE1"]; // // EDIT: star colors (mostly pink)

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var stars = [];
  var w, h, dpr;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function makeStar() {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      size: 4 + Math.random() * 9,
      speedX: (Math.random() - 0.5) * SPEED,
      speedY: (Math.random() - 0.5) * SPEED + 0.03,
      rotation: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.01,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: 0.01 + Math.random() * 0.02
    };
  }

  function initStars() {
    stars = [];
    for (var i = 0; i < STAR_COUNT; i++) stars.push(makeStar());
  }

  function drawStar(s) {
    ctx.save();
    ctx.translate(s.x, s.y);
    ctx.rotate(s.rotation);
    var alpha = 0.35 + Math.abs(Math.sin(s.twinkle)) * 0.5;
    ctx.globalAlpha = alpha;
    ctx.fillStyle = s.color;
    ctx.beginPath();
    var r = s.size;
    for (var i = 0; i < 4; i++) {
      var angle = (Math.PI / 2) * i;
      ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
      ctx.lineTo(Math.cos(angle + Math.PI / 4) * (r * 0.35), Math.sin(angle + Math.PI / 4) * (r * 0.35));
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function tick() {
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      s.x += s.speedX;
      s.y += s.speedY;
      s.rotation += s.spin;
      s.twinkle += s.twinkleSpeed;

      // wrap around edges
      if (s.x < -20) s.x = w + 20;
      if (s.x > w + 20) s.x = -20;
      if (s.y < -20) s.y = h + 20;
      if (s.y > h + 20) s.y = -20;

      drawStar(s);
    }
    if (!reduceMotion) requestAnimationFrame(tick);
  }

  resize();
  initStars();

  if (reduceMotion) {
    // Draw a single still frame instead of animating.
    tick();
  } else {
    requestAnimationFrame(tick);
  }

  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      resize();
      initStars();
    }, 150);
  });
})();
