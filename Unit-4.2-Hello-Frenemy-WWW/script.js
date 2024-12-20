console.log("Hello World"); //! TEST Link Up

// Getting our DOM elements
// Query Selectors
let computerResponse = document.querySelector("#computer-response");
let nameForm = document.querySelector("#name-form");
let userInput = document.querySelector("#user-input");

let enemyList = ["darth vader", "voldemort", "palatine", "lex luthor"];


// Adding the event listener to our form
nameForm.addEventListener("click",(event)=>{
    event.preventDefault;
console.log
  let guestName = userInput.value;
  console.log("Guest Name: ",guestName)
  let nameChecker = capitalizeInput(guestName);
  if (guestName.toLowerCase() === "darth vader") {
    console.log(`Noooooo! That's impossible!\n`);
    computerResponse.textContent(`Noooooo! That's impossible!`);
  } else if (enemyList.includes(guestName.toLowerCase())) {
    console.log("Go away,", nameChecker + `!\n`);
    computerResponse.textContent("Go away,", nameChecker + `!`);
  } else {
    console.log(`Hello, ${nameChecker}.\n`);
    computerResponse.textContent(`Hello, ${nameChecker}.`);
  }

})

//! The following functions were taken from the Capitalize Assignment
// Split up the strings by the space " "
function capitalizeInput(myString) {
  return (wordsCapitolized = myString
    .split(" ")
    .map((word) => capitalizeFirstLetter(word))
    .join(" "));
}

// Capitalize the given input
function capitalizeFirstLetter(word) {
  word = word.trim();
  let firstLetter1 = word.charAt(0).toUpperCase();
  let restOfWord1 = word.slice(1).toLowerCase();
  return firstLetter1 + restOfWord1;
}
