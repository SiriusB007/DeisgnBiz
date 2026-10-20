// 1. Add the four corner marks to every element with the "blueprint" class.
document.querySelectorAll('.blueprint').forEach(function (el) {
  ['tl', 'tr', 'bl', 'br'].forEach(function (pos) {
    var corner = document.createElement('i');
    corner.className = 'corner ' + pos;
    el.prepend(corner);
  });
});

// 2. Play the gold comet + sparkle animation over the brand name once on load.
var sparkle = document.querySelector('.sparkle');

if (sparkle) {
  // The comet that sweeps across the name
  sparkle.innerHTML =
    '<span class="comet"><span class="comet-tail"></span><span class="comet-head"></span></span>';

  // Twelve little stars that pop in as the comet passes
  for (var i = 0; i < 12; i++) {
    var x = 6 + i * 8;                    // horizontal position (%)
    var size = 5 + ((i * 7) % 3) * 2;     // 5, 7 or 9 px
    var star = document.createElement('span');
    star.className = 'star';
    star.style.left = x + '%';
    star.style.top = (20 + ((i * 37) % 60)) + '%';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDelay = Math.round(300 + (x / 100) * 1300) + 'ms';
    sparkle.appendChild(star);
  }
}
