var rains = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  for (var i = 0; i < 1000; i++) {
    rains.push(new Rain());
  }
}

function draw() {
  background(253, 253, 254);

  for (var i = 0; i < rains.length; i++) {
    rains[i].update();
    rains[i].show();
  }
}