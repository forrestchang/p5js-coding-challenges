function Baffle() {
  this.width = 200
  this.height = 15
  this.x = width / 2 - this.width / 2
  this.y = height - 50
  this.speed = 10;

  this.show = function() {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

  this.update = function() {
    this.x = mouseX;  
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x + this.width > width) {
      this.x = width - this.width;
    }
  }
}