// rotation
var objRotateX = 0;
var objRotateY = 0;
var objRotateZ = 0;

function setup() {
   createCanvas(windowWidth, 600, WEBGL);
}

function draw() {
  background(255);
  fill(0)
  doAnimate();
  objRotate();
  drawModel();
  
}

function drawModel() {
  var groupRadius = 200;
  var sphereCount = 40;
  var sphereMaxR = 25;
  

  for (var s=0; s < sphereCount; s++) {
    
    var noiseCoord = s;
    var rnd = lerp(-1,1,noise(noiseCoord));

    
    // translate
    rotateY(PI*rnd);
    rotateZ(PI*rnd);
    translate(groupRadius,0,0); 
    
    sphere(rnd * sphereMaxR, 40);
    
    //reset translation
    translate(-groupRadius,0,0);  
    rotateY(-(PI*rnd));
    rotateZ(-(PI*rnd));
  }
  
}

function doAnimate() {
  // increment animation variables
  objRotateX -= 0.1;
  objRotateY -= 0.1;
  objRotateZ -= 0.1;
}

function objRotate() {
  rotateX(radians(objRotateX));
  rotateY(radians(objRotateY));
  rotateZ(radians(objRotateZ));
}