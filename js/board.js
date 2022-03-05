//Variables

// Move History Section
var movehist = document.querySelector(".movehist")

// Move History Content
var movehistlist = movehist.querySelector(".movehistlist")
var movehistlistitem1 = document.createElement("li")
var movehistlistitem2 = document.createElement("li")
var movehistlistitem3 = document.createElement("li")
var movehistlistitem4 = document.createElement("li")
var movehistlistitem5 = document.createElement("li")
var movehistlistitem6 = document.createElement("li")
var movehistlistitem7 = document.createElement("li")
var movehistlistitem8 = document.createElement("li")
var movehistlistitem9 = document.createElement("li")


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

//Cell 1 Move
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
  postMoveHist()
  move += 1;
  currmove += 1;
  checkForWinner();
}

//Cell 2 Move
function cell2move() {
  if (move === 1 || move === 3 || move === 5 || move === 7 || move === 9) {
    cellcont2.style.color = "yellow";
    cellcont2.textContent = p1signsel.value;
    position = "Top Middle"
    startingBoard[1] = p1signsel.value;
    playerturn.textContent = p2name.value + "'s turn";
    cell2.removeEventListener("click", cell2move);
  } else if (move === 2 || move === 4 || move === 6 || move === 8) {
    cellcont2.style.color = "red";
    cellcont2.textContent = p2signsel.value;
    position = "Top Middle"
    startingBoard[1] = p2signsel.value;
    playerturn.textContent = p1name.value + "'s turn";
    cell2.removeEventListener("click", cell2move);
  }
  postMoveHist()
  move += 1;
  currmove += 1;
  checkForWinner();
}

//Cell 3 Move
function cell3move() {
  if (move === 1 || move === 3 || move === 5 || move === 7 || move === 9)  {
    cellcont3.style.color = "yellow";
    cellcont3.textContent = p1signsel.value;
    position = "Top right"
    startingBoard[2] = p1signsel.value;
    playerturn.textContent = p2name.value + "'s turn";
    cell3.removeEventListener("click", cell3move);
  } else if (move === 2 || move === 4 || move === 6 || move === 8) {
    cellcont3.style.color = "red";
    cellcont3.textContent = p2signsel.value;
    position = "Top right"
    startingBoard[2] = p2signsel.value;
    playerturn.textContent = p1name.value + "'s turn";
    cell3.removeEventListener("click", cell3move);
  }
  postMoveHist()
  move += 1;
  currmove += 1;
  checkForWinner();
}

//Cell 4 Move
function cell4move() {
  if (move === 1 || move === 3 || move === 5 || move === 7 || move === 9) {
    cellcont4.style.color = "yellow";
    cellcont4.textContent = p1signsel.value;
    position = "Center Left"
    startingBoard[3] = p1signsel.value;
    playerturn.textContent = p2name.value + "'s turn";
    cell4.removeEventListener("click", cell4move);
  } else if (move === 2 || move === 4 || move === 6 || move === 8) {
    cellcont4.style.color = "red";
    cellcont4.textContent = p2signsel.value;
    position = "Center Left"
    startingBoard[3] = p2signsel.value;
    playerturn.textContent = p1name.value + "'s turn";
    cell4.removeEventListener("click", cell4move);
  }
  postMoveHist()
  move += 1;
  currmove += 1;
  checkForWinner();
}

//Cell 5 Move
function cell5move() {
  if (move === 1 || move === 3 || move === 5 || move === 7 || move === 9) {
    cellcont5.style.color = "yellow";
    cellcont5.textContent = p1signsel.value;
    position = "Center Middle"
    startingBoard[4] = p1signsel.value;
    playerturn.textContent = p2name.value + "'s turn";
    cell5.removeEventListener("click", cell5move);
  } else if (move === 2 || move === 4 || move === 6 || move === 8) {
    cellcont5.style.color = "red";
    cellcont5.textContent = p2signsel.value;
    position = "Center Middle"
    startingBoard[4] = p2signsel.value;
    playerturn.textContent = p1name.value + "'s turn";
    cell5.removeEventListener("click", cell5move);
  }
  postMoveHist()
  move += 1;
  currmove += 1;
  checkForWinner();
}

//Cell 6 Move
function cell6move() {
  if (move === 1 || move === 3 || move === 5 || move === 7 || move === 9) {
    cellcont6.style.color = "yellow";
    cellcont6.textContent = p1signsel.value;
    position = "Center Right"
    startingBoard[5] = p1signsel.value;
    playerturn.textContent = p2name.value + "'s turn";
    cell6.removeEventListener("click", cell6move);
  } else if (move === 2 || move === 4 || move === 6 || move === 8) {
    cellcont6.style.color = "red";
    cellcont6.textContent = p2signsel.value;
    position = "Center Right"
    startingBoard[5] = p2signsel.value;
    playerturn.textContent = p1name.value + "'s turn";
    cell6.removeEventListener("click", cell6move);
  }
  postMoveHist()
  move += 1;
  currmove += 1;
  checkForWinner();
}

//Cell 7 Move
function cell7move() {
  if (move === 1 || move === 3 || move === 5 || move === 7 || move === 9) {
    cellcont7.style.color = "yellow";
    cellcont7.textContent = p1signsel.value;
    position = "Bottom Left"
    startingBoard[6] = p1signsel.value;
    playerturn.textContent = p2name.value + "'s turn";
    cell7.removeEventListener("click", cell7move);
  } else if (move === 2 || move === 4 || move === 6 || move === 8) {
    cellcont7.style.color = "red";
    cellcont7.textContent = p2signsel.value;
    position = "Bottom Left"
    startingBoard[6] = p2signsel.value;
    playerturn.textContent = p1name.value + "'s turn";
    cell7.removeEventListener("click", cell7move);
  }
  postMoveHist()
  move += 1;
  currmove += 1;
  checkForWinner();
}

//Cell 8 Move
function cell8move() {
  if (move === 1 || move === 3 || move === 5 || move === 7 || move === 9){
    cellcont8.style.color = "yellow";
    cellcont8.textContent = p1signsel.value;
    position = "Bottom Middle"
    startingBoard[7] = p1signsel.value;
    playerturn.textContent = p2name.value + "'s turn";
    cell8.removeEventListener("click", cell8move);
  } else if (move === 2 || move === 4 || move === 6 || move === 8)  {
    cellcont8.style.color = "red";
    cellcont8.textContent = p2signsel.value;
    position = "Bottom Middle"
    startingBoard[7] = p2signsel.value;
    playerturn.textContent = p1name.value + "'s turn";
    cell8.removeEventListener("click", cell8move);
  }
  postMoveHist()
  move += 1;
  currmove += 1;
  checkForWinner();
}

//Cell 9 Move
function cell9move() {
  if (move === 1 || move === 3 || move === 5 || move === 7 || move === 9){
    cellcont9.style.color = "yellow";
    cellcont9.textContent = p1signsel.value;
    position = "Bottom Right"
    startingBoard[8] = p1signsel.value;
    playerturn.textContent = p2name.value + "'s turn";
    cell9.removeEventListener("click", cell9move);
  } else if (move === 2 || move === 4 || move === 6 || move === 8) {
    cellcont9.style.color = "red";
    cellcont9.textContent = p2signsel.value;
    position = "Bottom Right"
    startingBoard[8] = p2signsel.value;
    playerturn.textContent = p1name.value + "'s turn";
    cell9.removeEventListener("click", cell9move);
  }
  postMoveHist()
  move += 1;
  currmove += 1;
  checkForWinner();
}

//Board Reset
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
  movehistlist.innerHTML = `<ul class="movehistlist"></ul>`
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
boardReset();

//Check for Winner Codes

//Winning Combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

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

function checkForWinner2() {
  if (
    startingBoard[3] === p1signsel.value &&
    startingBoard[4] === p1signsel.value &&
    startingBoard[5] === p1signsel.value
  ) {
    Title.textContent = `${p1lock.innerHTML} wins!`;
    cell4.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
    cell5.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
    cell6.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
  } else if (
    startingBoard[3] === p2signsel.value &&
    startingBoard[4] === p2signsel.value &&
    startingBoard[5] === p2signsel.value
  ) {
    Title.textContent = `${p2lock.innerHTML} wins!`;
    cell4.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
    cell5.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
    cell6.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
  }
}

function checkForWinner3() {
  if (
    startingBoard[6] === p1signsel.value &&
    startingBoard[7] === p1signsel.value &&
    startingBoard[8] === p1signsel.value
  ) {
    Title.textContent = `${p1lock.innerHTML} wins!`;
    cell7.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
    cell8.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
    cell9.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
  } else if (
    startingBoard[6] === p2signsel.value &&
    startingBoard[7] === p2signsel.value &&
    startingBoard[8] === p2signsel.value
  ) {
    Title.textContent = `${p2lock.innerHTML} wins!`;
    cell7.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
    cell8.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
    cell9.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
  }
}

function checkForWinner4() {
  if (
    startingBoard[0] === p1signsel.value &&
    startingBoard[3] === p1signsel.value &&
    startingBoard[6] === p1signsel.value
  ) {
    Title.textContent = `${p1lock.innerHTML} wins!`;
    cell1.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
    cell4.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
    cell7.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
  } else if (
    startingBoard[0] === p2signsel.value &&
    startingBoard[3] === p2signsel.value &&
    startingBoard[6] === p2signsel.value
  ) {
    Title.textContent = `${p2lock.innerHTML} wins!`;
    cell1.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
    cell4.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
    cell7.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
  }
}

function checkForWinner5() {
  if (
    startingBoard[1] === p1signsel.value &&
    startingBoard[4] === p1signsel.value &&
    startingBoard[7] === p1signsel.value
  ) {
    Title.textContent = `${p1lock.innerHTML} wins!`;
    cell2.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
    cell5.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
    cell8.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
  } else if (
    startingBoard[1] === p2signsel.value &&
    startingBoard[4] === p2signsel.value &&
    startingBoard[7] === p2signsel.value
  ) {
    Title.textContent = `${p2lock.innerHTML} wins!`;
    cell2.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
    cell5.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
    cell8.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
  }
}

function checkForWinner6() {
  if (
    startingBoard[2] === p1signsel.value &&
    startingBoard[5] === p1signsel.value &&
    startingBoard[8] === p1signsel.value
  ) {
    Title.textContent = `${p1lock.innerHTML} wins!`;
    cell3.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
    cell6.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
    cell9.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
  } else if (
    startingBoard[2] === p2signsel.value &&
    startingBoard[5] === p2signsel.value &&
    startingBoard[8] === p2signsel.value
  ) {
    Title.textContent = `${p2lock.innerHTML} wins!`;
    cell3.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
    cell6.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
    cell9.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
  }
}

function checkForWinner7() {
  if (
    startingBoard[2] === p1signsel.value &&
    startingBoard[4] === p1signsel.value &&
    startingBoard[6] === p1signsel.value
  ) {
    Title.textContent = `${p1lock.innerHTML} wins!`;
    cell3.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
    cell5.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
    cell7.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
  } else if (
    startingBoard[2] === p2signsel.value &&
    startingBoard[4] === p2signsel.value &&
    startingBoard[6] === p2signsel.value
  ) {
    Title.textContent = `${p2lock.innerHTML} wins!`;
    cell3.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
    cell5.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
    cell7.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
  }
}

function checkForWinner8() {
  if (
    startingBoard[0] === p1signsel.value &&
    startingBoard[4] === p1signsel.value &&
    startingBoard[8] === p1signsel.value
  ) {
    Title.textContent = `${p1lock.innerHTML} wins!`;
    cell1.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
    cell5.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
    cell9.style.backgroundImage =
      "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')";
  } else if (
    startingBoard[0] === p2signsel.value &&
    startingBoard[4] === p2signsel.value &&
    startingBoard[8] === p2signsel.value
  ) {
    Title.textContent = `${p2lock.innerHTML} wins!`;
    cell1.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
    cell5.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
    cell9.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')";
  }
}

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

//Prevents any further changes made on cells

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

// Reactivates board
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

// Saves the move made for move history

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

function postMoveHist(){
  if (move === 1){
    movehistlistitem1.textContent = `Turn ${move}: ${position} ${p1signsel.value}`
    movehistlist.appendChild(movehistlistitem1)
  }
  if(move === 2){
    movehistlistitem2.textContent = `Turn ${move}: ${position} ${p2signsel.value}`
    movehistlist.appendChild(movehistlistitem2)
  }
  if (move === 3){
    movehistlistitem3.textContent = `Turn ${move}: ${position} ${p1signsel.value}`
    movehistlist.appendChild(movehistlistitem3)
  }
  if (move === 4){
    movehistlistitem4.textContent = `Turn ${move}: ${position} ${p2signsel.value}`
    movehistlist.appendChild(movehistlistitem4)
  }
  if (move === 5){
    movehistlistitem5.textContent = `Turn ${move}: ${position} ${p1signsel.value}`
    movehistlist.appendChild(movehistlistitem5)
  }
  if (move === 6){
    movehistlistitem6.textContent = `Turn ${move}: ${position} ${p2signsel.value}`
    movehistlist.appendChild(movehistlistitem6)
  }
  if (move === 7){
    movehistlistitem7.textContent = `Turn ${move}: ${position} ${p1signsel.value}`
    movehistlist.appendChild(movehistlistitem7)
  }
  if (move === 8){
    movehistlistitem8.textContent = `Turn ${move}: ${position} ${p2signsel.value}`
    movehistlist.appendChild(movehistlistitem8)
  }
  if (move === 9){
    movehistlistitem9.textContent = `Turn ${move}: ${position} ${p1signsel.value}`
    movehistlist.appendChild(movehistlistitem9)
  }
}