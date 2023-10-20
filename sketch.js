
let value = 0;

function setup(){
  createCanvas(400, 400);

}

function draw() {
  fill(value);
  rect(175, 175, 50, 50);

  if(touches.length > 0)
    {fill(255,0,0);
    rect(touches[0].x,touches[0].y,40,40);
    }


}

function touchStarted() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
