// player
let currentPlayer = "player1";

// players' scores
let player1Current = 0;
let player2Current = 0;
let player1Total = 0;
let player2Total = 0;

// players' current scores
let player1CurrentElement = document.querySelector(".game__player1-current");
let player2CurrentElement = document.querySelector(".game__player2-current");

// players' total scores
let player1TotalElement = document.querySelector(".game__player1-total");
let player2TotalElement = document.querySelector(".game__player2-total");

//DOM elements
const rollBtn = document.querySelector(".game__buttons-roll");
const holdBtn = document.querySelector(".game__buttons-hold");

//update the states of the scores
const updateUI = () => {
  player1CurrentElement.innerHTML = player1Current;
  player2CurrentElement.innerHTML = player2Current;
  player1TotalElement.innerHTML = player1Total;
  player2TotalElement.innerHTML = player2Total;
};

// show an alert when either total score is over than 50
const gameOver = () => {
  if (player1Total >= 50) {
    alert("Game Over! Player 1 won the game");
  } else if (player2Total >= 50) {
    alert("Game Over! Player 2 won the game");
  }
};

//handle dice roll button
const handleRollBtn = () => {
  let randomDiceNum = Math.ceil(Math.random() * 6);

  //when dice number is 1 or 2
  if (randomDiceNum <= 2) {
    if (currentPlayer === "player1") {
      player1Current = 0;
      currentPlayer = "player2";
    } else {
      player2Current = 0;
      currentPlayer = "player1";
    }
  } else {
    if (currentPlayer === "player1") {
      player1Current += randomDiceNum;
    } else {
      player2Current += randomDiceNum;
    }
  }
  updateUI();
};

//handle hold button
const handleHoldBtn = () => {
  if (player1Current >= 3) {
    player1Total += player1Current;
    player1Current = 0;
    currentPlayer = "player2";
  } else if (player2Current >= 3) {
    player2Total += player2Current;
    player2Current = 0;
    currentPlayer = "player1";
  }
  updateUI();

  //wait for the updateUI and then show the alert
  setTimeout(() => {
    gameOver();
  }, 100);
};

rollBtn.addEventListener("click", handleRollBtn);
holdBtn.addEventListener("click", handleHoldBtn);
updateUI();
