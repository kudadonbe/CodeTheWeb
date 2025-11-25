# JavaScript Bootcamp Exercises

This folder contains JavaScript practice exercises covering fundamental programming concepts.

## Setup

Before you start, make sure Node.js is installed on your computer.

### Install Dependencies

From the **root project folder** (CodeTheWeb), run:

```bash
pnpm install
```

## How to Test Your JavaScript Code

### Option 1: Using Nodemon (Recommended)

Nodemon will automatically run your code whenever you save changes.

**From the root project folder:**

```bash
pnpm dev bootcamp/exercises/01_variables.js
```

or

```bash
pnpm watch bootcamp/exercises/01_variables.js
```

Now every time you save the file, it will automatically run!

**To stop nodemon:** Press `Ctrl + C`

### Option 2: Using Node Directly

Run the file once:

```bash
node bootcamp/exercises/01_variables.js
```

You'll need to run this command again each time you make changes.

### Option 3: In Browser Console

1. Open any browser (Chrome, Firefox, Safari)
2. Press `F12` or `Right-click → Inspect`
3. Go to the **Console** tab
4. Copy and paste your JavaScript code
5. Press `Enter` to run

## Exercise Files

1. **01_variables.js** - Variables and data storage
2. **02_data_types.js** - String, Number, Boolean, Array, Object, etc.
3. **03_template_literals.js** - String formatting and template literals
4. **04_arrays.js** - Working with lists of data
5. **05_objects.js** - Key-value pairs and nested data
6. **06_loops.js** - Repeating code (for, while, for...of, for...in)
7. **07_conditionals.js** - Making decisions (if/else, switch)
8. **08_functions.js** - Reusable code blocks
9. **09_es6_features.js** - Modern JavaScript features
10. **10_json.js** - Data exchange format
11. **11_async.js** - Asynchronous programming (Promises, async/await)
12. **12_error_handling.js** - Try/catch and error management
13. **13_oop_classes.js** - Object-oriented programming

## Tips

- Read the introduction at the top of each file to understand **what** the concept is and **why** it's important
- Complete exercises in order (1 → 13)
- Test your code frequently to see if it works
- Use `console.log()` to print values and debug your code
- Don't be afraid to experiment!

## Example

```javascript
// 01_variables.js
let fishermanName = "Hassan";
console.log(fishermanName); // Prints: Hassan
```

**Run it:**
```bash
pnpm dev bootcamp/exercises/01_variables.js
```

**Output:**
```
Hassan
```

Happy coding! 🚀
