function capitalize(someWord) {
  // your code here
  let firstLetter = someWord.charAt(0);
  let restOfWord = someWord.slice(1);
  firstLetter = firstLetter.toUpperCase();
  restOfWord = restOfWord.toLowerCase();
  let fullWord = firstLetter + restOfWord;
  return fullWord;
}

console.log(capitalize("tomato")); // should print 'Tomato'
console.log(capitalize("BACON")); // should print 'Bacon'
console.log(capitalize("LeTTuCe")); // should print 'Lettuce'
console.log(capitalize("mayonnAISE")); // should print 'Mayonnaise'

//! Alternative ways to do this that work for full sentences
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
