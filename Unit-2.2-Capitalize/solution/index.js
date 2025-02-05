function capitalize(someWord) {
  // your code here
  let firstLetter = someWord[0];
  let restOfWord = someWord.slice(1);

  firstLetter = firstLetter.toUpperCase();
  restOfWord = restOfWord.toLowerCase();

  let fullWord = firstLetter + restOfWord;
  console.log(fullWord);
}

capitalize("tomato"); // should print 'Tomato'
capitalize("BACON"); // should print 'Bacon'
capitalize("LeTTuCe"); // should print 'Lettuce'
capitalize("mayonnAISE"); // should print 'Mayonnaise'
