// ===== 8. Functions (Maldivian Examples) =====

/*
 * WHAT ARE FUNCTIONS?
 * Functions are reusable blocks of code that perform a specific task.
 * They're like mini-programs within your program that you can call whenever you need them.
 *
 * WHY DO WE NEED FUNCTIONS?
 * 1. Reusability: Write code once, use it many times throughout your program
 * 2. Organization: Break large programs into smaller, manageable pieces
 * 3. Readability: Give meaningful names to operations (calculateTotal is clearer than scattered math)
 * 4. Maintenance: Fix or update code in one place instead of everywhere it's used
 * 5. Testing: Test individual functions separately to ensure they work correctly
 *
 * FUNCTION ANATOMY:
 *
 * Function Declaration:
 *   function greet(name) {        // 'name' is a parameter
 *     return "Hello, " + name;    // 'return' sends a value back
 *   }
 *   let message = greet("Ahmed"); // "Ahmed" is an argument
 *
 * TYPES OF FUNCTIONS:
 *
 * 1. FUNCTION DECLARATION - Standard way to create functions
 *    function addNumbers(a, b) {
 *      return a + b;
 *    }
 *
 * 2. FUNCTION EXPRESSION - Assign function to a variable
 *    const subtract = function(a, b) {
 *      return a - b;
 *    };
 *
 * 3. ARROW FUNCTION - Modern, shorter syntax (ES6+)
 *    const multiply = (a, b) => a * b;
 *
 * KEY CONCEPTS:
 * - Parameters: Variables listed in the function definition (like placeholders)
 * - Arguments: Actual values passed when calling the function
 * - Return: Send a value back to where the function was called
 * - Scope: Variables inside functions are private (can't be accessed outside)
 *
 * REAL-WORLD EXAMPLE:
 * Without functions (repetitive):
 *   let total1 = 100 * 1.06; // Calculate with tax
 *   let total2 = 250 * 1.06; // Same calculation
 *   let total3 = 75 * 1.06;  // Repeated again!
 *
 * With functions (reusable):
 *   function calculateWithTax(amount) {
 *     return amount * 1.06;
 *   }
 *   let total1 = calculateWithTax(100);
 *   let total2 = calculateWithTax(250);
 *   let total3 = calculateWithTax(75);
 *   // Easy to update tax rate in one place!
 */

// ===== EXERCISES =====

// 1. Write a function named `greet` that takes a name as an argument and prints "Assalaamu alaikum, [name]!".


// 2. Write a function named `addNumbers` that takes two numbers as arguments and returns their sum.


// 3. Write a function named `isOdd` that takes a number as an argument and returns `true` if it's odd, and `false` otherwise.


// 4. Write a function named `multiply` that takes two numbers and returns their product.


// 5. Write a function expression and assign it to a variable `subtract`. It should take two numbers and return their difference.


// 6. Write an arrow function named `squareRoot` that takes a number and returns its square root.


// 7. Write a function `calculateAge` that takes a birth year and returns the current age.


// 8. Write a function `getFullName` that takes `firstName` and `lastName` and returns the full name.


// 9. Write a function `findLargest` that takes an array of numbers and returns the largest number.


// 10. Write a function `convertToFahrenheit` that takes a temperature in Celsius and returns it in Fahrenheit.


// 11. Write a function `isPositive` that takes a number and returns `true` if it's positive.


// 12. Write a function `countVowels` that takes a word and returns the number of vowels.
