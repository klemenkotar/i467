function setup(){
  createCanvas(window.innerWidth, 400, WEBGL);
}

function draw(){
  background(255);
  noFill();
  stroke(0);
  
  translate(0, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(120, 40);
  pop();
  
}