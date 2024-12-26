// Your code goes here

// Go Fishing, get the IDs from the HTML linked up
let startTimeout = document.getElementById("start-timeout");
let timeoutDisplay = document.getElementById("timeout-display");
let startInterval = document.getElementById("start-interval");
let intervalDisplay = document.getElementById("interval-display");

let count = -1; //I set this to -1 so the "Start Countdown" Button does not do anything until you are ready
let timer = 0; // Created the variable so it can be used later on without issue

// Event Listeners
startTimeout.addEventListener("click", () => {
  startingTimeout(); //This states the "Getting Ready" => "Ready"
});
startInterval.addEventListener("click", () => {
  countDown(); // This starts our countdown
});


// The function that triggers when "Get Read?" is clicked
function startingTimeout() {
  console.log("Get Ready? Clicked"); //! TEST
  /* count = 5; */
  console.log("Inside startTimeout"); //! TEST
  timeoutDisplay.textContent = "Getting Ready...";
  // This is how setTimeout works
  /* setTimeout(functionRef, delay, param1, param2, …, paramN) */
  setTimeout(() => {
    timeoutDisplay.textContent = "READY!"; count = 5;
  }, 5000); // 5 seconds, timer in miliseconds
}


// The function that triggers when "Start Counddown" is clicked
function countDown() {
  console.log("Start Counddown Clicked"); //! TEST
  console.log("inside countDown"); //! TEST
  // This is how setInterval works
  /* setInterval(func, delay, arg1, arg2, ...  argN) */
  timer = setInterval(() => countingDown(), 1000, count);
}

// This function is what controls the setInterval
function countingDown() {
  console.log("inside countingDown"); //! TEST
  console.log("count", count);
  if (count === 0) {
    console.log("count at 0", count); //! TEST
    intervalDisplay.textContent = "GO!";
    count--;
    return count;
  }else if(count > 0){
    console.log("if Statement count", count); //! TEST
    intervalDisplay.textContent = count;
    count--;
    return count;
  }else{
    console.log("Clearing the Timer"); //! TEST
    clearInterval(timer);
  }
}
