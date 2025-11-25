// ===== 12. Error Handling (Maldivian Examples) =====

/*
 * WHAT IS ERROR HANDLING?
 * Error handling is how you detect, catch, and respond to errors in your program gracefully.
 * Instead of crashing, your program can handle problems and show helpful messages to users.
 *
 * WHY DO WE NEED ERROR HANDLING?
 * 1. Prevent Crashes: Keep your app running even when something goes wrong
 * 2. User Experience: Show friendly error messages instead of cryptic technical errors
 * 3. Debugging: Catch and log errors to help identify and fix problems
 * 4. Data Validation: Check if user input is valid before processing it
 *
 * KEY CONCEPTS:
 *
 * 1. TRY/CATCH - Attempt code and handle errors if they occur
 *    try {
 *      // Code that might fail
 *      let result = dangerousOperation();
 *    } catch (error) {
 *      // Handle the error
 *      console.log("Something went wrong:", error.message);
 *    }
 *
 * 2. THROW - Manually create and throw errors
 *    function divide(a, b) {
 *      if (b === 0) {
 *        throw new Error("Cannot divide by zero!");
 *      }
 *      return a / b;
 *    }
 *
 * 3. FINALLY - Code that runs whether error occurs or not
 *    try {
 *      connectToDatabase();
 *      fetchData();
 *    } catch (error) {
 *      console.log("Error:", error);
 *    } finally {
 *      closeDatabase(); // Always runs, even if error occurred
 *    }
 *
 * 4. CUSTOM ERROR CLASSES - Create specific error types
 *    class ValidationError extends Error {
 *      constructor(message) {
 *        super(message);
 *        this.name = "ValidationError";
 *      }
 *    }
 *
 *    throw new ValidationError("Invalid email address");
 *
 * ERROR OBJECT PROPERTIES:
 * - error.name: Type of error (e.g., "TypeError", "ReferenceError")
 * - error.message: Description of what went wrong
 * - error.stack: Detailed trace showing where error occurred
 *
 * COMMON ERROR TYPES:
 * - Error: Generic error
 * - TypeError: Wrong data type (e.g., calling a number as a function)
 * - ReferenceError: Variable doesn't exist
 * - SyntaxError: Code has syntax mistakes
 * - RangeError: Number outside valid range
 *
 * REAL-WORLD EXAMPLE:
 * Bank account withdrawal:
 *
 * Without error handling (crashes):
 *   function withdraw(amount) {
 *     balance = balance - amount; // What if amount > balance? Negative balance!
 *   }
 *
 * With error handling (safe):
 *   function withdraw(amount) {
 *     try {
 *       if (amount <= 0) {
 *         throw new Error("Amount must be positive");
 *       }
 *       if (amount > balance) {
 *         throw new Error("Insufficient funds");
 *       }
 *       balance = balance - amount;
 *       console.log("Withdrawal successful");
 *     } catch (error) {
 *       console.log("Transaction failed:", error.message);
 *     } finally {
 *       logTransaction(); // Always log, success or failure
 *     }
 *   }
 */

// ===== EXERCISES =====

// 1. Write a function `divide` that takes two numbers. If the divisor is zero, it should `throw` an error message "Cannot divide by zero!".
function divide(a, b) {
  // Your code here
}


// 2. Use a `try...catch` block to call the `divide` function and handle the error gracefully if the divisor is zero.


// 3. Create a function `parseJSON` that takes a string. Use a `try...catch` block to parse it as JSON.
//    If parsing fails, return `null`.
function parseJSON(str) {
  // Your code here
}


// 4. Create a custom error class `FishingError` that extends the built-in `Error` class.
//    It should take a message in its constructor.
class FishingError extends Error {
  // Your code here
}


// 5. Write a function `checkFish` that throws a `FishingError` if the fish count is less than 10.
function checkFish(fishCount) {
  // Your code here
}


// 6. Use a `try...catch` block to call `checkFish` and specifically catch the `FishingError`.
//    Log a user-friendly error message like "Not enough fish!".


// 7. Add a `finally` block to a `try...catch` statement. Log a message from the `finally` block like "Fishing is over.".


// 8. Write a function that might fail (e.g., trying to read a property of `undefined`).
//    Wrap the call in a `try...catch` and log the error's `name` and `message` properties.


// 9. What is the difference between `throw new Error('Message')` and just `throw 'Message'`?
// Answer:


// 10. Write a function that checks if a parameter is an array of islands. If not, throw a `TypeError`.
function processIslands(islandsList) {
  // Your code here
}
