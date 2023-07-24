// Get the timer element and buttons
const timerElement = document.getElementById("timer");
const add5sButton = document.getElementById("add5s");
const add10sButton = document.getElementById("add10s");
const add15sButton = document.getElementById("add15s");
let remainingTime = 10;
let interval;

// Function to update the timer
function updateTimer() {
  timerElement.innerText = remainingTime;
  if (remainingTime === 0) {
    clearInterval(interval);
    hideButtons();
  }
}

function startCountdown() {
  interval = setInterval(() => {
    remainingTime--;
    updateTimer();
  }, 1000);
}

// Function to hide the buttons after countdown ends
function hideButtons() {
  add5sButton.style.display = "none";
  add10sButton.style.display = "none";
  add15sButton.style.display = "none";
}

// Event listeners for the buttons
add5sButton.addEventListener("click", () => {
  remainingTime += 5;
  updateTimer();
});

add10sButton.addEventListener("click", () => {
  remainingTime += 10;
  updateTimer();
});

add15sButton.addEventListener("click", () => {
  remainingTime += 15;
  updateTimer();
});

startCountdown();
