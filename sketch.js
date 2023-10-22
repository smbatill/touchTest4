//
// test sketch to sort out how to activate buttons and sliders in
// sketches that can run on both computer/moust and smartphone/table devices
// as of 10/21/23


let value = 0;

function setup(){
  createCanvas(400, 400); 
}

function draw() {
  createCanvas(400,400);
  background(255);

  textSize(20);
  fill(value);
  rect(175, 175, 50, 50);
  fill(0,0,255);
  text('# of touches',50,50);

// mouseIsPressed stores the current mouse position when using OSX 
// the computer touchpad operation is erratic not sure how it is set-up 
// a "mouse press" is not a touch in iOS but a screen touch in iS appears 
// to act like a mouse press as it stores in the mouseX and mouseY variables 
// the location of the touch but it seemed to take almost a second between 
// the touch on the screen and the screen response

  if(mouseIsPressed === true){
    fill(255,0,0);
    ellipse(mouseX,mouseY,100,100);
  }


  if(touches.length >= 0){
    text(touches.length,20,20);
    }   
}

// when a touch screen is touched the touches objects are populated
// the touches.length variable indicates the number of simultaneous touchs
// it is "0" with no touches and returns to 0 when the touches are removed
// not quite sure yet what happens to the touches.x and touches.y arrays when the
// touches are removed but the touches object DOES NOT populate on a computer
// i.e. you can't use or reference touch object arrays in OSX 

// in the touchStarted() function you can set variables you want to influence
// with the touch - but these are not affected by a mouse press in OSX

function touchStarted() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

// BOTTOM LINE: try to use mouseIsPressed to activate buttons and control
// slider 
//
