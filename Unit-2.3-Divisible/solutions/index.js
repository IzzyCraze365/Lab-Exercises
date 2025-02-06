function divisible(dividend, divisor) {
  let remainder = dividend % divisor;
  console.log(remainder);

  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(divisible(10, 2)); // true
console.log(divisible(10, 3)); // false
