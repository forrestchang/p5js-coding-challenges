function Ball(x) {
  this.r = 50;
  this.x = width / 2;
  this.y = height / 2;

  this.velo = 1;
  this.acce = 0.9;

  this.t = 0;
  this.delta_x = 0;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, this.r, this.r);
  };

  this.update = function() {

  };

}
