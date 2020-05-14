var mic;
var fft;

function touchStarted() {
  getAudioContext().resume();
}

function setup() {
  createCanvas(1000, 1000);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  var vol = mic.getLevel();
  ellipse(600, 500, vol*5000, vol * 5000);
  for (var i = 0; i )
}
