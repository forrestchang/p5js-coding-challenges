function Brick(x, y) {
  this.width = 100;
  this.height = 15;
  this.x = x;
  this.y = y;

  this.r = random(0, 255);
  this.g = random(0, 255);
  this.b = random(0, 255);

  this.show = function() {
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.width, this.height);
  }

}