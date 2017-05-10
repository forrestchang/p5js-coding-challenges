function Ball() {
  this.width = 20;
  this.x = width / 2 - this.width;
  this.y = height - height / 4;

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

  this.reset = function() {
    this.x = width / 2 - this.width;
    this.y = height - height / 4;
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

  this.hits = function(block) {
    // y 轴方向碰撞
    if (this.x + this.width > block.x && this.x < block.x + block.width) {
      if (this.y > block.y - this.width && this.y < block.y + block.height) {
        this.yspeed *= -1;
        return true;
      }
    }

    // x 轴方向碰撞

    return false;
  }
}