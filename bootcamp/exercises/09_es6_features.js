// ===== 9. ES6+ Features (Maldivian Examples) =====

/*
 * WHAT ARE ES6+ FEATURES?
 * ES6 (ECMAScript 2015) and beyond introduced modern JavaScript features that make code cleaner,
 * shorter, and more powerful. These are now standard in modern JavaScript development.
 *
 * WHY DO WE NEED THESE FEATURES?
 * 1. Write Less Code: Do more with fewer lines
 * 2. Better Readability: Code is easier to understand and maintain
 * 3. More Powerful: Complex operations become simple
 * 4. Industry Standard: Modern JavaScript jobs require knowledge of these features
 *
 * KEY ES6+ FEATURES:
 *
 * 1. DESTRUCTURING - Extract values from arrays/objects into variables
 *    Old way:
 *      let name = student.name;
 *      let age = student.age;
 *
 *    ES6 way:
 *      let {name, age} = student; // Extract multiple values at once!
 *
 * 2. ARRAY METHODS - Powerful tools for working with arrays
 *
 *    MAP - Transform each item in an array
 *      let prices = [10, 20, 30];
 *      let doubled = prices.map(price => price * 2); // [20, 40, 60]
 *
 *    FILTER - Keep only items that match a condition
 *      let numbers = [5, 15, 25, 35];
 *      let big = numbers.filter(num => num > 20); // [25, 35]
 *
 *    REDUCE - Combine all items into a single value
 *      let numbers = [1, 2, 3, 4];
 *      let sum = numbers.reduce((total, num) => total + num, 0); // 10
 *
 * 3. SPREAD OPERATOR (...) - Expand arrays or objects
 *    let arr1 = [1, 2, 3];
 *    let arr2 = [4, 5, 6];
 *    let combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
 *
 * 4. REST OPERATOR (...) - Collect remaining items into an array
 *    function sum(...numbers) {
 *      return numbers.reduce((total, num) => total + num, 0);
 *    }
 *    sum(1, 2, 3, 4, 5); // Works with any number of arguments!
 *
 * 5. ARROW FUNCTIONS - Shorter function syntax
 *    Old way:
 *      function add(a, b) { return a + b; }
 *
 *    Arrow function:
 *      const add = (a, b) => a + b;
 *
 * REAL-WORLD EXAMPLE:
 * Calculate total price of items over 50 Rufiyaa:
 *
 * Old way (longer):
 *   let total = 0;
 *   for (let i = 0; i < prices.length; i++) {
 *     if (prices[i] > 50) {
 *       total += prices[i];
 *     }
 *   }
 *
 * ES6 way (one line!):
 *   let total = prices.filter(p => p > 50).reduce((sum, p) => sum + p, 0);
 */

// ===== EXERCISES =====

// ----- Destructuring -----
// 1. Destructure the `name` and `age` from the `student` object.
const student = { name: 'Amina', age: 15, school: 'Majeediyya' };


// 2. Destructure the first two atolls from the `atolls` array.
const atolls = ['Haa Alif', 'Haa Dhaalu', 'Shaviyani', 'Noonu'];


// ----- Map -----
// 3. Use `.map()` to create a new array with the prices in `rufiyaa` doubled.
const rufiyaa = [10, 50, 100, 500];


// 4. Use `.map()` to create a new array with the lengths of the island names in `islands`.
const islands = ['Male', 'Fuvahmulah', 'Addu', 'Hulhumale'];


// ----- Filter -----
// 5. Use `.filter()` to create a new array with only the amounts greater than 50 from `rufiyaa`.


// 6. Use `.filter()` to create a new array with only the island names that start with 'M' from `islands`.


// ----- Reduce -----
// 7. Use `.reduce()` to find the total sum of the `rufiyaa` array.


// 8. Use `.reduce()` to concatenate all the island names in `islands` into a single string separated by commas.


// ----- Spread/Rest Operator -----
// 9. Use the spread operator to combine two arrays of tropical fruits into a new one.
const fruits1 = ['Coconut', 'Mango', 'Banana'];
const fruits2 = ['Papaya', 'Watermelon', 'Pineapple'];


// 10. Use the rest operator in a function to accept a variable number of Rufiyaa amounts and find the total.
function totalRufiyaa(...amounts) {
  // Your code here
}


// ----- Arrow Functions -----
// 11. Convert the following function into an arrow function.
function addNumbers(a, b) {
  return a + b;
}


// 12. Write an arrow function that takes a word and returns it in uppercase.
