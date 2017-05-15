var ball;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  ball = new Ball();
}

function draw() {
  background(0);

  ball.update();
  ball.show();
}
