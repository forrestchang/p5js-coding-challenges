var balls = [];
var time;
var flag;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  balls.push(new Ball(random(10, 50), random(width), random(height)));
  flag = new Flag();
}

function draw() {
  background(0);

  flag.update(mouseX, mouseY);
  flag.show();

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

function Flag() {
  this.x = width / 2;
  this.y = height / 2;

  this.x2 = width / 2;
  this.y2 = width / 2;

  this.show = function() {
    fill(255);
    line(this.x, this.y, this.x2, this.y2);
  };

  this.update = function(x, y) {
    this.x2 = x;
    this.y2 = y;
  };
}
