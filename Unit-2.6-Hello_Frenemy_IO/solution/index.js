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
  const name = await ask("What is your name?");
  if (enemyList.includes(name)) {
    if (name === "darth vader") {
      console.log("'Noooooo! That's impossible!'");
    } else {
      console.log("GO AWAY");
    }
  } else {
    console.log(`Hello ${name}, nice to see you!`);
  }
  process.exit();
}
respond();