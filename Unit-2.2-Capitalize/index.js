function capitalize(someWord) {
    // your code here
}

console.log(capitalize("tomato")); // should print 'Tomato'
console.log(capitalize("BACON")); // should print 'Bacon'
console.log(capitalize("LeTTuCe")); // should print 'Lettuce'
console.log(capitalize("mayonnAISE")); // should print 'Mayonnaise'


//! Capitalize the given input
function capitalizeInput(myString) {
    return (wordsCapitolized = myString
      .split(" ")
      .map((word) => capitalizeFirstLetter(word))
      .join(" "));
  }