const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

let enemyList = ["darth vader", "voldemort", "palatine", "lex luthor"];

async function respond() {
  // your code here
  // remember to use `await`
  const greeting = `What is your name?\n`;
  let guestName = await ask(greeting);
  let nameChecker = capitalizeInput(guestName);
  if (guestName.toLowerCase() === "darth vader") {
    console.log(`Noooooo! That's impossible!\n`);
  } else if (enemyList.includes(guestName.toLowerCase())) {
    console.log("Go away,", nameChecker + `!\n`);
  } else {
    console.log(`Hello, ${nameChecker}.\n`);
  }
  respond();
}
respond();

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
