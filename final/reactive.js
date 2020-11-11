var mic;
var WIDTH=1280;
var HEIGHT=1080;

function preload(){
  sound = loadSound("backgroundmusic.mp3");

function touchStarted() {
  getAudioContext().resume();
}

window.onload = function(){
    canvasContext = document.GetElementById("meter").getContext("2d");
}
function setup() {
  createCanvas(WIDTH, HEIGHT );
  mic = new p5.AudioIn();
  mic.start();
  sound.setVolume(1);
}

function draw() {
  background(0);
  var vol = mic.getLevel();
  ellipse(600, 500, vol*5000, vol * 5000);
  if (vol > 0.75){
    background(0);
    fill("#FF0000");
    sound.play();
  }
}
