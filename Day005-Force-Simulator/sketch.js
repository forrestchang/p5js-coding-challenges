var balls = [];
var time;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  balls.push(new Ball(random(10, 50), random(width), random(height)));
}

function draw() {
  background(0);


  for (var i = 0; i < balls.length; i++) {
    var gravity = createVector(map(mouseX, 0, width, -5, 5), map(mouseY, 0, height, -1, 1)*balls[i].mass);
    noStroke();
    balls[i].applyForce(gravity);
    balls[i].update();
    balls[i].show();
    balls[i].checkEdge();
  }

}

function mousePressed() {
  balls.push(new Ball(random(10, 50), mouseX, mouseY));
}
