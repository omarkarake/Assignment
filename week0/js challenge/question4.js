// Define compose function
const compose =
  (...fns) =>
  (arg) =>
    fns.reduceRight((acc, fn) => fn(acc), arg);

// Example 1: Reverse and Capitalize a String
const reverseString = (str) => str.split("").reverse().join("");
const capitalizeString = (str) => str.toUpperCase();
const reverseAndCapitalize = compose(capitalizeString, reverseString);

const result1 = reverseAndCapitalize("hello world");
console.log(result1); // Outputs: "DLROW OLLEH"

// Example 2: Double All the Even Numbers in an Array
const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);
const doubleNumbers = (arr) => arr.map((num) => num * 2);
const doubleAllEvenNumbers = compose(doubleNumbers, filterEvenNumbers);

const result2 = doubleAllEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(result2); // Outputs: [4, 8, 12]
