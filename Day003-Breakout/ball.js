function Ball() {
  this.width = 20;
  this.x = width / 2 - this.width;
  this.y = height - 50 - this.width;

  this.xspeed = random(-10, 10);
  this.yspeed = random(-10, 10);

  this.show = function() {
    fill(29, 176, 205);
    rect(this.x, this.y, this.width, this.width);
  }

  this.update = function() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  this.edges = function() {
    if (this.y < 0) {
      this.yspeed *= -1;
    }
    if (this.x < 0 || this.x + this.width > width) {
      this.xspeed *= -1;
    }
    if (this.y + this.width > height) {
      this.reset();
    }
  }
  
  this.reset = function() {
    fill(29, 176, 205);
    rect(this.x, this.y, this.width, this.width);
  }

  this.hits = function(block) {
    if (this.x >= block.x && this.x <= block.x + block.width) {
      if (this.y + this.width > block.y) {
        this.yspeed *= -1;
      }
    }
    if (this.x < block.x + block.width || this.x + this.width > block.x) {
      if (this.y + this.width > block.y && this.y + this.width < block.height) {
        this.sxpeed *= -1;
      }
    }
  }
}