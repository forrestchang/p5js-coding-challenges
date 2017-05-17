var balls = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  balls.push(new Ball(random(1, 5), width/2, height/2));
}

function draw() {
  background(0);

  ellipse(100, height-25, 50, 50);

  var gravity = createVector(0, 0.5);
  for (var i = 0; i < balls.length; i++) {
    balls[i].applyForce(gravity);
    balls[i].update();
    balls[i].show();
    balls[i].checkEdge();
  }

}

