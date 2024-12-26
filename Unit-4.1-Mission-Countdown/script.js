// Your code goes here

// Go Fishing, get the IDs from the HTML linked up
let startTimeout = document.getElementById("start-timeout");
let timeoutDisplay = document.getElementById("timeout-display");
let startInterval = document.getElementById("start-interval");
let intervalDisplay = document.getElementById("interval-display");

let count = -1;
let timer = 0;

// Event Listeners
startTimeout.addEventListener("click", () => {
  startingTimeout(); //This states the "Getting Ready" => "Ready"
});
startInterval.addEventListener("click", () => {
  countDown(); // This starts our countdown
});

function startingTimeout() {
  console.log("Get Ready? Clicked");
  count = 5;
  console.log("Inside startTimeout");
  timeoutDisplay.textContent = "Getting Ready...";
  // This is how setTimeout works
  /* setTimeout(functionRef, delay, param1, param2, …, paramN) */
  setTimeout(() => {
    timeoutDisplay.textContent = "READY!";
  }, 5000); // 5 seconds, timer in miliseconds
}

function countDown() {
  console.log("Start Counddown Clicked");
  console.log("inside countDown");
//  let count = 5;
  // This is how setInterval works
  /* setInterval(func, delay, arg1, arg2, ...  argN) */
  timer = setInterval(() => countingDown(), 1000, count);
  // let timer = setInterval(countingDown(), 1000, count);
}
// TODO the count is not returning properly, I need to fix the setInterval section.
// It Christmas Day!!!!!!
function countingDown() {
  console.log("inside countingDown");
  console.log("count", count);
  if (count === 0) {
    console.log("count at 0", count);
    intervalDisplay.textContent = "GO!";
    count--;
    return count;
  }else if(count > 0){
    console.log("if Statement count", count);
    intervalDisplay.textContent = count;
    count--;
    return count;
  }else{
    console.log("Clearing the Timer");
    clearInterval(timer);
  }
}
