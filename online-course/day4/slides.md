---
marp: true
theme: uncover
class: invert
paginate: true
backgroundImage: url('../../settings/kudadonbe_theme_black.png')
---

# ⚡ **Day 4 – Introduction to JavaScript**

> Making the Web Interactive

---

## 🎯 Today's Goals

- Understand what JavaScript is and why it's powerful
- Learn variables and data types
- Master operators (math, comparison, logical)
- Use conditional statements (if/else)
- Create loops (for, while)
- Write functions

---

## 🤔 What is JavaScript?

### **The Programming Language of the Web**

- ⚙️ Makes websites **interactive**
- 🧠 The "brain" of the webpage
- 🌐 Runs in the browser (no installation needed!)
- 📱 Also used for mobile apps, servers, desktop apps

---

## 🧱 Remember the Three Pillars?

```
HTML = Structure (the skeleton)
CSS  = Style (the appearance)
JS   = Behavior (the interactivity)
```

### **Without JavaScript:**
- Static pages
- No interaction
- No dynamic updates
- **Boring!** 😴

---

## 🚀 What Can JavaScript Do?

- Respond to button clicks
- Validate forms
- Create animations
- Fetch data from servers
- Build games
- **Make websites come alive!** ✨

---

## 💻 Where Does JavaScript Live?

### **Three Ways to Add JS:**

```html
<!-- 1. Inline (not recommended) -->
<button onclick="alert('Hello!')">Click</button>

<!-- 2. Internal (good for learning) -->
<script>
  console.log('Hello, World!');
</script>

<!-- 3. External (professional standard) -->
<script src="script.js"></script>
```

---

## 🔧 Your First JavaScript!

```html
<!DOCTYPE html>
<html>
<head>
  <title>First JavaScript</title>
</head>
<body>
  <h1>Open the Console!</h1>

  <script>
    console.log('Hello, World!');
    console.log('JavaScript is running!');
    alert('Welcome to JavaScript!');
  </script>
</body>
</html>
```

**Press F12 to open DevTools Console!**

---

## 📦 Variables

### **Variables = Containers for Data**

```javascript
// Declare a variable
let name = 'Ahmed';
let age = 25;
let isStudent = true;

// Use the variable
console.log(name); // Ahmed
console.log(age);  // 25
```

**Think of variables as labeled boxes that store values**

---

## 🔤 Variable Declaration Keywords

```javascript
// let - can be reassigned
let score = 100;
score = 150; // ✅ Works

// const - cannot be reassigned
const PI = 3.14159;
PI = 3.14; // ❌ Error!

// var - old way (avoid it)
var oldWay = 'not recommended';
```

**Use `const` by default, `let` when you need to reassign**

---

## 📝 Naming Variables

### **Rules:**
- ✅ Must start with letter, $, or _
- ✅ Can contain letters, numbers, $, _
- ❌ Cannot use reserved words (let, if, for, etc.)
- ❌ Cannot contain spaces

```javascript
// Good names
let firstName = 'John';
let totalScore = 100;
let _private = 'secret';
let $element = document.querySelector('div');

// Bad names
let 123abc = 'no'; // ❌ Starts with number
let first-name = 'no'; // ❌ Has hyphen
let let = 'no'; // ❌ Reserved word
```

---

## 🎨 Data Types

### **JavaScript has 7 primitive types:**

```javascript
// 1. String (text)
let name = 'Ahmed';
let message = "Hello, World!";

// 2. Number (integers and decimals)
let age = 25;
let price = 19.99;

// 3. Boolean (true/false)
let isLoggedIn = true;
let hasAccess = false;

// 4. Undefined (no value assigned)
let emptyBox;

// 5. Null (intentionally empty)
let nothing = null;
```

---

## 📝 Strings

```javascript
// Creating strings
let single = 'Single quotes';
let double = "Double quotes";
let template = `Template literals (ES6)`;

// String concatenation
let firstName = 'Ahmed';
let lastName = 'Ali';
let fullName = firstName + ' ' + lastName;

// Template literals (better!)
let greeting = `Hello, ${firstName}!`;
let sentence = `My name is ${fullName} and I'm ${age} years old.`;
```

---

## 🔢 Numbers

```javascript
// Integers
let count = 42;

// Decimals (floats)
let price = 19.99;

// Math operations
let sum = 10 + 5;      // 15
let difference = 10 - 5; // 5
let product = 10 * 5;   // 50
let quotient = 10 / 5;  // 2
let remainder = 10 % 3; // 1 (modulo)

// Increment/Decrement
let x = 5;
x++;  // x is now 6
x--;  // x is now 5
```

---

## ✅ Booleans

```javascript
// Only two values
let isTrue = true;
let isFalse = false;

// Comparison operators return booleans
let isAdult = age >= 18;
let isEqual = 5 === 5;
let isNotEqual = 5 !== 10;

// Used in conditions
if (isLoggedIn) {
  console.log('Welcome back!');
}
```

---

## 🔍 Operators

### **Arithmetic Operators:**

```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13 (addition)
console.log(a - b);  // 7  (subtraction)
console.log(a * b);  // 30 (multiplication)
console.log(a / b);  // 3.333... (division)
console.log(a % b);  // 1  (remainder/modulo)
console.log(a ** b); // 1000 (exponentiation)
```

---

## 🔍 Comparison Operators

```javascript
let x = 10;
let y = '10';

// Equality
console.log(x == y);   // true (loose - converts types)
console.log(x === y);  // false (strict - checks type too)

// Inequality
console.log(x != y);   // false
console.log(x !== y);  // true

// Greater/Less than
console.log(x > 5);    // true
console.log(x < 20);   // true
console.log(x >= 10);  // true
console.log(x <= 10);  // true
```

**Always use `===` and `!==` (strict equality)**

---

## 🔗 Logical Operators

```javascript
// AND (&&) - both must be true
let age = 25;
let hasLicense = true;
let canDrive = age >= 18 && hasLicense;  // true

// OR (||) - at least one must be true
let isWeekend = true;
let isHoliday = false;
let canRest = isWeekend || isHoliday;  // true

// NOT (!) - inverts boolean
let isLoggedIn = true;
let isGuest = !isLoggedIn;  // false
```

---

## 🔀 Conditional Statements

### **if/else - Make Decisions**

```javascript
let age = 20;

if (age >= 18) {
  console.log('You are an adult');
} else {
  console.log('You are a minor');
}
```

**The code "branches" based on a condition**

---

## 🔀 Multiple Conditions

```javascript
let score = 85;

if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');
} else if (score >= 70) {
  console.log('Grade: C');
} else if (score >= 60) {
  console.log('Grade: D');
} else {
  console.log('Grade: F');
}
```

---

## 🔀 Nested Conditions

```javascript
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  if (isAdmin) {
    console.log('Welcome, Admin!');
  } else {
    console.log('Welcome, User!');
  }
} else {
  console.log('Please log in');
}

// Better with logical operators:
if (isLoggedIn && isAdmin) {
  console.log('Welcome, Admin!');
} else if (isLoggedIn) {
  console.log('Welcome, User!');
} else {
  console.log('Please log in');
}
```

---

## 🔄 Loops

### **Repeat Code Multiple Times**

```javascript
// Print numbers 1 to 5
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// Or use a loop!
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

**Loops save time and reduce repetition**

---

## 🔄 For Loop

### **Most Common Loop**

```javascript
for (initialization; condition; increment) {
  // Code to repeat
}

// Example: Count 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Example: Count down
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Example: Even numbers
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
```

---

## 🔄 While Loop

```javascript
// Runs while condition is true
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}

// Be careful of infinite loops!
// while (true) {
//   console.log('This never stops!'); // ❌
// }
```

---

## 🔄 Do-While Loop

```javascript
// Runs at least once, then checks condition
let num = 1;

do {
  console.log(num);
  num++;
} while (num <= 5);

// Difference: runs code first, then checks condition
let x = 10;
do {
  console.log('Runs once!'); // Prints even though x > 5
} while (x < 5);
```

---

## ⚡ Functions

### **Reusable Blocks of Code**

```javascript
// Define a function
function greet() {
  console.log('Hello, World!');
}

// Call (execute) the function
greet(); // Hello, World!
greet(); // Hello, World!
greet(); // Hello, World!
```

**Write once, use many times!**

---

## 📥 Function Parameters

```javascript
// Function with parameters
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('Ahmed');  // Hello, Ahmed!
greet('Fatima'); // Hello, Fatima!

// Multiple parameters
function add(a, b) {
  console.log(a + b);
}

add(5, 3);  // 8
add(10, 20); // 30
```

---

## 📤 Return Values

```javascript
// Function that returns a value
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log(sum); // 8

// Use return value in expressions
let total = add(10, 20) + add(5, 5);
console.log(total); // 40

// Function without return gives undefined
function noReturn() {
  console.log('No return value');
}

let result = noReturn(); // undefined
```

---

## 🎯 Function Examples

```javascript
// Check if number is even
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4));  // true
console.log(isEven(7));  // false

// Calculate circle area
function circleArea(radius) {
  return 3.14159 * radius * radius;
}

console.log(circleArea(5)); // 78.53975

// Greet based on time
function greetByTime(hour) {
  if (hour < 12) {
    return 'Good morning!';
  } else if (hour < 18) {
    return 'Good afternoon!';
  } else {
    return 'Good evening!';
  }
}
```

---

## 🎨 Function Expression

```javascript
// Function declaration (what we've used)
function add(a, b) {
  return a + b;
}

// Function expression (assign to variable)
const multiply = function(a, b) {
  return a * b;
};

// Arrow function (modern ES6)
const subtract = (a, b) => {
  return a - b;
};

// Arrow function (short form)
const divide = (a, b) => a / b;
```

---

## 🎯 Scope

### **Where Variables Are Accessible**

```javascript
// Global scope
let globalVar = 'I am global';

function myFunction() {
  // Function scope
  let localVar = 'I am local';
  console.log(globalVar); // ✅ Can access
  console.log(localVar);  // ✅ Can access
}

myFunction();
console.log(globalVar); // ✅ Can access
console.log(localVar);  // ❌ Error! Not defined
```

---

## 💻 Practical Example: Calculator

```javascript
function calculator(num1, num2, operation) {
  if (operation === 'add') {
    return num1 + num2;
  } else if (operation === 'subtract') {
    return num1 - num2;
  } else if (operation === 'multiply') {
    return num1 * num2;
  } else if (operation === 'divide') {
    return num1 / num2;
  } else {
    return 'Invalid operation';
  }
}

console.log(calculator(10, 5, 'add'));      // 15
console.log(calculator(10, 5, 'multiply')); // 50
console.log(calculator(10, 5, 'divide'));   // 2
```

---

## 🐛 Debugging Tips

```javascript
// Use console.log() everywhere!
let x = 5;
console.log('x is:', x);

let y = x * 2;
console.log('y is:', y);

// Check variable types
console.log(typeof x);      // 'number'
console.log(typeof 'hello'); // 'string'

// Use DevTools Console
// - See errors
// - Test code snippets
// - Inspect variable values
```

---

## ❌ Common Mistakes

```javascript
// 1. Forgetting semicolons (sometimes matters)
let x = 5
let y = 10  // Can cause issues

// 2. Using = instead of ===
if (x = 5) { } // ❌ Assignment, not comparison
if (x === 5) { } // ✅ Correct

// 3. Undefined variables
console.log(nonExistent); // ❌ Error!

// 4. Wrong function call
function greet() { }
greet; // ❌ Missing ()
greet(); // ✅ Correct
```

---

## 📝 Today's Project

### **Age Classifier**

Create a function that:
- Takes age as parameter
- Returns classification:
  - 0-12: "Child"
  - 13-19: "Teenager"
  - 20-59: "Adult"
  - 60+: "Senior"

Then test with different ages and display results!

---

## 🎯 Challenge Tasks

**Easy:**
- Create a function that checks if a number is positive, negative, or zero
- Write a loop that prints even numbers from 1 to 20

**Medium:**
- Create a temperature converter (Celsius ↔ Fahrenheit)
- Write a function that finds the largest of 3 numbers

**Hard:**
- Create a function that checks if a year is a leap year
- Write a FizzBuzz program (1-100: Fizz for multiples of 3, Buzz for 5, FizzBuzz for both)

---

## 🔄 Review

### **What We Learned:**

- ✅ Variables store data (let, const)
- ✅ Data types: string, number, boolean
- ✅ Operators: arithmetic, comparison, logical
- ✅ Conditionals: if/else for decisions
- ✅ Loops: for, while for repetition
- ✅ Functions: reusable code blocks
- ✅ Parameters and return values

---

## 🏠 Homework

1. **Create 5 different functions** (greet, add, isEven, max, etc.)
2. **Write a for loop** that prints the multiplication table for 7
3. **Create a grade calculator** function (score → letter grade)
4. **Practice FizzBuzz** (classic programming challenge)
5. **Read MDN JavaScript Guide** (basic syntax)

**Goal:** Get comfortable with JavaScript fundamentals!

---

## 📚 Resources

- **MDN JavaScript Guide:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- **JavaScript.info:** https://javascript.info/
- **W3Schools JS Tutorial:** https://www.w3schools.com/js/
- **FreeCodeCamp:** https://www.freecodecamp.org/

---

## 💡 Programming Mindset

### **Remember:**

- 🧠 **Logic over memorization**
- 🔍 **Break problems into small steps**
- 🐛 **Errors are learning opportunities**
- 📝 **Comment your code**
- 🎯 **Practice, practice, practice!**

---

## ❓ Coming Tomorrow

### **Day 5: JavaScript DOM Manipulation**

We'll learn to:
- Select HTML elements
- Change content dynamically
- Add event listeners
- Create interactive webpages
- **Make websites respond to users!**

---

# ⚡ **Code Every Day!**

> "The only way to learn programming is by programming"

**See you tomorrow!**

---
