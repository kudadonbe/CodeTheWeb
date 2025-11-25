// ===== 7. Conditionals (Maldivian Examples) =====

/*
 * WHAT ARE CONDITIONALS?
 * Conditionals allow your program to make decisions and execute different code based on conditions.
 * They're like "if this, then do that" logic that lets your program respond to different situations.
 *
 * WHY DO WE NEED CONDITIONALS?
 * 1. Decision Making: Programs need to respond differently to different situations
 * 2. User Input Handling: Validate what users enter and respond appropriately
 * 3. Flow Control: Direct your program down different paths based on data
 * 4. Smart Behavior: Make your program intelligent and responsive to changing conditions
 *
 * TYPES OF CONDITIONALS:
 *
 * 1. IF STATEMENT - Execute code only if condition is true
 *    if (temperature > 30) {
 *      console.log("It's hot today!");
 *    }
 *
 * 2. IF-ELSE STATEMENT - Choose between two options
 *    if (isRaining) {
 *      console.log("Bring an umbrella");
 *    } else {
 *      console.log("Enjoy the sunshine");
 *    }
 *
 * 3. IF-ELSE IF-ELSE STATEMENT - Choose between multiple options
 *    if (score >= 90) {
 *      console.log("Grade: A");
 *    } else if (score >= 75) {
 *      console.log("Grade: B");
 *    } else {
 *      console.log("Grade: C");
 *    }
 *
 * 4. TERNARY OPERATOR - Shorthand if-else for simple conditions
 *    let status = age >= 18 ? "Adult" : "Minor";
 *
 * 5. SWITCH STATEMENT - Choose between many specific values
 *    switch (atollCode) {
 *      case "HDh":
 *        console.log("Haa Dhaalu");
 *        break;
 *      case "Sh":
 *        console.log("Shaviyani");
 *        break;
 *      default:
 *        console.log("Unknown atoll");
 *    }
 *
 * COMPARISON OPERATORS:
 * - === (equal to), !== (not equal to)
 * - > (greater than), < (less than)
 * - >= (greater or equal), <= (less or equal)
 *
 * LOGICAL OPERATORS:
 * - && (AND): both conditions must be true
 * - || (OR): at least one condition must be true
 * - ! (NOT): inverts the condition
 *
 * REAL-WORLD EXAMPLE:
 * A fishing app that gives advice based on weather:
 *   if (windSpeed > 20 && waveHeight > 2) {
 *     alert("Dangerous! Stay ashore.");
 *   } else if (isRaining) {
 *     alert("Wait for the rain to stop.");
 *   } else {
 *     alert("Good conditions for fishing!");
 *   }
 */

// ===== EXERCISES =====

// 1. Write an `if` statement that checks if a `temperature` in Celsius is greater than 30.
let temperature = 32;


// 2. Write an `if-else` statement that checks if `isRaining` is true or false.
let isRaining = false;


// 3. Write an `if-else if-else` statement to categorize `time` (hour) into "Morning" (5-11), "Afternoon" (12-17), or "Night" (18-4).
let time = 14;


// 4. Use a ternary operator to assign a value to `canGoFishing` based on whether `isBadWeather` is true or false.
let isBadWeather = false;


// 5. Write a `switch` statement to handle different cases for `atollCode` (e.g., "HDh", "Sh", "N").
let atollCode = 'HDh';


// 6. Check if a variable `isLoggedIn` is `true`. If it is, print "Welcome!".
let isLoggedIn = true;


// 7. Check if a user's `role` is "admin". If it is, grant access.
let userRole = 'admin';


// 8. Check if a `score` is greater than or equal to 50. If so, print "Pass". Otherwise, print "Fail".
let score = 65;


// 9. Check if a variable `username` is empty. If it is, prompt the user to enter their name.
let username = '';


// 10. Write a condition to check if a `rufiyaaAmount` is positive, negative, or zero.
let rufiyaaAmount = -10;


// 11. Check if a `password` length is at least 6 characters.
let password = 'password123';


// 12. Check if a user is both a "student" and "active".
let isStudent = true;
let isActive = true;
