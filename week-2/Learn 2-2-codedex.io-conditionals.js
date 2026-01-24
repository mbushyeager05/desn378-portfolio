// ============================================
// TUTORIAL 2-2: CODEDEX CONDITIONALS
// Student: Michael Bushyeager
// Date: 01-23-26
// ============================================
​
// --------------------------------------------
// EXERCISE 11: COIN FLIP
// Simulate a coin toss using Math.random()
// Output "Heads" or "Tails"
// --------------------------------------------
​let num = Math.random();

if (num > 0.5){
  console.log("Heads")
} else {
  console.log("Tails");
}
​
​
​
// --------------------------------------------
// EXERCISE 12: GOOD MORNING
// Check if hour < 12
// If true, print morning greeting with routines
// --------------------------------------------
​
​
let hour = 9; 

if (hour < 12) {
  console.log("Good morning ☕ Time to grab some coffee, work on design projects, and check the LEGO inventory!");
}
​
​
// --------------------------------------------
// EXERCISE 13: GOOD AFTERNOON
// Add else clause to Exercise 12
// If hour < 12: morning greeting
// Else: afternoon greeting
// --------------------------------------------
​
​let hour = 9; 

if (hour < 12) {
  console.log("Good morning ☕ Time to grab some coffee, work on design projects, and check the LEGO inventory!");
} else {
  console.log("Good afternoon ☁️ Time to refine those Daybreak Studio designs, work on web dev assignments, and maybe bowl a few frames!");
}
​
​
// --------------------------------------------
// EXERCISE 14: pH LEVELS
// Check if pH is basic, acidic, or neutral
// Use else if for multiple conditions
// --------------------------------------------
​
​let ph = 8; 

if (ph > 7) {
  console.log("Basic");
} else if (ph < 7) {
  console.log("Acidic");
} else {
  console.log("Neutral");
}
​
// --------------------------------------------
// EXERCISE 15: MAGIC 8 BALL
// Generate random number 0-8
// Return different responses based on number
// Format: Question / Magic 8 Ball Answer
// --------------------------------------------
​
​let question = "Should I launch Daybreak Studio this month?";

let randomNumber = Math.floor(Math.random() * 9);

let answer;

if (randomNumber === 0) {
  answer = "Yes - definitely.";
} else if (randomNumber === 1) {
  answer = "It is decidedly so.";
} else if (randomNumber === 2) {
  answer = "Without a doubt.";
} else if (randomNumber === 3) {
  answer = "Reply hazy, try again.";
} else if (randomNumber === 4) {
  answer = "Ask again later.";
} else if (randomNumber === 5) {
  answer = "Better not tell you now.";
} else if (randomNumber === 6) {
  answer = "My sources say no.";
} else if (randomNumber === 7) {
  answer = "Outlook not so good.";
} else {
  answer = "Very doubtful.";
}

console.log("Question: " + question);
console.log("Magic 8 Ball: " + answer);
​
​
// --------------------------------------------
// EXERCISE 16: AIR QUALITY INDEX
// Check AQI ranges using logical operators
// 0-50: Good, 51-100: Moderate, etc.
// --------------------------------------------
​
​let aqi = 75; 

if (aqi >= 0 && aqi <= 50) {
  console.log("Good");
} else if (aqi >= 51 && aqi <= 100) {
  console.log("Moderate");
} else if (aqi >= 101 && aqi <= 150) {
  console.log("Unhealthy (Sensitive Groups)");
} else if (aqi >= 151 && aqi <= 200) {
  console.log("Unhealthy");
} else if (aqi >= 201 && aqi <= 300) {
  console.log("Very Unhealthy");
} else {
  console.log("Hazardous");
}
​
​
// --------------------------------------------
// EXERCISE 17: ROCK PAPER SCISSORS
// Player picks 0, 1, or 2
// Computer picks random 0-2
// Determine winner using conditionals
// --------------------------------------------
​
​let player = 0;


let computer = Math.floor(Math.random() * 3);


let playerChoice;
let computerChoice;

if (player === 0) {
  playerChoice = "Rock";
} else if (player === 1) {
  playerChoice = "Paper";
} else {
  playerChoice = "Scissors";
}

if (computer === 0) {
  computerChoice = "Rock";
} else if (computer === 1) {
  computerChoice = "Paper";
} else {
  computerChoice = "Scissors";
}

console.log("Player picked: " + playerChoice);
console.log("Computer picked: " + computerChoice);
console.log("");


if (player === computer) {
  console.log("It's a tie!");
} else if (player === 0 && computer === 2) {
  console.log("The player won!");
} else if (player === 1 && computer === 0) {
  console.log("The player won!");
} else if (player === 2 && computer === 1) {
  console.log("The player won!");
} else {
  console.log("The computer won!");
}
​
​