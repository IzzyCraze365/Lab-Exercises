// Your code goes here

console.log("Hello World"); // prints "Hello World"

//! With Numbers
console.log("cheese" + 42); // prints "cheese42"
console.log(typeof ("cheese" + 42)); // prints "string"

console.log("4" + 2); // prints "42"
console.log(typeof ("4" + 2)); // prints "string"

//! With Booleans
//* True is always treated as 1 when used with numbers
//* False is always treated as 0 when used with numbers
console.log("pie" + true); // prints "pietrue "
console.log(typeof ("pie" + true)); // prints "string"

console.log(false + 8); // prints "8"
console.log(typeof (false + 8)); // prints "number"

console.log(true + 8); // prints "9"
console.log(typeof (true + 8)); // prints "number"

//! With Null Values
console.log(null + 7); // prints "7"
console.log(typeof (null + 7)); // prints "number"

console.log(undefined + 7); // prints "NaN"
console.log(typeof (undefined + 7)); // prints "number"

console.log(null + "cat"); // prints "nullcat"
console.log(typeof (null + "cat")); // prints "string"

console.log(undefined + "cat"); // prints "undefinedcat"
console.log(typeof (undefined + "cat")); // prints "string"

//! Subtraction
console.log(42 - "cheese"); // prints "NaN"
console.log(typeof (42 - "cheese")); // prints "number"

console.log(17 - true); // prints "16"
console.log(typeof (17 - true)); // prints "number"

console.log(17 - false); // prints "17"
console.log(typeof (17 - false)); // prints "number"

//! Other Arithmetic Operators
//* these all return "NaN" but the code believes the typeof is a "number"
console.log("Hello" / "World"); // prints "NaN"
console.log(typeof ("Hello" / "World")); // prints "number"

console.log("Hello" * "World"); // prints "NaN"
console.log(typeof ("Hello" * "World")); // prints "number"

console.log("Hello" % "World"); // prints "NaN"
console.log(typeof ("Hello" % "World")); // prints "number"

console.log("Hello" / true); // prints "NaN"
console.log(typeof ("Hello" / true)); // prints "number"

console.log("Hello" * true); // prints "NaN"
console.log(typeof ("Hello" * true)); // prints "number"

console.log("Hello" % true); // prints "NaN"
console.log(typeof ("Hello" % true)); // prints "number"

console.log("Hello" / false); // prints "NaN"
console.log(typeof ("Hello" / false)); // prints "number"

console.log("Hello" * false); // prints "NaN"
console.log(typeof ("Hello" * false)); // prints "number"

console.log("Hello" % false); // prints "NaN"
console.log(typeof ("Hello" % false)); // prints "number"

console.log("Hello" / null); // prints "NaN"
console.log(typeof ("Hello" / null)); // prints "number"

console.log("Hello" * null); // prints "NaN"
console.log(typeof ("Hello" * null)); // prints "number"

console.log("Hello" % null); // prints "NaN"
console.log(typeof ("Hello" % null)); // prints "number"
