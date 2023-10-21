
let value = 0;
let tposX,tposY;

function setup(){
  createCanvas(400, 400); 
}

function draw() {
  createCanvas(400,400);
  background(255);

  textSize(25);
  fill(value);
  rect(175, 175, 50, 50);
  fill(0,0,255);
  text('test',50,50);

// mouseIsPressed stores the current mouse position on computer
//  the computer touchpad operation is erratic not sure how it is set-up 

  if(mouseIsPressed === true){
    fill(255,0,0);
    ellipse(mouseX,mouseY,100,100);
  }


  if(touches.length >= 0){
    text(touches.length,20,20);
    }   
}

// when a touch screen is touched touches objects are populated
// the touches.length variable indicates the number of simultaneous touchs
// it is "0" with no touches and returns to 0 when the touches are removed
// not quite sure yet what happens to touches.x and touches.y when the
// touches are removed but the touches object DOES NOT populate on a computer
// i.e. no touch 

function touchStarted() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }

}
