const timerElement = document.getElementById("timer");
const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const resetBtn = document.getElementById("resetBtn");
const stopBtn = document.getElementById("stopBtn");
let time = prompt("Please enter number");
let interval;

function updateTimer() {
  timerElement.innerText = time;
  if (time === 0) {
    clearInterval(interval);
    hideButtons();
  }
}

function startCountdown() {
  interval = setInterval(() => {
    time--;
    stopBtn.style.backgroundColor = "green";
    updateTimer();
  }, 1000);
}

function hideButtons() {
  minusBtn.style.display = "none";
  plusBtn.style.display = "none";
  resetBtn.style.display = "none";
  stopBtn.style.display = "none";
}

minusBtn.addEventListener("click", () => {
  time -= 1;
  updateTimer();
});

plusBtn.addEventListener("click", () => {
  time += 1;
  updateTimer();
});

stopBtn.addEventListener("click", () => {
  minusBtn.style.backgroundColor = "green";
  plusBtn.style.backgroundColor = "green";
  resetBtn.style.backgroundColor = "green";
  clearInterval(interval);
});

function resetCountdown() {
  clearInterval(interval);
  time = 0;
  updateTimer();
}

resetBtn.addEventListener("click", () => {
  resetCountdown();
});

startCountdown();
