// Create the `series` variable
let series = [0, 1];

while (series.length < 10) {
  let num1 = series.pop();
  let num2 = series.pop();
  let sum = num1 + num2;
  series.push(num2, num1, sum);
}

// Print the Fibonacci sequence to the console
console.log(series);
// the first ten numbers should be
// 0 1 1 2 3 5 8 13 21 34