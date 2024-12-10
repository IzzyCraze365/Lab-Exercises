// Your code here

//* String Length
console.log("banana".length); // returns the number 6
console.log("All dogs are good dogs".length); // returns the number 22

//* String Indexing
console.log("potato"[0]); //returns the letter p
console.log("Apple"[3]); //returns the letter L

//* String Methods
console.log("titanic".toUpperCase()); //returns TITANIC
console.log("QUIETLY".toLowerCase()); //returns quietly
console.log("Java".repeat(10)); //returns JavaJavaJavaJavaJavaJavaJavaJavaJavaJava
console.log("berry".charAt(1)); //returns the letter e
console.log("berry".charAt(0)); //returns the letter b
console.log("banana".includes("nan")); //returns true
console.log("banana".endsWith("ana")); //returns true
console.log("blueberry".replace("blue", "black")); //returns blackberry

//* Flavors of Quotes
console.log("drive" + "way"); //returns driveway
console.log("Java" + "Script"); //returns JavaScript
console.log("Bert's pal Ernie" + ' sings "Rubber Duckie"'); //returns Bert's pal Ernie sings "Rubber Duckie"

/* 
//* String Concatenation
What happens when you put single quotes inside double quotes (and vice versa)?
//* The outer quotes are the ones that matter, the rest become a string
What happens when you add a single quoted string to a double quoted string
//* Its treated as one big string
What if there are interior quotes inside those strings?
//* No issue, JavaScript searches for the outermost pairs of quotes.
 */

console.log(`Two plus two is ${2 + 2}`); //print out "Two plus two is 4"
