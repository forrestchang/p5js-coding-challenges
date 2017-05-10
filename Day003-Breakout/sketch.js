var baffle;
var ball;
var bricks = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  baffle = new Baffle();
  ball = new Ball();
  for (var i = 100; i < width - 100; i += 100) {
    for (var j = 100; j < 300; j += 15) {
      bricks.push(new Brick(i, j));
    }
  }
}

function draw() {
  background(0);

  baffle.update();
  baffle.show();

  ball.update();
  ball.edges();
  ball.hits(baffle);
  ball.show();

  for (var i = bricks.length - 1; i >= 0; i--) {
    if (ball.hits(bricks[i])) {
      bricks.splice(i, 1);
    } else {
      bricks[i].show();
    }
  }

  checkWin();
}

function checkWin() {
  if (bricks.length === 0) {
    console.log('You win');
  }
}
