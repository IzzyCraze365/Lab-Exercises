//Lab assigned October 28, 2024

//* I made this better by turining it into a function.
//let lineNumber;
function potatoPoem(lineNumber) {
  let count = 0;
  while (count < lineNumber) {
    // your code here
    count++;
    if (count % 8 === 0) {
      console.log(`More!`);
    } else if (count % 4 === 0) {
      console.log(`${count}!`);
    } else {
      console.log(`${count} potato,`);
    }
  }
}

potatoPoem(15);
