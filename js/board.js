//Variables

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

var movehist = [];

// Turns
var move = 1;

//Cell 1 Move
function cell1move() {
  if (move === 1 || move === 3 || move === 5 || move === 7 || move === 9) {
    cellcont1.textContent = p1signsel.value;
    startingBoard[0] = p1signsel.value;
    playerturn.textContent = p2name.value + "'s turn";
    cell1.removeEventListener("click", cell1move);
  } else if (move === 2 || move === 4 || move === 6 || move === 8) {
    cellcont1.textContent = p2signsel.value;
    startingBoard[0] = p2signsel.value;
    playerturn.textContent = p1name.value + "'s turn";
    cell1.removeEventListener("click", cell1move);
  }
  move += 1;
  checkForWinner();
}

cell1.addEventListener("click", cell1move);

//Cell 2 Move
function cell2move() {
  if (move === 1 || move === 3 || move === 5 || move === 7 || move === 9) {
    cellcont2.textContent = p1signsel.value;
    startingBoard[1] = p1signsel.value;
    playerturn.textContent = p2name.value + "'s turn";
    cell2.removeEventListener("click", cell2move);
  } else if (move === 2 || move === 4 || move === 6 || move === 8) {
    cellcont2.textContent = p2signsel.value;
    startingBoard[1] = p2signsel.value;
    playerturn.textContent = p1name.value + "'s turn";
    cell2.removeEventListener("click", cell2move);
  }
  move += 1;
  checkForWinner();
}

cell2.addEventListener("click", cell2move);

//Cell 3 Move
function cell3move() {
  if (move === 1 || move === 3 || move === 5 || move === 7 || move === 9) {
    cellcont3.textContent = p1signsel.value;
    startingBoard[2] = p1signsel.value;
    playerturn.textContent = p2name.value + "'s turn";
    cell3.removeEventListener("click", cell3move);
  } else if (move === 2 || move === 4 || move === 6 || move === 8) {
    cellcont3.textContent = p2signsel.value;
    startingBoard[2] = p2signsel.value;
    playerturn.textContent = p1name.value + "'s turn";
    cell3.removeEventListener("click", cell3move);
  }
  move += 1;
  checkForWinner();
}

cell3.addEventListener("click", cell3move);

//Cell 4 Move
function cell4move() {
  if (move === 1 || move === 3 || move === 5 || move === 7 || move === 9) {
    cellcont4.textContent = p1signsel.value;
    startingBoard[3] = p1signsel.value;
    playerturn.textContent = p2name.value + "'s turn";
    cell4.removeEventListener("click", cell4move);
  } else if (move === 2 || move === 4 || move === 6 || move === 8) {
    cellcont4.textContent = p2signsel.value;
    startingBoard[3] = p2signsel.value;
    playerturn.textContent = p1name.value + "'s turn";
    cell4.removeEventListener("click", cell4move);
  }
  move += 1;
  checkForWinner();
}

cell4.addEventListener("click", cell4move);

//Cell 5 Move
function cell5move() {
  if (move === 1 || move === 3 || move === 5 || move === 7 || move === 9) {
    cellcont5.textContent = p1signsel.value;
    startingBoard[4] = p1signsel.value;
    playerturn.textContent = p2name.value + "'s turn";
    cell5.removeEventListener("click", cell5move);
  } else if (move === 2 || move === 4 || move === 6 || move === 8) {
    cellcont5.textContent = p2signsel.value;
    startingBoard[4] = p2signsel.value;
    playerturn.textContent = p1name.value + "'s turn";
    cell5.removeEventListener("click", cell5move);
  }
  move += 1;
  checkForWinner();
}

cell5.addEventListener("click", cell5move);

//Cell 6 Move
function cell6move() {
  if (move === 1 || move === 3 || move === 5 || move === 7 || move === 9) {
    cellcont6.textContent = p1signsel.value;
    startingBoard[5] = p1signsel.value;
    playerturn.textContent = p2name.value + "'s turn";
    cell6.removeEventListener("click", cell6move);
  } else if (move === 2 || move === 4 || move === 6 || move === 8) {
    cellcont6.textContent = p2signsel.value;
    startingBoard[5] = p2signsel.value;
    playerturn.textContent = p1name.value + "'s turn";
    cell6.removeEventListener("click", cell6move);
  }
  move += 1;
  checkForWinner();
}

cell6.addEventListener("click", cell6move);

//Cell 7 Move
function cell7move() {
  if (move === 1 || move === 3 || move === 5 || move === 7 || move === 9) {
    cellcont7.textContent = p1signsel.value;
    startingBoard[6] = p1signsel.value;
    playerturn.textContent = p2name.value + "'s turn";
    cell7.removeEventListener("click", cell7move);
  } else if (move === 2 || move === 4 || move === 6 || move === 8) {
    cellcont7.textContent = p2signsel.value;
    startingBoard[6] = p2signsel.value;
    playerturn.textContent = p1name.value + "'s turn";
    cell7.removeEventListener("click", cell7move);
  }
  move += 1;
  checkForWinner();
}

cell7.addEventListener("click", cell7move);

//Cell 8 Move
function cell8move() {
  if (move === 1 || move === 3 || move === 5 || move === 7 || move === 9) {
    cellcont8.textContent = p1signsel.value;
    startingBoard[7] = p1signsel.value;
    playerturn.textContent = p2name.value + "'s turn";
    cell8.removeEventListener("click", cell8move);
  } else if (move === 2 || move === 4 || move === 6 || move === 8) {
    cellcont8.textContent = p2signsel.value;
    startingBoard[7] = p2signsel.value;
    playerturn.textContent = p1name.value + "'s turn";
    cell8.removeEventListener("click", cell8move);
  }
  move += 1;
  checkForWinner();
}

cell8.addEventListener("click", cell8move);

//Cell 9 Move
function cell9move() {
  if (move === 1 || move === 3 || move === 5 || move === 7 || move === 9) {
    cellcont9.textContent = p1signsel.value;
    startingBoard[8] = p1signsel.value;
    playerturn.textContent = p2name.value + "'s turn";
    cell9.removeEventListener("click", cell9move);
  } else if (move === 2 || move === 4 || move === 6 || move === 8) {
    cellcont9.textContent = p2signsel.value;
    startingBoard[8] = p2signsel.value;
    playerturn.textContent = p1name.value + "'s turn";
    cell9.removeEventListener("click", cell9move);
  }
  move += 1;
  checkForWinner();
}

cell9.addEventListener("click", cell9move);

//Board Reset
function boardReset() {
  move = 1;
  cell1.style.backgroundImage = "none"
  cell2.style.backgroundImage = "none"
  cell3.style.backgroundImage = "none"
  cell4.style.backgroundImage = "none"
  cell5.style.backgroundImage = "none"
  cell6.style.backgroundImage = "none"
  cell7.style.backgroundImage = "none"
  cell8.style.backgroundImage = "none"
  cell9.style.backgroundImage = "none"
  mainboard.style.backgroundColor = "rgba(255,255,255,0.2)"
  mainboard.style.backgroundImage = "none"
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
    cell1.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
    cell2.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
    cell3.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
  } else if (
    startingBoard[0] === p2signsel.value &&
    startingBoard[1] === p2signsel.value &&
    startingBoard[2] === p2signsel.value
  ) {
    Title.textContent = `${p2lock.innerHTML} wins!`;
    cell1.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
    cell2.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
    cell3.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
  }
}

function checkForWinner2() {
  if (
    startingBoard[3] === p1signsel.value &&
    startingBoard[4] === p1signsel.value &&
    startingBoard[5] === p1signsel.value
  ) {
    Title.textContent = `${p1lock.innerHTML} wins!`;
    cell4.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
    cell5.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
    cell6.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
  } else if (
    startingBoard[3] === p2signsel.value &&
    startingBoard[4] === p2signsel.value &&
    startingBoard[5] === p2signsel.value
  ) {
    Title.textContent = `${p2lock.innerHTML} wins!`;
    cell4.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
    cell5.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
    cell6.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
  }
}

function checkForWinner3() {
  if (
    startingBoard[6] === p1signsel.value &&
    startingBoard[7] === p1signsel.value &&
    startingBoard[8] === p1signsel.value
  ) {
    Title.textContent = `${p1lock.innerHTML} wins!`;
    cell7.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
    cell8.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
    cell9.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
  } else if (
    startingBoard[6] === p2signsel.value &&
    startingBoard[7] === p2signsel.value &&
    startingBoard[8] === p2signsel.value
  ) {
    Title.textContent = `${p2lock.innerHTML} wins!`;
    cell7.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
    cell8.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
    cell9.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
  }
}

function checkForWinner4() {
  if (
    startingBoard[0] === p1signsel.value &&
    startingBoard[3] === p1signsel.value &&
    startingBoard[6] === p1signsel.value
  ) {
    Title.textContent = `${p1lock.innerHTML} wins!`;
    cell1.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
    cell4.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
    cell7.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
  } else if (
    startingBoard[0] === p2signsel.value &&
    startingBoard[3] === p2signsel.value &&
    startingBoard[6] === p2signsel.value
  ) {
    Title.textContent = `${p2lock.innerHTML} wins!`;
    cell1.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
    cell4.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
    cell7.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
  }
}

function checkForWinner5() {
  if (
    startingBoard[1] === p1signsel.value &&
    startingBoard[4] === p1signsel.value &&
    startingBoard[7] === p1signsel.value
  ) {
    Title.textContent = `${p1lock.innerHTML} wins!`;
    cell2.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
    cell5.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
    cell8.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
  } else if (
    startingBoard[1] === p2signsel.value &&
    startingBoard[4] === p2signsel.value &&
    startingBoard[7] === p2signsel.value
  ) {
    Title.textContent = `${p2lock.innerHTML} wins!`;
    cell2.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
    cell5.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
    cell8.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
  }
}

function checkForWinner6() {
  if (
    startingBoard[2] === p1signsel.value &&
    startingBoard[5] === p1signsel.value &&
    startingBoard[8] === p1signsel.value
  ) {
    Title.textContent = `${p1lock.innerHTML} wins!`;
    cell3.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
    cell6.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
    cell9.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
  } else if (
    startingBoard[2] === p2signsel.value &&
    startingBoard[5] === p2signsel.value &&
    startingBoard[8] === p2signsel.value
  ) {
    Title.textContent = `${p2lock.innerHTML} wins!`;
    cell3.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
    cell6.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
    cell9.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
  }
}

function checkForWinner7() {
  if (
    startingBoard[2] === p1signsel.value &&
    startingBoard[4] === p1signsel.value &&
    startingBoard[6] === p1signsel.value
  ) {
    Title.textContent = `${p1lock.innerHTML} wins!`;
    cell3.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
    cell5.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
    cell7.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
  } else if (
    startingBoard[2] === p2signsel.value &&
    startingBoard[4] === p2signsel.value &&
    startingBoard[6] === p2signsel.value
  ) {
    Title.textContent = `${p2lock.innerHTML} wins!`;
    cell3.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
    cell5.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
    cell7.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
  }
}

function checkForWinner8() {
  if (
    startingBoard[0] === p1signsel.value &&
    startingBoard[4] === p1signsel.value &&
    startingBoard[8] === p1signsel.value
  ) {
    Title.textContent = `${p1lock.innerHTML} wins!`;
    cell1.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
    cell5.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
    cell9.style.backgroundImage = "url('https://i.pinimg.com/originals/d8/e5/73/d8e5739b1f600e3c750e9c0684160c79.gif')"
  } else if (
    startingBoard[0] === p2signsel.value &&
    startingBoard[4] === p2signsel.value &&
    startingBoard[8] === p2signsel.value
  ) {
    Title.textContent = `${p2lock.innerHTML} wins!`;
    cell1.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
    cell5.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
    cell9.style.backgroundImage = "url('https://i.pinimg.com/originals/c3/ef/80/c3ef80515f600d5b1e806edfaec9e684.gif')"
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
  if (
    (move === 10 && Title.textContent !== `${p1lock.innerHTML} wins!`) ||
    (move === 10 && Title.textContent !== `${p2lock.innerHTML} wins!`)
  ) {
    Title.textContent = "Draw!";
    mainboard.style.backgroundImage =
      "url('https://c.tenor.com/VUh2kalji7QAAAAd/man-shocked.gif')";
  }
}

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