
function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.pipewidth = 15;
  this.speed = 3;
  this.highlight = false;



  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.pipewidth, this.top);
    rect(this.x, height-this.bottom, this.pipewidth, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed
  }

  this.offscreen = function() {
    if (this.x < -this.pipewidth){
      return true;
    }
    else {
      return false;
    }

  }

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.pipewidth) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }
}
