function Bird() {
  this.y = height/2;
  this.x = 30;

  this.birdheight = 32;
  this.birdwith = 32;

  this.gravity = 120;
  this.velocity = 0;
  this.lift = 25;

  this.show = function() {
    image(im_character, this.x, this.y);
  }

  this.update = function() {
    this.velocity += this.gravity/100;
    this.velocity *= 0.9;
    this.y += this.velocity;

    //Check if bird hits bottom of screen
    if(this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    //check if bird hits top of screen
    if(this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }

  this.flap = function() {
    this.velocity -= this.lift;
  }

}
