function Ball(m, x, y) {
  this.mass = m;
  this.position = createVector(x, y);
  this.r = this.mass * 16;

  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);

  this.applyForce = function(force) {
    // F = M * A --> A = F / M
    var a = p5.Vector.div(force, this.mass);
    this.acceleration.add(a);
  };

  this.show = function() {
    fill(255);
    ellipse(this.position.x, this.position.y, this.r, this.r);
  };

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.checkEdge = function() {
    if (this.position.y > height - this.r/2) {
      this.velocity.y *= -0.9;
      this.position.y = height - this.r;
    } else if (this.position.y - this.r < 0) {
      this.velocity.y *= -0.9;
      this.position.y = this.r;
    }

    if (this.position.x + this.r > width) {
      this.velocity.x *= -0.9;
      this.position.x = width - this.r;
    } else if (this.position.x - this.r < 0) {
      this.velocity.x *= -0.9;
      this.position.x = this.r;
    }
  };

}
