const timeEl = document.querySelector(".time");
const form = document.querySelector("form");
const hhInput = document.querySelector(".hh");
const mmInput = document.querySelector(".mm");
const ssInput = document.querySelector(".ss");

let alarm = "";

// Create a Date object to represent the current time
const currentDate = new Date();

// Extract the current hour, minute, and second
const currentHour = currentDate.getHours();
const currentMinute = currentDate.getMinutes();
const currentSecond = currentDate.getSeconds();

// Log the current hour, minute, and second to the console
console.log(`Current Time: ${currentHour}:${currentMinute}:${currentSecond}`);

// Object-Oriented Clock:
const Clock = function (hours, minutes, seconds, options) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
  this.options = {
    format: options.format || "24-hour", // default to 24-hour format
    timeZoneOffset: options.timeZoneOffset || 0, // default to UTC
    color: options.color || "black", // default color
  };
};

Clock.prototype.getFormattedTime = function () {
  let hours = this.hours + this.options.timeZoneOffset;
  if (this.options.format === "12-hour") {
    hours = hours % 12 || 12; // Convert to 12-hour format
  } else {
    hours = String(hours).padStart(2, "0");
  }
  const formattedMinutes = String(this.minutes).padStart(2, "0");
  const formattedSeconds = String(this.seconds).padStart(2, "0");
  return `${hours}:${formattedMinutes}:${formattedSeconds}`;
};

Clock.prototype.get12HourTime = function () {
  let hours = this.hours + this.options.timeZoneOffset;
  if (this.options.format === "12-hour") {
    hours = hours % 12 || 12; // Convert to 12-hour format
  } else {
    hours = String(hours).padStart(2, "0");
  }
  const formattedMinutes = String(this.minutes).padStart(2, "0");
  const formattedSeconds = String(this.seconds).padStart(2, "0");
  const period = this.hours < 12 ? "AM" : "PM";
  return `${hours}:${formattedMinutes}:${formattedSeconds} ${period}`;
};

const nowObject = new Clock(currentHour, currentMinute, currentSecond, {
  format: "24-hour", // Set to 12-hour format
  timeZoneOffset: 0, // Set to UTC
  color: "blue", // Set text color
});

console.log(nowObject.get12HourTime());

// Initial display of the current time
timeEl.innerText = nowObject.get12HourTime();
timeEl.style.color = nowObject.options.color;

// Function to update the clock object with the current time
function updateTime() {
  const currentDate = new Date(); // Get the current time
  nowObject.hours = currentDate.getHours();
  nowObject.minutes = currentDate.getMinutes();
  nowObject.seconds = currentDate.getSeconds();
  const nowTime = nowObject.get12HourTime();
  timeEl.innerText = nowTime;
  // alert time
  if (nowTime.slice(0, 8) === alarm) {
    alert(`Alarm got triggered for ${alarm}`);
    alarm = ""; // Reset alarm after triggering
  }
}

// Start the interval to update the clock every second
setInterval(updateTime, 1000);

// Event listener for the form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const hours = hhInput.value.padStart(2, "0");
  const minutes = mmInput.value.padStart(2, "0");
  const seconds = ssInput.value.padStart(2, "0");
  alarm = `${hours}:${minutes}:${seconds}`;
  alert(`Alarm is set for ${alarm}`);
  hhInput.value = "";
  mmInput.value = "";
  ssInput.value = "";
});
