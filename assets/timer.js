// code for timer lives in this file

// Export Timer class from this file for use in script.js
export default class Timer {
  constructor(root) {
      root.innerHTML = Timer.getHTML();
      
      // TODO: make sure timer has location to display
      this.el = {
          minutes: root.querySelector(".minutes"),
          seconds: root.querySelector(".seconds"),
      };

      //set the initial values to 60
      this.interval = null;
      this.timeRemain = 60;

      //Event listener for click event on the start button to start or pause the timer
      this.el.start.addEventListener("click", () => {
          //TODO: code here
          if (this.interval === null) {
              this.start();
          }
          else {
              this.pause();
          }
      });

      //Event listener for click event on the stop button to stop the timer
      this.el.stop.addEventListener("click", () => {
          this.stop();
      });
  }

  // Update the display of the timer
  displayTimeUpdate() {
      // Calculate the minutes and seconds remaining 
      const minutesRemaining = Math.floor(this.timeRemain / 60);
      const secondsRemaining = this.timeRemain % 60;
      //Access the textContent property of the minutes and use a ternary operator to display the remaining minutes with a preceeding 0 if less than 10
      this.el.minutes.textContent = minutesRemaining < 10 ? `0${minutesRemaining}` : minutesRemaining;
      //Access the textContent property of the seconds and use a ternary operator to display the remaining seconds with a preceeding 0 if less than 10
      this.el.seconds.textContent = secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining;
  }
  
  // Start the timer
  start(){
      // Account for idiots: If the timer is already running, do nothing
      if(this.timeRemain === 0) return;

      // Code to decrement the time remaining
      this.interval = setInterval(() => {
          this.secondsRemaining--;
          this.displayTimeUpdate();

          // Check if the timer has reached zero
          if (this.secondsRemaining === 0) {
              clearInterval(this.interval);
              this.interval = null;
          }
      }, 1000);
  }
  
  // insert HTML
  static getHTML() {
      return ` 
          <div>
              <span class="timer minutes">00</span>
              <span class="timer">:</span>
              <span class="timer seconds">00</span>
          </div>
      `;
  }
}

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

// Check if the current page is the quiz page
if (window.location.pathname === "/quiz.html") {
  startCountdown(); // Start the countdown timer
}
