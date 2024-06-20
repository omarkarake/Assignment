// Object Methods and this
const person = {
  name: "omar",
  age: 25,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  },
};

const greet = person.greet;
greet.call(person);
greet.apply(person);
const greetPS = greet.bind(person);
greetPS();

// Event Handlers and this
function handleClick() {
  console.log("for regular function---------------");
  console.log(this);
  console.log(this.id);
  console.log(this.textContent);
}
const handleClickArrow = () => {
  console.log("for arrow function---------------");
  console.log(this);
  console.log(this.id);
  console.log(this.textContent);
};

const button = document.querySelector("#click-me-id");
button.addEventListener("click", handleClick);
button.addEventListener("click", handleClickArrow);

// Private Data with Closures and this

function createCounter() {
  let count = 0;
  console.log("count is: " + count);
  return (obj = {
    increment() {
      console.log("incremented is: " + count);
      count++;
    },
    getCount() {
      console.log(count);
      console.log("getCount is: " + count);
    },
  });
}

// const objectReturned = createCounter();
// objectReturned.increment();
// objectReturned.getCount();
// objectReturned.increment();
// objectReturned.getCount();

// Reusable Component with Closure and this.

function createTimer(duration, elementId) {
  // Using closure to store the timer's state
  let remainingTime = duration;
  const element = document.getElementById(elementId);

  if (!element) {
    console.error(`Element with ID ${elementId} not found`);
    return;
  }

  return function () {
    // Start the timer
    updateTimer(); // Update immediately to show the initial duration
    const timerId = setInterval(updateTimer, 1000);

    // Function to update the timer display
    function updateTimer() {
      if (remainingTime >= 0) {
        element.textContent = `${remainingTime} seconds remaining`;
        remainingTime--;
      } else {
        clearInterval(timerId);
        console.log(`Timer with ID ${elementId} has finished`);
      }
    }
  };
}

// const timer1 = document.querySelector("#timer1");
// const timer2 = document.querySelector("#timer2");

const timerForFiveSeconds = createTimer(5, "timer1");
// const timerForSevenSeconds = createTimer(7, "timer2");
timerForFiveSeconds.call(createTimer);
// timerForSevenSeconds.call(createTimer);
