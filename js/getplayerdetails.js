// Variables

//Players

//Player 1

var p1 = document.querySelector(".player1");
var p1form = p1.querySelector(".p1form");
var p1label = p1form.querySelector("label");
var p1name = p1form.querySelector("#p1name");
var p1signX = p1form.querySelector(".player1signX");
var p1signO = p1form.querySelector(".player1signO");
var p1lock = p1form.querySelector(".player1name");
var p1signsel = p1form.querySelector(".p1signselect");

// Gets the details of player 1 input field
function getP1Details(event) {
  event.preventDefault();
  var input = p1name.value;
  p1lock.innerHTML = input;
  p1label.remove();
  p1name.remove();
}

p1form.addEventListener("submit", getP1Details);

//Tells player 1 what sign they selected also disables the same sign on opponents selection

function getp1signselectX() {
  var input = p1signX.value;
  if (p1lock.innerHTML === "") {
    p1signsel.textContent = "Player controls " + input;
  } else {
    p1signsel.textContent = p1lock.innerHTML + " controls " + input;
  }
  p2signX.disabled = true;
  p2signO.disabled = false;
}

p1signX.addEventListener("change", getp1signselectX);

function getp1signselectO() {
  var input = p1signO.value;
  if (p1lock.innerHTML === "") {
    p1signsel.textContent = "Player controls " + input;
  } else {
    p1signsel.textContent = p1lock.innerHTML + " controls " + input;
  }
  p2signO.disabled = true;
  p2signX.disabled = false;
}

p1signO.addEventListener("change", getp1signselectO);

//Player 2

var p2 = document.querySelector(".player2");
var p2form = p2.querySelector(".p2form");
var p2label = p2form.querySelector("label");
var p2name = p2form.querySelector("#p2name");
var p2signX = p2form.querySelector(".player2signX");
var p2signO = p2form.querySelector(".player2signO");
var p2lock = p2form.querySelector(".player2name");
var p2signsel = p2form.querySelector(".p2signselect");

// Gets the details of player 2 input field

function getP2Details(event) {
  event.preventDefault();
  var input = p2name.value;
  p2lock.innerHTML = input;
  p2label.remove();
  p2name.remove();
}

p2form.addEventListener("submit", getP2Details);

//Tells player 2 what sign they selected also disables the same sign on opponents selection

function getp2signselectX() {
  var input = p2signX.value;
  if (p2lock.innerHTML === "") {
    p2signsel.textContent = "Player controls " + input;
  } else {
    p2signsel.textContent = p2lock.innerHTML + " controls " + input;
  }
  p1signX.disabled = true;
  p1signO.disabled = false;
}

p2signX.addEventListener("change", getp2signselectX);

function getp2signselectO() {
  var input = p2signO.value;
  if (p2lock.innerHTML === "") {
    p2signsel.textContent = "Player controls " + input;
  } else {
    p2signsel.textContent = p2lock.innerHTML + " controls " + input;
  }
  p1signX.disabled = false;
  p1signO.disabled = true;
}

p2signO.addEventListener("change", getp2signselectO);

// If a sign is already selected, the same sign cannot be selected by other player.
