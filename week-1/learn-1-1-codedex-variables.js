// ============================================
// TUTORIAL 1-0: CODEDEX VARIABLES
// Student: Michael Bushyeager
// Date: 01-13-26
// ============================================
​
// --------------------------------------------
// EXERCISE 6: LET & CONST
// Create 4 variables for a user profile:
// - Two const variables 
// - Two let variables 
// Print them all, then reassign one let variable
// --------------------------------------------
​
​const firstName = "Michael";
const favoriteColor = "blue";

let currentLocation = "Spokane";
let mood = "focused";


currentLocation = "Seattle";


// console.log(firstName);
// console.log(favoriteColor);
// console.log(currentLocation);
// console.log(mood);


// currentLocation = "Seattle";


// console.log(currentLocation);
​
​
// --------------------------------------------
// EXERCISE 7: DATA TYPES
// Create variables for your favorite company:
// 
// Print them all
// --------------------------------------------
​
​const company = "apple";
const foundingYear = 1976;
let isActive = true;
let fundingAmount;

// console.log(company);
// console.log(foundingYear);
// console.log(isActive);
// console.log(fundingAmount);
// ​
​
// --------------------------------------------
// EXERCISE 8: TEMPERATURE
// Convert Spokane's temperature from °F to °C
// Formula: (fahrenheit - 32) / 1.8
// --------------------------------------------
​
​const fahrenheit = 34;

const celsius = (fahrenheit - 32) / 1.8;

// console.log(celsius);
​
​
// --------------------------------------------
// EXERCISE 9: TIP CALCULATOR
// Calculate tip and total from a bill
// - billAmount, tipPercent
// - tipAmount = billAmount * (tipPercent / 100)
// - total = billAmount + tipAmount
// --------------------------------------------
​
const billAmount = 45.50;
​
​const tipPercent = 18;

const tipAmount = billAmount * (tipPercent / 100);

const total = billAmount + tipAmount;

// console.log("Bill Amount: $" + billAmount);
// console.log("Tip (" + tipPercent + "%): $" + tipAmount);
// console.log("Total: $" + total);
​
// --------------------------------------------
// EXERCISE 10: PLAYLIST DURATION
// Calculate total playlist length
// - numberOfSongs, avgSongLength (in minutes)
// - totalMinutes, hours, remainingMinutes
// Format the output nicely
// --------------------------------------------


const numberOfSongs = 24;


const avgSongLength = 3.5;


const totalMinutes = numberOfSongs * avgSongLength;


// console.log("Playlist Summary:");
// console.log("Total songs: " + numberOfSongs);
// console.log("Average song length: " + avgSongLength + " minutes");
// console.log("Total duration: " + totalMinutes + " minutes");