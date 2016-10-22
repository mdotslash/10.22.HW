function setup() {
  createCanvas(600, 800);
}

function draw() {
  background(200);
  stroke(1);
  for (var i = 0; i < width; i+=20) {
    fill(0);
    ellipse(i, mouseX, 2, 10);
     rect(i+100, mouseX/5, 2, 10);
     rect(i-10, cos(20)*mouseX/3, 2, 10);
    rect(0, i , 2, 10 );
  }
}

// drew a for loop to draw squares
// drew a for loop to 