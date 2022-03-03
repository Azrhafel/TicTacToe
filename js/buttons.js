// Variables

// Buttons
var basebuttons = document.querySelector(".buttons")
var start = document.querySelector("#start");
var prev = document.querySelector("#previous");
var next = document.querySelector("#next");
var reset = document.querySelector("#reset");
var playerturn = document.querySelector(".currturn");

//Make sure that player 1 has a sign selected when pressing start

if (p1signsel.value === "") {
  alert("Player 1 must select their sign");
}

//Make sure that player 2 has a sign selected when pressing start
if (p2signsel.value === "") {
  alert("Player 2 must select their sign");
}

reset.addEventListener("click", fullGameReset);

function fullGameReset() {
  p1name.value = "";
  p1lock.innerHTML = "";
  p1signsel.textContent = "";
  p2name.value = "";
  p2lock.innerHTML = "";
  p2signsel.textContent = "";
  p1signX.checked = false;
  p1signO.checked = false;
  p2signX.checked = false;
  p2signO.checked = false;
  p1signX.disabled = false;
  p1signO.disabled = false;
  p2signX.disabled = false;
  p2signO.disabled = false;
  p1form.insertBefore(p1label, p1form.children[1]);
  p1form.insertBefore(p1name, p1form.children[2]);
  p2form.insertBefore(p2label, p2form.children[1]);
  p2form.insertBefore(p2name, p2form.children[2]);
  start.disabled = false;
  playerturn.textContent = "";
  boardReset()
  noNameNoSignNoStart()
  prevAndNextRemove()
}

start.addEventListener("click", startGame);

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

function prevAndNextRemove(){
  prev.remove()
  next.remove()
}

function prevAndNextAdd(){
  if (move === 1){
    basebuttons.insertBefore(prev,basebuttons.children[1])
  }
  else if (move === 3){
    basebuttons.insertBefore(next,basebuttons.children[2])
  }
}

prevAndNextRemove()
