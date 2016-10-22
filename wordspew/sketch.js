// word spray
//recalls a new word from an array on click 

var word = ['eat', 'sleep', 'dip', 'thong','dong', 'dead', 'bone', 'eight', 'nine','ten'];

function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
  for (i = 0; i < word.length; i++){
  console.log(word[i]); // test it's working
  fill(random(0,100));
  //textAlign(CENTER);
  textSize(30);
  text(word[i], random(0,width), random(0,height));
  }
  }