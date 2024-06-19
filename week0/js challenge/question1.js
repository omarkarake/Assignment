// String Transformations
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const reverse = (str) => str.split("").reverse().join("");

const isPalindrome = (str) => {
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return normalizedStr === reverse(normalizedStr);
};

const wordCount = (str) => str.trim().split(/\s+/).length;

// Example usage:
console.log(capitalize("hello world")); // "Hello world"
console.log(reverse("hello")); // "olleh"
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(wordCount("Hello world, this is a test.")); // 6
