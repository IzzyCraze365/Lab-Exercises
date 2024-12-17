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
  setTimeout(countDown,10,10);
  timeoutDisplay.textContent = "READY!";

}

function countDown(time){

}