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
const gamePlayer1 = document.querySelector(".game__player1");
const gamePlayer2 = document.querySelector(".game__player2");
const newBtn = document.querySelector(".game__buttons-new");
const rollBtn = document.querySelector(".game__buttons-roll");
const holdBtn = document.querySelector(".game__buttons-hold");
let diceImg = document.querySelector("img");

//update the states of the scores
const updateUI = () => {
  player1CurrentElement.innerHTML = player1Current;
  player2CurrentElement.innerHTML = player2Current;
  player1TotalElement.innerHTML = player1Total;
  player2TotalElement.innerHTML = player2Total;

  if (currentPlayer === "player1") {
    gamePlayer1.style.backgroundColor = "rgb(247, 247, 238)";
    gamePlayer2.style.backgroundColor = "beige";
  } else {
    gamePlayer2.style.backgroundColor = "rgb(247, 247, 238)";
    gamePlayer1.style.backgroundColor = "beige";
  }
};

// show an alert when either total score is over than 50
const gameOver = () => {
  if (player1Total >= 50) {
    alert("Player one won the game🎉");
  } else if (player2Total >= 50) {
    alert("Player two won the game🎉");
  }
};

//handle new game button
const handleNewBtn = () => {
  player1Current = 0;
  player2Current = 0;
  player1Total = 0;
  player2Total = 0;
  diceImg.src = "./images/dice-1.png";

  updateUI();
};

//handle dice roll button
const handleRollBtn = () => {
  let randomDiceNum = Math.ceil(Math.random() * 6);

  // get dice by randomDiceNum
  diceImg.src = `./images/dice-${randomDiceNum}.png`;

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

newBtn.addEventListener("click", handleNewBtn);
rollBtn.addEventListener("click", handleRollBtn);
holdBtn.addEventListener("click", handleHoldBtn);
updateUI();
