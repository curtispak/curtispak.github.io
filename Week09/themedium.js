console.log("the message!");

const theButton = document.querySelector("#firstButton");
let theTxt = document.querySelector("h2");
let theBody = document.querySelector("body");

theButton.addEventListener('click', isClicked);

function isClicked(){
  console.log("clicked!");
  theTxt.style.backgroundColor = "blue";
  theTxt.textContent = "you turned me blue!";
  theBody.style.backgroundColor = "yellow";
}
