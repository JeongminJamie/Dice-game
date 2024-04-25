// players
let currentPlayer;
let player1 = "player1";
let player2 = "player2";

// players' current scores
let player1Current = document.querySelector("game__player1-current").value;
let player2Current = document.querySelector("game__player2-current").value;

// players' total scores
let player1Total = document.querySelector("game__player1-total").value;
let player2Total = document.querySelector("game__player2-total").value;

const rollBtn = document.querySelector(".game__button-roll");
//handle dice roll button
const handleRollBtn = () => {
  let randomDiceNum = Math.floor(Math.random() * 6);

  //when dice number is 1 or 2
  if (randomDiceNum === 1 || randomDiceNum === 2) {
    if (currentPlayer === "player1") {
      player1Current = 0;
      currentPlayer = "player2";
    } else {
      player2Current = 0;
      currentPlayer = "player1";
    }
  }

  //when dice number is over 3
  if (randomDiceNum >= 3) {
    if (currentPlayer === "player1") {
      player1Current += randomDiceNum;
    } else {
      player2Current += randomDiceNum;
    }
  }
};

holdBtn = document.querySelector(".game__buttons-hold");
//handle hold button
const handleHoldBtn = () => {
  if (player1Current >= 3) {
      player1Total += player1Current;
      player1Current = 0;
      currentPlayer = "player2";
  } else if(player2Current >= 3) {
    player2Total += player2Current;
    player2Current = 0;
    currentPlayer = "player1";
  }
};
rollBtn.addEventListener(onclick, handleRollBtn);
holdBtn.addEventListener(onclick, handleHoldBtn);
