
let value = 0;

function setup(){
  createCanvas(400, 400);

}

function draw() {
  textSize(15);
  fill(value);
  rect(175, 175, 50, 50);

  if(touches.length > 0){
    text(touches.length,100,100);
/*
    fill(255,0,0);
    rect(touches[0].x,touches[0].y,40,40);
    for(let i = 0; i <= touches.length; i++){
     fill(0);
     text(touches.length,touches[i].x+20,touches[i].y+20);
    }
*/

  }

}

function touchStarted() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
