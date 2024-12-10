/*
Try the following and console log the result:

- Add two numbers together with the `+` operator
- Multiply two numbers with the `*` operator
- Divide two numbers using the `/` operator
- Square a number by raising it to the power of `2**2`
- Create some complex mathematical expressions using a combination of different operators and numerical values.

Add your code below
*/

//* If you use a "+" to string concatinate all the numbers are treated as a string.  If you use a comma "," the second half is treated as a number and the first half is treated as a string
console.log("5+3 =", 5 + 3); // Prints "5+3 = 8"
console.log("5*3 =" + 5 * 3); // Prints "5*3 =15"
console.log("15/3 =" + 15 / 3); // Prints "15/3 =5"
console.log("5**3 =", 5 ** 3); // Prints "5**3 = 125"
console.log(`(15*4)**3/30+7 = ${(15 * 4) ** 3 / 30 + 7}`); // Prints "(15*4)**3/30+7 = 7207"

console.log(0.1 + 0.2); // Prints "0.30000000000000004 "
console.log(2 ** 53); // Prints "9007199254740992"
console.log(2 ** 53 + 1); // Prints "9007199254740992   "
console.log(Infinity - Infinity); // Prints "NaN"

//! There are limits to how much JS can calculate
