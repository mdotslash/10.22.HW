// word spray
//recalls a new word from an array on click 

//var word = ['eat', 'sleep', 'dip', 'thong','dong', 'dead', 'bone', 'eight', 'nine','ten'];
var img; // gif

function preload() {
  // load image
  img = loadGif("assets/pizza.gif");
}

function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
  //image(img, 0, 0);
  for (i = 0; i < img.totalFrames(); i++){
    //frame = i;
    //image(img, i, 0);
    //console.log(i); // test it's working
    // if (img.loaded()) {
    // console.log('SWWWWWWWeeeeeeeeeeeeeet')
    image(img, width/2 , i );
    //}
  }
}