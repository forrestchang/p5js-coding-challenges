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
    if (height - this.topHeight - this.bottomHeight > 200 || height - this.topHeight - this.bottomHeight < 80) {
      this.topHeight = random(height / 4, height / 2);
      this.bottomHeight = random(height / 4, height / 2);
    }
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }

  this.hits = function(bird) {
    if (bird.y - bird.r < this.topHeight || bird.y + bird.r > height - this.bottomHeight) {
      if (bird.x >= this.x - bird.r && bird.x < this.x + this.w + bird.r) {
        return true;
      }
    }
    return false;
  }


  this.changeColor = function() {
    fill(251, 188, 5);
    rect(this.x, 0, this.w, this.topHeight);
    rect(this.x, height - this.bottomHeight, this.w, this.bottomHeight);
  }
}