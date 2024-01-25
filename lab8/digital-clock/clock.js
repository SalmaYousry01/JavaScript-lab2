const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const days = Array.from(document.querySelectorAll(".day"));
const hoursIn = document.querySelector(".hoursIn");
const minutesIn = document.querySelector(".minutesIn");
const secondsIn = document.querySelector(".secondsIn");
const setBtn = document.querySelector(".setBtn");
const clearBtn = document.querySelector(".clearBtn");

days.unshift(days.pop());

setBtn.addEventListener("click", function () {
  setTimeout(() => {
    alert("Times Up!!!");
  }, alarmSeconds());
});

function alarmSeconds() {
  const milliseconds =
    hoursIn.value * 60 * 60 * 1000 +
    minutesIn.value * 60 * 1000 +
    secondsIn.value * 1000;
  return milliseconds;
}

clearBtn.addEventListener("click", function () {
  hoursIn.value = "";
  minutesIn.value = "";
  secondsIn.value = "";
});

function updateClock() {
  const date = new Date();
  hours.textContent = date.getHours();
  minutes.textContent = date.getMinutes();
  seconds.textContent = date.getSeconds();

  for (i = 0; i < days.length; i++) {
    days[i].classList.remove("focus");
    if (date.getDay() == i) {
      days[i].classList.add("focus");
    }
  }
}
setInterval(updateClock, 1000);
