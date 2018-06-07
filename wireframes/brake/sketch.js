
var cols, rows;
var scl = 40;
var w = 7000;
var h = 4000;

var flying = 0.0;

var terrain = [];

function setup() {
  createCanvas(2000, 600, WEBGL);
  cols = w / scl;
  rows = h/ scl;
  
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}


function draw() {

  noLoop()

  flying -= 0.1;

  var yoff = flying;
  for (y = 0; y < rows; y++) {
    var xoff = 0;
    for (x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }



  background(255);
  stroke(0);
  noFill();
  translate(width/2-900, height/2+50);
  rotateX(PI/4);
  translate(-w/2, -h/2);
  for (y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
      //rect(x*scl, y*scl, scl, scl);
    }
    endShape();
  }

  noLoop();
}
