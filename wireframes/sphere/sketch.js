function setup(){
  createCanvas(window.innerWidth, 400, WEBGL);
}

function draw(){

  background(255);
  noFill();
  stroke(0);
  
  translate(0, 0, 0);
  push();
  rotateY(frameCount * 0.01);
  sphere(120);
  pop();
  
}