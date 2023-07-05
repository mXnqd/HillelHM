const timerForm = document.getElementById("timerForm");
const timerRest = document.getElementById("timerRest");
const pauseButton = document.getElementById("pauseButton");

let intervalId;
let intervalValue;
let remainingTime;
let isPaused = false;

timerForm.addEventListener("submit", formHandler);
pauseButton.addEventListener("click", togglePause);

function formHandler(event) {
  event.preventDefault();
  intervalValue = +document.getElementById("interval").value;
  remainingTime = intervalValue;
  if (typeof intervalValue === "number" && intervalValue > 0) {
    clearInterval(intervalId);
    intervalId = setInterval(updateTimer, 1000);
    togglePauseButton(true);
  }
}

function updateTimer() {
  if (!isPaused) {
    if (remainingTime > 0) {
      remainingTime--;
      displayTime(remainingTime);
    } else {
      clearInterval(intervalId);
      togglePauseButton(false);
    }
  }
}

function togglePause() {
  isPaused = !isPaused;
  if (isPaused) {
    pauseButton.textContent = "Resume";
  } else {
    pauseButton.textContent = "Pause";
  }
}

function togglePauseButton(enabled) {
  if (enabled) {
    pauseButton.disabled = false;
    pauseButton.textContent = "Pause";
  } else {
    pauseButton.disabled = true;
    pauseButton.textContent = "Pause";
  }
}

function displayTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  timerRest.innerText = formattedTime;
}
