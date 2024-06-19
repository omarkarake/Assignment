// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) �
// GOOD LUCK

// function calculateTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }

const calculateTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; //could have used one line, es6 syntax for calcTip function

// console.log("Tip for $100 bill:", calculateTip(100));

const bills = [50, 100, 200, 350];
const tips = [];
const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calculateTip(bills[i]);
//   tips.push(tip);
//   totals.push(bills[i] + tip);
// }

// bills.forEach((element) => {
//   const tip = calculateTip(element);
//   tips.push(tip);
//   totals.push(element + tip);
// });

for (const bill of bills) {
  const tip = calculateTip(bill);
  tips.push(tip);
  totals.push(bill + tip);
}

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);
