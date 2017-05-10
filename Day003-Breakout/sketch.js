var baffle;
var ball;
var bricks = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  baffle = new Baffle();
  ball = new Ball();
}

function draw() {
  background(0);

  baffle.update();
  baffle.show();

  ball.update();
  ball.edges();
  ball.hits(baffle);
  ball.show();
}
