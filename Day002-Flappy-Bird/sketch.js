var bird;
var pipes = [];

function setup() {
  createCanvas(600, 800);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].update();
    pipes[i].show();

    if (pipes[i].hits(bird)) {
      console.log('Hit');
      pipes[i].changeColor();
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }

  }

  bird.update();
  bird.show();

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
}

function mousePressed() {
  bird.up();
}