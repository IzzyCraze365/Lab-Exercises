// Create the `series` variable
var series = [0, 1];
//TODO I do think there are better ways than popping and pushing the series array multiple times.  But this is what the instructions called for.
//TODO I think creating a new array inside the function, making it a copy of the current series and manipulating that would have been a more efficient use of code.
let finalNumber = 0;
let penultimateNumber = 0;

let maxLength = 10; // This can be adjusted to see how many numbers we want in our Fibonacci squeence.

/* your check in the while loop */
function fibonacci(maxLength) {
  while (series.length < maxLength) {
    // your code here
    finalNumber = series.pop(); // pulls the final number in the array out
    //console.log("Final Number", finalNumber); //! TEST
    penultimateNumber = series.pop(); // pulls the final number in the array out AGAIN (so 2nd to last number)
    //console.log("Second to Last Number", penultimateNumber); //! TEST
    let sum = finalNumber + penultimateNumber;
    series.push(penultimateNumber); // Put the number back
    series.push(finalNumber); // Put the number back
    series.push(sum); // Add the New Number in the series
    //console.log("Fibonacci sequence", series); //! TEST
  }
  console.log("Fibonacci sequence", series);
}
// Print the Fibonacci sequence to the console
console.log(series);
// the first ten numbers should be
// 0 1 1 2 3 5 8 13 21 34

fibonacci(50); // Change the parameter to get different length of Fibonacci Stack
