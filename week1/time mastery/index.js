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

const Clock = function (hours, minutes, seconds) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
};

const nowObject = new Clock(currentHour, currentMinute, currentSecond);
console.log(nowObject);

// 3. Time Formatting
// getFormattedTime(): Returns a string in the format “HH:MM:SS”.;
Clock.prototype.getFormattedTime = function () {
  const formattedHours = String(this.hours).padStart(2, "0");
  const formattedMinutes = String(this.minutes).padStart(2, "0");
  const formattedSeconds = String(this.seconds).padStart(2, "0");
  console.log(typeof formattedHours);
  console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
};
// get12HourTime(): Returns a string with AM/PM.
Clock.prototype.get12HourTime = function () {
  const formattedHours = Number(String(this.hours).padStart(2, "0"));
  const formattedMinutes = String(this.minutes).padStart(2, "0");
  const formattedSeconds = String(this.seconds).padStart(2, "0");
  console.log(
    `${
      formattedHours < 12
        ? `${formattedHours}:${formattedMinutes}:${formattedSeconds} AM`
        : `${formattedHours}:${formattedMinutes}:${formattedSeconds} PM`
    }`
  );
};

nowObject.getFormattedTime()
nowObject.get12HourTime();