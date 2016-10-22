function setup() {
  createCanvas(800,800);
  background(0);
}

function draw() {
  background(0);
    for (i = 0; i < width; i++){
    rect(width/2, height/2, i, i);
    console.log(i);
  }
}