const timeEl = document.querySelector(".time");

// 1. Time Object Basics

// Create a Date object to represent the current time
const currentDate = new Date();

// Extract the current hour, minute, and second
const currentHour = currentDate.getHours();
const currentMinute = currentDate.getMinutes();
const currentSecond = currentDate.getSeconds();

// Log the current hour, minute, and second to the console
console.log(`Current Time: ${currentHour}:${currentMinute}:${currentSecond}`);

// 2. Object-Oriented Clock:

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
    console.log(true);
    hours = hours % 12 || 12; // Convert to 12-hour format
  } else {
    console.log(false);
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

console.log(nowObject.get12HourTime().slice(0, 8));
const alarm = "19:56:00";

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
  nowTime.slice(0, 8) === alarm
    ? alert(`Alarm got triggered of ${alarm}`)
    : "alarm still pending";
}

// Start the interval to update the clock every second
setInterval(updateTime, 1000);
