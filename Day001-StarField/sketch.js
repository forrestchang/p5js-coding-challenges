var stars = [];
var speed;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  // speed = map(mouseX, 0, width, 0, 50);
  speed = map(Math.abs(pos), -600, 600, 0, 50);
  if (speed > 50) {
    speed = 50;
  }
  background(0);

  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

var pos = 0;
function mouseWheel(event) {
  pos += event.delta;
}
