// Your code here.

function divisible(dividend, divisor) {
  let remainder = dividend % divisor;
  console.log(
    `Lets check and see if ${dividend}  is evenly divisible by ${divisor}.`
  );
  console.log(`Math Problem: ${dividend} / ${divisor} = ${dividend / divisor}`);

  // If the remainder is not 0 then the first number is not evenly divisible by the second
  if (remainder === 0) {
    console.log(
      `This Math Problem has a remainder of 0 so ${dividend}  is evenly divisible by ${divisor}.`
    );
    return true;
  } else {
    console.log(
      `This Math Problem has a remainder of ${remainder} so ${dividend} is NOT evenly divisible by ${divisor}.`
    );
    return false;
  }
}

console.log(divisible(12, 4)); // Prints "true"
console.log(divisible(13, 4)); // Prints "false"
console.log(divisible(14, 3)); // Prints "false"
console.log(divisible(15, 3)); // Prints "true"
