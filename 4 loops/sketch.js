function setup() {
  createCanvas(480,120);
  stroke(255)
}

function draw() {
  background(255,200,200,50);
  for (var i = 20; i < 400; i+= 60) {
    rect(i, 40, i + 60, 80);
     strokeWeight(random(1,10));
     //nofill()
     //background(random(0,105)+mouseX)
     
  }
  
}