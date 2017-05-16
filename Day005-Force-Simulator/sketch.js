var balls = [];
var time;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  for (var i = 0; i < 10; i++) {
    balls.push(new Ball(random(20, 50), random(width), random(height)));
  }
}

function draw() {
  background(0);


  for (var i = 0; i < balls.length; i++) {
    var gravity = createVector(0, 0.1*balls[i].mass);
    balls[i].applyForce(gravity);
    balls[i].update();
    balls[i].show();
    balls[i].checkEdge();
  }

}
