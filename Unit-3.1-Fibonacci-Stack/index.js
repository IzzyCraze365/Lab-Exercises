// Create the `series` variable
var series = [0, 1];
let finalNumber = 0;
let penultimateNumber = 0;

let maxLength = 10; // This can be adjusted to see how many numbers we want in our Fibonacci squeence.

/* your check in the while loop */
function fibonacci(maxLength) {
  while (series.length < maxLength) {
    // your code here
    finalNumber = series.pop();
    //console.log("Final Number", finalNumber); //! TEST
    penultimateNumber = series.pop();
    //console.log("Second to Last Number", penultimateNumber); //! TEST
    let sum = finalNumber + penultimateNumber;
    series.push(penultimateNumber);
    series.push(finalNumber);
    series.push(sum);
    //console.log("Fibonacci sequence", series); //! TEST
  }
  console.log("Fibonacci sequence", series);
}
// Print the Fibonacci sequence to the console
console.log(series);
// the first ten numbers should be
// 0 1 1 2 3 5 8 13 21 34

fibonacci(50); // Change the parameter to get different length of Fibonacci Stack
