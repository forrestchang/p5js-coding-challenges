function Rain() {
  this.x = random(width);
  this.y = random(-1000, -500);

  this.z = random(0.1, 10);

  this.width = map(this.z, 0.1, 10, 0.5, 3);
  this.height = random(5, 30);

  this.speed = 0;
  this.gravity = map(this.z, 0.1, 10, 0.1, 0.3);

  this.show = function() {
    noStroke();
    fill(234, 67, 53);
    rect(this.x, this.y, this.width, this.height);
  }

  this.fall = function() {
    this.speed += this.gravity;
    this.y += this.speed;
  }

  this.update = function() {
    this.fall();
    if (this.y > height) {
      this.y = random(-1000, -500);
      this.speed = 0;
    }
  }
}
