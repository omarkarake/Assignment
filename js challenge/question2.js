// Array Transformations
const double = (arr) => arr.map((num) => num * 2);

const filterEven = (arr) => arr.filter((num) => num % 2 !== 0);

const sum = (arr) => arr.reduce((acc, num) => acc + num, 0);

const average = (arr) => (arr.length === 0 ? 0 : sum(arr) / arr.length);

// Example usage:
console.log(double([1, 2, 3, 4])); // [2, 4, 6, 8]
console.log(filterEven([1, 2, 3, 4])); // [1, 3]
console.log(sum([1, 2, 3, 4])); // 10
console.log(average([1, 2, 3, 4])); // 2.5
