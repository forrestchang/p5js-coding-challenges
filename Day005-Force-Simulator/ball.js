function Ball(m, x, y) {
  this.mass = m;
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);

  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  };

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.show = function() {
    noStroke();
    fill(255);
    ellipse(this.position.x, this.position.y, this.mass, this.mass);
  };

  this.checkEdge = function() {
    if (this.position.y > height - this.mass) {
      this.velocity.y *= -0.9;
      this.position.y = height - this.mass;
    } else if (this.position.y - this.mass < 0) {
      this.velocity.y *= -0.9;
    }

    if (this.position.x + this.mass > width) {
      this.velocity.x *= -0.9;
      this.position.x = width - this.mass;
    } else if (this.position.x - this.mass < 0) {
      this.velocity.x *= -0.9;
      this.position.x = this.mass;
    }
  };

  this.hits = function(otherBall) {
    var distance = dist(this.position.x, this.position.y, otherBall.position.x, otherBall.position.y);
    if (distance < this.mass + otherBall.mass) {
      this.velocity.mult(-0.9);
      otherBall.velocity.mult(-0.9);
    }
  };
}
