//Variables

// Board Positions

var position

// Score
var player1score = 0
var player2score = 0
var p1score = document.querySelector(".player1score")
var p2score = document.querySelector(".player2score")

//Title

var Title = document.querySelector(".gametitle");


// Main Board
var mainboard = document.querySelector(".board");

// Each Cell in Board
var cell1 = mainboard.querySelector(".cell1");
var cell2 = mainboard.querySelector(".cell2");
var cell3 = mainboard.querySelector(".cell3");
var cell4 = mainboard.querySelector(".cell4");
var cell5 = mainboard.querySelector(".cell5");
var cell6 = mainboard.querySelector(".cell6");
var cell7 = mainboard.querySelector(".cell7");
var cell8 = mainboard.querySelector(".cell8");
var cell9 = mainboard.querySelector(".cell9");

// Content of Each Cell in Board
var cellcont1 = cell1.querySelector(".content1");
var cellcont2 = cell2.querySelector(".content2");
var cellcont3 = cell3.querySelector(".content3");
var cellcont4 = cell4.querySelector(".content4");
var cellcont5 = cell5.querySelector(".content5");
var cellcont6 = cell6.querySelector(".content6");
var cellcont7 = cell7.querySelector(".content7");
var cellcont8 = cell8.querySelector(".content8");
var cellcont9 = cell9.querySelector(".content9");

//Original board state

let startingBoard = ["", "", "", "", "", "", "", "", ""];

// History
var move1 = [];
var move2 = [];
var move3 = [];
var move4 = [];
var move5 = [];
var move6 = [];
var move7 = [];
var move8 = [];
var move9 = [];

// Turns
var move = 1;
var currmove = 1;
var maxmoves = 9;

// Buttons
var basebuttons = document.querySelector(".buttons")
var start = document.querySelector("#start");
var prev = document.querySelector("#previous");
var next = document.querySelector("#next");
var reset = document.querySelector("#reset");
var playerturn = document.querySelector(".currturn");


//Player 1

var p1 = document.querySelector(".player1");
var p1form = p1.querySelector(".p1form");
var p1label = p1form.querySelector("label");
var p1name = p1form.querySelector("#p1name");
var p1signX = p1form.querySelector(".player1signX");
var p1signO = p1form.querySelector(".player1signO");
var p1lock = p1form.querySelector(".player1name");
var p1signsel = p1form.querySelector(".p1signselect");

//Player 2

var p2 = document.querySelector(".player2");
var p2form = p2.querySelector(".p2form");
var p2label = p2form.querySelector("label");
var p2name = p2form.querySelector("#p2name");
var p2signX = p2form.querySelector(".player2signX");
var p2signO = p2form.querySelector(".player2signO");
var p2lock = p2form.querySelector(".player2name");
var p2signsel = p2form.querySelector(".p2signselect");


// Upon opening the page, does this function
boardReset();

function boardReset() {
  move = 1;
  currmove = 1;
  cell1.style.backgroundImage = "none";
  cell2.style.backgroundImage = "none";
  cell3.style.backgroundImage = "none";
  cell4.style.backgroundImage = "none";
  cell5.style.backgroundImage = "none";
  cell6.style.backgroundImage = "none";
  cell7.style.backgroundImage = "none";
  cell8.style.backgroundImage = "none";
  cell9.style.backgroundImage = "none";
  mainboard.style.backgroundColor = "rgba(255,255,255,0.2)";
  mainboard.style.backgroundImage = "none";
  cellcont1.textContent = "";
  cellcont2.textContent = "";
  cellcont3.textContent = "";
  cellcont4.textContent = "";
  cellcont5.textContent = "";
  cellcont6.textContent = "";
  cellcont7.textContent = "";
  cellcont8.textContent = "";
  cellcont9.textContent = "";
  startingBoard = ["", "", "", "", "", "", "", "", ""];
  Title.innerHTML = "Tic-Tac-Toe";
  cell1.removeEventListener("click", cell1move);
  cell2.removeEventListener("click", cell2move);
  cell3.removeEventListener("click", cell3move);
  cell4.removeEventListener("click", cell4move);
  cell5.removeEventListener("click", cell5move);
  cell6.removeEventListener("click", cell6move);
  cell7.removeEventListener("click", cell7move);
  cell8.removeEventListener("click", cell8move);
  cell9.removeEventListener("click", cell9move);
  move1 = [];
  move2 = [];
  move3 = [];
  move4 = [];
  move5 = [];
  move6 = [];
  move7 = [];
  move8 = [];
  move9 = [];

}

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
  p1signsel.value = input
}

function getp1signselectO() {
  var input = p1signO.value;
  if (p1lock.innerHTML === "") {
    p1signsel.textContent = "Player controls " + input;
  } else {
    p1signsel.textContent = p1lock.innerHTML + " controls " + input;
  }
  p2signO.disabled = true;
  p2signX.disabled = false;
  p1signsel.value = input
}

p1signO.addEventListener("change", getp1signselectO);

p1signX.addEventListener("change", getp1signselectX);


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
  p2signsel.value = input
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
  p2signsel.value = input
}

p2signO.addEventListener("change", getp2signselectO);

// Starts the game
function startGame() {
  if (p1signO.checked === false && p1signX.checked === false){
    alert("Players must select signs")
    noNameNoSignNoStart()
  }
  else if(p2signO.checked === false && p2signX.checked === false){
    alert("Players must select signs")
    noNameNoSignNoStart()
  }
  if (p1name.value === "" || p2name.value === ""){
    alert("Players must enter names")
    noNameNoSignNoStart()
  }
  else{
    playerturn.textContent = p1name.value + "'s turn";
    start.disabled = true;
    boardReset()
    activateBoard()
    prevAndNextRemove()
  }
}
start.addEventListener("click", startGame); // Adds event listener to start button

// Makes sure that players enter details before being able to play game
function noNameNoSignNoStart() {
  cell1.removeEventListener("click", cell1move);
  cell2.removeEventListener("click", cell2move);
  cell3.removeEventListener("click", cell3move);
  cell4.removeEventListener("click", cell4move);
  cell5.removeEventListener("click", cell5move);
  cell6.removeEventListener("click", cell6move);
  cell7.removeEventListener("click", cell7move);
  cell8.removeEventListener("click", cell8move);
  cell9.removeEventListener("click", cell9move);
}

// Allows cells to be clicked once game begins
function activateBoard() {
  cell1.addEventListener("click", cell1move);
  cell2.addEventListener("click", cell2move);
  cell3.addEventListener("click", cell3move);
  cell4.addEventListener("click", cell4move);
  cell5.addEventListener("click", cell5move);
  cell6.addEventListener("click", cell6move);
  cell7.addEventListener("click", cell7move);
  cell8.addEventListener("click", cell8move);
  cell9.addEventListener("click", cell9move);
}

//Removes the previous and next buttons
function prevAndNextRemove(){
  prev.remove()
  next.remove()
}

//Checks what move is done on corresponding cell
function cell1move() {
  if (move === 1 || move === 3 || move === 5 || move === 7 || move === 9) {
    cellcont1.style.color = "yellow";
    cellcont1.textContent = p1signsel.value;
    position = "Top Left"
    startingBoard[0] = p1signsel.value;
    playerturn.textContent = p2name.value + "'s turn";
    cell1.removeEventListener("click", cell1move);
  } else if (move === 2 || move === 4 || move === 6 || move === 8) {
    cellcont1.style.color = "red";
    cellcont1.textContent = p2signsel.value;
    position = "Top Left"
    startingBoard[0] = p2signsel.value;
    playerturn.textContent = p1name.value + "'s turn";
    cell1.removeEventListener("click", cell1move);
  }
  move += 1;
  currmove += 1;
  checkForWinner();
}

// Checks if the winning move has been made
function checkForWinner1() {
  if (
    startingBoard[0] === p1signsel.value &&
    startingBoard[1] === p1signsel.value &&
    startingBoard[2] === p1signsel.value
  ) {
    Title.textContent = `${p1lock.innerHTML} wins!`;
    cell1.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
    cell2.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
    cell3.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
  } else if (
    startingBoard[0] === p2signsel.value &&
    startingBoard[1] === p2signsel.value &&
    startingBoard[2] === p2signsel.value
  ) {
    Title.textContent = `${p2lock.innerHTML} wins!`;
    cell1.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
    cell2.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
    cell3.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
  }
}

//Checks if a winner is declared or the game was a draw
function checkForWinner() {
  checkForWinner1();
  checkForWinner2();
  checkForWinner3();
  checkForWinner4();
  checkForWinner5();
  checkForWinner6();
  checkForWinner7();
  checkForWinner8();
  preventFurtherChanges();
  saveMove();
  getPosition()
  if (move === 10 && Title.textContent !== `${p1lock.innerHTML} wins!`) {
    basebuttons.insertBefore(prev,basebuttons.children[1])
    playerturn.textContent = "Match Over!"
    Title.textContent = "Draw!";
    mainboard.style.backgroundImage =
      "url('https://c.tenor.com/VUh2kalji7QAAAAd/man-shocked.gif')";
  }
  if(Title.textContent === `${p1lock.innerHTML} wins!` || Title.textContent === `${p2lock.innerHTML} wins!`){
    playerturn.textContent = "Match Over!"
    basebuttons.insertBefore(prev,basebuttons.children[1])
  }
  if(Title.textContent === `${p1lock.innerHTML} wins!`){
    player1score += 1
    p1score.textContent = `Player 1 wins: ${player1score}`
  }
  if(Title.textContent === `${p2lock.innerHTML} wins!`){
    player2score += 1
    p2score.textContent = `Player 2 wins: ${player2score}`
  }
}

//If a winner is declared before all cells are filled, stops any further moves being made
function preventFurtherChanges() {
  if (
    Title.textContent === `${p1lock.innerHTML} wins!` ||
    Title.textContent === `${p2lock.innerHTML} wins!`
  ) {
    cell1.removeEventListener("click", cell1move);
    cell2.removeEventListener("click", cell2move);
    cell3.removeEventListener("click", cell3move);
    cell4.removeEventListener("click", cell4move);
    cell5.removeEventListener("click", cell5move);
    cell6.removeEventListener("click", cell6move);
    cell7.removeEventListener("click", cell7move);
    cell8.removeEventListener("click", cell8move);
    cell9.removeEventListener("click", cell9move);
  }
}

//Records every move made in the game
function saveMove() {
  if (move === 2) {
    move1.push(startingBoard.slice());
  }
  if (move === 3) {
    move2.push(startingBoard.slice());
  }
  if (move === 4) {
    move3.push(startingBoard.slice());
  }
  if (move === 5) {
    move4.push(startingBoard.slice());
  }
  if (move === 6) {
    move5.push(startingBoard.slice());
  }
  if (move === 7) {
    move6.push(startingBoard.slice());
  }
  if (move === 8) {
    move7.push(startingBoard.slice());
  }
  if (move === 9) {
    move8.push(startingBoard.slice());
  }
  if (move === 10) {
    move9.push(startingBoard.slice());
  }
}

// function for previous button

function previousMove() {
  move -= 1;
  basebuttons.insertBefore(next, basebuttons.children[2]);
  if (move === 9) {
    cellcont1.textContent = move8[0][0];
    cellcont2.textContent = move8[0][1];
    cellcont3.textContent = move8[0][2];
    cellcont4.textContent = move8[0][3];
    cellcont5.textContent = move8[0][4];
    cellcont6.textContent = move8[0][5];
    cellcont7.textContent = move8[0][6];
    cellcont8.textContent = move8[0][7];
    cellcont9.textContent = move8[0][8];
  }
  if (move === 8) {
    cellcont1.textContent = move7[0][0];
    cellcont2.textContent = move7[0][1];
    cellcont3.textContent = move7[0][2];
    cellcont4.textContent = move7[0][3];
    cellcont5.textContent = move7[0][4];
    cellcont6.textContent = move7[0][5];
    cellcont7.textContent = move7[0][6];
    cellcont8.textContent = move7[0][7];
    cellcont9.textContent = move7[0][8];
  }
  if (move === 7) {
    cellcont1.textContent = move6[0][0];
    cellcont2.textContent = move6[0][1];
    cellcont3.textContent = move6[0][2];
    cellcont4.textContent = move6[0][3];
    cellcont5.textContent = move6[0][4];
    cellcont6.textContent = move6[0][5];
    cellcont7.textContent = move6[0][6];
    cellcont8.textContent = move6[0][7];
    cellcont9.textContent = move6[0][8];
  }

  if (move === 6) {
    cellcont1.textContent = move5[0][0];
    cellcont2.textContent = move5[0][1];
    cellcont3.textContent = move5[0][2];
    cellcont4.textContent = move5[0][3];
    cellcont5.textContent = move5[0][4];
    cellcont6.textContent = move5[0][5];
    cellcont7.textContent = move5[0][6];
    cellcont8.textContent = move5[0][7];
    cellcont9.textContent = move5[0][8];
  }
  if (move === 5) {
    cellcont1.textContent = move4[0][0];
    cellcont2.textContent = move4[0][1];
    cellcont3.textContent = move4[0][2];
    cellcont4.textContent = move4[0][3];
    cellcont5.textContent = move4[0][4];
    cellcont6.textContent = move4[0][5];
    cellcont7.textContent = move4[0][6];
    cellcont8.textContent = move4[0][7];
    cellcont9.textContent = move4[0][8];
  }
  if (move === 4) {
    cellcont1.textContent = move3[0][0];
    cellcont2.textContent = move3[0][1];
    cellcont3.textContent = move3[0][2];
    cellcont4.textContent = move3[0][3];
    cellcont5.textContent = move3[0][4];
    cellcont6.textContent = move3[0][5];
    cellcont7.textContent = move3[0][6];
    cellcont8.textContent = move3[0][7];
    cellcont9.textContent = move3[0][8];
  }
  if (move === 3) {
    cellcont1.textContent = move2[0][0];
    cellcont2.textContent = move2[0][1];
    cellcont3.textContent = move2[0][2];
    cellcont4.textContent = move2[0][3];
    cellcont5.textContent = move2[0][4];
    cellcont6.textContent = move2[0][5];
    cellcont7.textContent = move2[0][6];
    cellcont8.textContent = move2[0][7];
    cellcont9.textContent = move2[0][8];
  }
  if (move === 2) {
    cellcont1.textContent = move1[0][0];
    cellcont2.textContent = move1[0][1];
    cellcont3.textContent = move1[0][2];
    cellcont4.textContent = move1[0][3];
    cellcont5.textContent = move1[0][4];
    cellcont6.textContent = move1[0][5];
    cellcont7.textContent = move1[0][6];
    cellcont8.textContent = move1[0][7];
    cellcont9.textContent = move1[0][8];
    prev.remove();
  }
}

prev.addEventListener("click", previousMove);

//Function for next button

function nextMove() {
  if (move <= maxmoves) {
    move += 1;
  }
  if (move === 3) {
    cellcont1.textContent = move2[0][0];
    cellcont2.textContent = move2[0][1];
    cellcont3.textContent = move2[0][2];
    cellcont4.textContent = move2[0][3];
    cellcont5.textContent = move2[0][4];
    cellcont6.textContent = move2[0][5];
    cellcont7.textContent = move2[0][6];
    cellcont8.textContent = move2[0][7];
    cellcont9.textContent = move2[0][8];
  }
  if (move === 4) {
    cellcont1.textContent = move3[0][0];
    cellcont2.textContent = move3[0][1];
    cellcont3.textContent = move3[0][2];
    cellcont4.textContent = move3[0][3];
    cellcont5.textContent = move3[0][4];
    cellcont6.textContent = move3[0][5];
    cellcont7.textContent = move3[0][6];
    cellcont8.textContent = move3[0][7];
    cellcont9.textContent = move3[0][8];
  }
  if (move === 5) {
    cellcont1.textContent = move4[0][0];
    cellcont2.textContent = move4[0][1];
    cellcont3.textContent = move4[0][2];
    cellcont4.textContent = move4[0][3];
    cellcont5.textContent = move4[0][4];
    cellcont6.textContent = move4[0][5];
    cellcont7.textContent = move4[0][6];
    cellcont8.textContent = move4[0][7];
    cellcont9.textContent = move4[0][8];
  }
  if (move === 6) {
    cellcont1.textContent = move5[0][0];
    cellcont2.textContent = move5[0][1];
    cellcont3.textContent = move5[0][2];
    cellcont4.textContent = move5[0][3];
    cellcont5.textContent = move5[0][4];
    cellcont6.textContent = move5[0][5];
    cellcont7.textContent = move5[0][6];
    cellcont8.textContent = move5[0][7];
    cellcont9.textContent = move5[0][8];
  }
  if (move === 7) {
    cellcont1.textContent = move6[0][0];
    cellcont2.textContent = move6[0][1];
    cellcont3.textContent = move6[0][2];
    cellcont4.textContent = move6[0][3];
    cellcont5.textContent = move6[0][4];
    cellcont6.textContent = move6[0][5];
    cellcont7.textContent = move6[0][6];
    cellcont8.textContent = move6[0][7];
    cellcont9.textContent = move6[0][8];
  }
  if (move === 8) {
    cellcont1.textContent = move7[0][0];
    cellcont2.textContent = move7[0][1];
    cellcont3.textContent = move7[0][2];
    cellcont4.textContent = move7[0][3];
    cellcont5.textContent = move7[0][4];
    cellcont6.textContent = move7[0][5];
    cellcont7.textContent = move7[0][6];
    cellcont8.textContent = move7[0][7];
    cellcont9.textContent = move7[0][8];
  }
  if (move === 9) {
    cellcont1.textContent = move8[0][0];
    cellcont2.textContent = move8[0][1];
    cellcont3.textContent = move8[0][2];
    cellcont4.textContent = move8[0][3];
    cellcont5.textContent = move8[0][4];
    cellcont6.textContent = move8[0][5];
    cellcont7.textContent = move8[0][6];
    cellcont8.textContent = move8[0][7];
    cellcont9.textContent = move8[0][8];
  }
  if (move === 10) {
    cellcont1.textContent = move9[0][0];
    cellcont2.textContent = move9[0][1];
    cellcont3.textContent = move9[0][2];
    cellcont4.textContent = move9[0][3];
    cellcont5.textContent = move9[0][4];
    cellcont6.textContent = move9[0][5];
    cellcont7.textContent = move9[0][6];
    cellcont8.textContent = move9[0][7];
    cellcont9.textContent = move9[0][8];
  }
  if (move == currmove) {
    next.remove();
  }
  basebuttons.insertBefore(prev, basebuttons.children[1]);
}

next.addEventListener("click", nextMove);



