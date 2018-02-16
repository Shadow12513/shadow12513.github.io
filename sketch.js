var Bird
var pipes = [];
var im_character;

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
  im_character = loadImage('assets/char.jpg');
}

function draw() {
  background(0);


  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }


  bird.show();
  bird.update();

  if (frameCount % 40  == 0) {
    pipes.push(new Pipe());
  }


}

function keyPressed() {
  if (key == ' ') {
    bird.flap();
  }
}
