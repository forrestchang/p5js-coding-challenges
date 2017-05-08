var dinasour = new Dinasour();
var clouds = [];
var barriers = [];
var speed = 3;
var value = 300;

function setup() {
  createCanvas(800, 400);
  for (var i = 0; i < 4; i++) {
    clouds[i] = new Cloud();
  }
  for (var i = 0; i < 4; i++) {
    barriers[i] = new Barrier();
  }
}

function draw() {
  background(255);

  dinasour.update();
  dinasour.show();

  // ground
  fill(52, 169, 83);
  noStroke();
  rect(0, 320, width, 100);

  // cloud
  for (var i = 0; i < clouds.length; i++) {
    clouds[i].update();
    clouds[i].show();
  }

  // barrier
  for (var i = 0; i < barriers.length; i++) {
    barriers[i].update();
    barriers[i].show();
  }
}

// Dinasour
function Dinasour() {
  this.x = 70;
  this.y = 300;

  this.update = function() {
    if (value < 300) {
      var rate = map(value, 0, 300, 1, 2.5);
      value += rate;
      if (value > 300) {
        value = 300;
      }
    }
  }
  
  this.show = function() {
    fill(48, 53, 65);
    noStroke();
    ellipse(this.x, value, 40, 40);
  }
}

// Cloud
function Cloud() {
  this.x = random(40, width);
  this.y = random(0, 150);
  this.r = random(40, 80);
  
  this.update = function() {
    if (this.x < 0 - this.r / 2) {
      this.x = width + 50;
      this.y = random(0, 150);
      this.r = random(40, 80);
    }
  }

  this.show = function() {
    fill(161, 170, 186);
    noStroke();
    this.x = this.x - speed;
    ellipse(this.x, this.y, this.r, 30);
  }
}

// Barrier
function Barrier() {
  this.x = random(0, width);
  this.height = random(30, 50);
  this.y = 320 - this.height;
  
  this.update = function() {
    this.x = this.x - 4;
    if (this.x + 30 < 0) {
      this.x = width + random(50, 200);
    }
  }

  this.show = function() {
    fill(234, 67, 53);
    noStroke();
    rect(this.x, this.y, 30, this.height);
  }
}

function mousePressed() {
  value = 200;
}