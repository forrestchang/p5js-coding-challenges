function Bird() {
  this.x = 100;
  this.y = height / 2;
  this.r = 30;

  this.velocity = 0;
  this.gravity = 0.5;
  this.lift = -15;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, this.r, this.r);
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y > height - 15) {
      this.y = height - 15;
      this.velocity = 0;
    } else if (this.y < 15) {
      this.y = 15;
      this.velocity = 0;
    }
  }

  this.up = function() {
    this.velocity += this.lift;
  }
}
