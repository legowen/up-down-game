// Import All Elament from html
let computerNumber = 0;
let playButton = document.getElementById("play-button");
let resetButton = document.querySelector(".button-reset");
let userInput = document.querySelector("#user-input");
let resultAreaImg = document.querySelector(".main-img");
let resultText = document.querySelector(".result-text");
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let chances = 5; // Total Chances
let userValueList = []; // User's input number list

chanceArea.innerHTML = `Only left : ${chances}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput);

function pickRandomNumber() {
    // pick Random Number

  computerNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Winner", computerNumber);
}

function play() {
  // Guess what number can choose
  const userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultText.textContent = "Choose the number between 1 - 100";

    return;
  }

  if (userValueList.includes(userValue)) {
    resultText.textContent = "Choosen Number, 븅신샷";

    return;
  }

  chances--;
  chanceArea.innerHTML = `Only left : ${chances}`;
  userValueList.push(userValue);
  if (userValue < computerNumber) {
    resultAreaImg.src =
      "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif";
    resultText.textContent = "Up!";
  } else if (userValue > computerNumber) {
    resultAreaImg.src = "https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif";
    resultText.textContent = "Down!";
  } else {
    resultAreaImg.src =
      "https://media.tenor.com/images/0a81b89954678ebe228e15e35044f7a5/tenor.gif";
    resultText.textContent = "Winner!";
    gameOver = true;
  }

  if (chances == 0) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function focusInput() {
  userInput.value = "";
}

function reset() {
  //Resetting all 
  pickRandomNumber();
  userInput.value = "";
  resultAreaImg.src =
    "https://media1.giphy.com/media/9DinPR8bzFsmf74j9W/giphy.gif";
  resultText.textContent = "Drink or Die";
  gameOver = false;
  playButton.disabled = false;
  chances = 5;
  chanceArea.innerHTML = `Only left : ${chances}`;
  userValueList = [];
}

pickRandomNumber();