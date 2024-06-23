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

