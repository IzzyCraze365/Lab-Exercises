// Your code goes here

// Go Fishing, get the IDs from the HTML linked up
let startTimeout = document.getElementById("start-timeout");
let timeoutDisplay = document.getElementById("timeout-display");
let startInterval = document.getElementById("start-interval");
let intervalDisplay = document.getElementById("interval-display");

// Event Listeners
startTimeout.addEventListener("click", startingTimeout);
startInterval.addEventListener("click", functionNameHere);

function startingTimeout() {
  console.log("Start Timeout Clicked");
  timeoutDisplay.textContent = "Getting Ready";
  // This is how setTimeout works
  /* setTimeout(functionRef, delay, param1, param2, …, paramN) */
  setTimeout(countDown, 5000); // 5 seconds, timer in miliseconds
  timeoutDisplay.textContent = "READY!";
}

function countDown() {
  console.log("insdie countDown");
  let count = 5;
  // This is how setInterval works
  /* setInterval(func, delay, arg1, arg2, ...  argN) */
  let timer = setInterval(countingDown, 1000, count);
}
function countingDown(count) {
  console.log("insdie countingDown");
  if (count < 0) {
    intervalDisplay.textContent = "GO!";
    clearInterval(timer);
  }
}
