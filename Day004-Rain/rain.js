function Rain() {
  this.z = random(1, 2);

  this.width = 2 * this.z;
  this.height = random(20, 50);
  this.x = random(0, width);
  this.y = -this.height;
  
  this.velocity = random(0, 10);
  this.gravity = 0.3 * this.z;

  this.r = random(0, 255);
  this.g = random(0, 255);
  this.b = random(0, 255);

  this.show = function() {
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.width, this.height);
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = -this.height;
      this.velocity = 0;

      this.r = random(0, 255);
      this.g = random(0, 255);
      this.b = random(0, 255);
    }
  }
}