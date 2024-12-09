function greeter(name) {
  // Your code goes here
  let nameCheck = capitalizeInput(name);
  if(name.toLowerCase() === "enemy"){
    console.log("Go away,", nameCheck+"!");
  }else{
    console.log(`Hello, ${nameCheck}.`)
  }
}

greeter("enemy"); // Prints "Go away, Enemy!"
greeter("enEmy"); // Prints "Go away, Enemy!"
greeter("FrIeNd"); // Prints "Hello, Friend."
greeter("brUCE wAyNE"); // Prints "Hello, Bruce Wayne."


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