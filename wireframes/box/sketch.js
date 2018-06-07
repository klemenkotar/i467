function setup(){
  createCanvas(window.innerWidth, 800, WEBGL);
}

function draw(){


  background(255);
  noFill();
  stroke(0);
  
  translate(0, 0, 0);
  push();
  rotateZ(frameCount * 0.0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.0);
  box(100, 100, 100);
  pop();

  translate(0, 0, 400);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.0);
  rotateY(frameCount * 0.0);
  box(100, 100, 100);
  pop();

  
}