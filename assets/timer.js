// Variables to store the timer state and timer display element
var timeLeft;
var timerId;
var timerDisplay = document.getElementById('timer');

// Function to start the countdown timer
function startCountdown() {
  timeLeft = 60; // initial time in seconds
  timerId = setInterval(countdown, 1000); // Call the countdown function every second (1000 milliseconds)
}

// Function called every second to update the timer display and check if the time is up
function countdown() {
  if (timeLeft === 0) {
    clearInterval(timerId); // Stop the timer
    window.location.href = "/complete.html"; // Redirect to the complete.html page
  } else {
    updateTimer(timeLeft); // Update the timer display
    timeLeft--; // Decrement the time left
  }
}

// Function to update the timer display
function updateTimer(time) {
  timerDisplay.textContent = formatTime(time); // Set the formatted time in the timer display element
}

// Function to format the time in MM:SS format
function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60); // Calculate the minutes
  const seconds = timeInSeconds % 60; // Calculate the seconds
  return `${padZero(minutes)}:${padZero(seconds)}`; // Return the formatted time string
}

// Function to pad single digits with leading zeros
function padZero(num) {
  return num.toString().padStart(2, '0'); // Convert the number to a string and pad with leading zeros if necessary
}

// Check if the current page is the quiz page
if (window.location.pathname === "/quiz.html") {
  startCountdown(); // Start the countdown timer
}
