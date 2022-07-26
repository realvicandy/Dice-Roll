// // MY SOLUTION
//
// /*
// VARIABLES STORAGE
// */
//
// var diceArray = [];
//
// diceArray.push("images/dice1.png");
// diceArray.push("images/dice2.png");
// diceArray.push("images/dice3.png");
// diceArray.push("images/dice4.png");
// diceArray.push("images/dice5.png");
// diceArray.push("images/dice6.png");
//
// // <h1> Tag
// var header = document.querySelector("h1");
//
// // HTML First <img> tag
// var img1 = document.querySelector("img");
//
// // HTML Second <img> tag
// var img2 = document.querySelectorAll("img")[1];
//
// // Player 1 Dice Roll
// var player1DiceRoll = diceArray[Math.floor(Math.random() * diceArray.length)];
//
// // Player 2 Dice Roll
// var player2DiceRoll = diceArray[Math.floor(Math.random() * diceArray.length)];
//
// /*
// VARIABLES STORAGE
// */
//
// // Placing the random image into .img1
// img1.setAttribute("src", player1DiceRoll);
//
// // Placing the second random image into .img2
// img2.setAttribute("src", player2DiceRoll);
//
// if(player1DiceRoll > player2DiceRoll) {
//   header.textContent = "Player 1 Wins! 🚩";
// } else if(player1DiceRoll < player2DiceRoll) {
//   header.textContent = "Player 2 Wins! 🚩";
// } else if(player1DiceRoll == player2DiceRoll) {
//   header.textContent = "Draw 🏳️";
// }





// INSTRUCTOR'S SOLUTION

/*
VARIABLES STORAGE
*/

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png";

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

/*
VARIABLES STORAGE
*/

image1.setAttribute("src", randomDiceImage);

image2.setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins!"
}
else {
  document.querySelector("h1").innerHTML = "🏳️Draw🏳️";
}
