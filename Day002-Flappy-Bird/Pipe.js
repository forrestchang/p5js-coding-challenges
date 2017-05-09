function Pipe() {
  this.topHeight = random(height / 4, height / 2);
  this.bottomHeight = random(height / 4, height / 2);
  this.x = width;
  this.w = 40;
  this.speed = 3;

  this.show = function() {
    fill(255);
    rect(this.x, 0, this.w, this.topHeight);
    rect(this.x, height - this.bottomHeight, this.w, this.bottomHeight);
  }

  this.update = function() {
    this.x -= this.speed;
  }
}