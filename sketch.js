
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

  if(mouseIsPressed === true){
    fill(255,0,0);
    rect(mouseX,mouseY,20,20);
  }


  if(touches.length >= 0){
    text(touches.length,100,100);
//    tposX = touches.x[1];
//     tposY = touches.y[1];
//   rect(tposX,tposY,30,30);
    }   
/*
    fill(255,0,0);
    rect(touches[0].x,touches[0].y,40,40);
    for(let i = 0; i <= touches.length; i++){
     fill(0);
     text(touches.length,touches[i].x+20,touches[i].y+20);
    }

  }
*/
}

function touchStarted() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }

}
