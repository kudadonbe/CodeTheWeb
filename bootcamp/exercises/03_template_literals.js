// ===== 3. Template Literals & Formatting (Maldivian Examples) =====

/*
 * WHAT ARE TEMPLATE LITERALS?
 * Template literals are a modern way to create strings in JavaScript using backticks (` `) instead of quotes.
 * They allow you to embed variables and expressions directly into strings using ${expression} syntax.
 *
 * WHY DO WE NEED TEMPLATE LITERALS?
 * 1. Readability: "Hello " + name + ", you are " + age + " years old" becomes `Hello ${name}, you are ${age} years old`
 * 2. Multi-line Strings: Create strings that span multiple lines without special characters
 * 3. Expression Evaluation: Calculate values right inside the string: `Total: ${price * quantity}`
 * 4. Less Error-Prone: No need to worry about missing spaces or plus signs when concatenating
 *
 * WHAT IS STRING FORMATTING?
 * String formatting means controlling how text and numbers appear - padding with zeros, rounding decimals, etc.
 *
 * WHY DO WE NEED STRING FORMATTING?
 * 1. Consistent Display: Make account numbers always 8 digits: "00000123"
 * 2. Currency Format: Show prices with 2 decimal places: "150.50"
 * 3. Alignment: Line up text in columns or create visual patterns
 * 4. Professional Output: Make your program's output look polished and readable
 *
 * COMMON FORMATTING METHODS:
 * - toFixed(n): Round numbers to n decimal places → (75.6789).toFixed(2) = "75.68"
 * - padStart(length, char): Add characters to the start → "77".padStart(8, "0") = "00000077"
 * - padEnd(length, char): Add characters to the end → "Boat".padEnd(10, ".") = "Boat......"
 *
 * REAL-WORLD EXAMPLE:
 * Old way (string concatenation):
 *   let msg = "1 kilo of " + fishType + " costs " + price + " rufiyaa";
 *
 * New way (template literal):
 *   let msg = `1 kilo of ${fishType} costs ${price} rufiyaa`;
 *
 * Much cleaner and easier to read!
 */

// ===== EXERCISES =====

// 1. Declare `fishType`, `kilos`, and `pricePerKilo`. Create a string using template literals to show the price of fish.
//    Example: "1 kilo of tuna costs 50 rufiyaa."


// 2. Create variables `island`, `atoll`, and `population`.
//    Form a sentence: "[Island] is in [Atoll] atoll, with a population of [Population] people."


// 3. Declare a variable `item` with a value like "coconut". Declare a `quantity` variable.
//    Use a template literal and a conditional (ternary) operator to create a string that says "1 coconut" or "5 coconuts" depending on the count.


// 4. Using `toFixed()`, format the number 75.6789 to one decimal place for a currency value.


// 5. Using `padStart()`, format an ID number string "77" to be 8 characters long, padded with "0" at the start.
//    Example: "00000077"


// 6. Using `padEnd()`, format a boat name "Dhoani" to be 15 characters long, padded with "."
//    Example: "Dhoani........."


// 7. Declare `firstName` and `lastName`. Create a `fullName` variable using a template literal.


// 8. Create a multi-line string for a Maldivian address using a template literal.


// 9. Given a number `n`, use a template literal and `padStart` to format it as a 4-digit number (e.g., if n=25, output "0025").


// 10. Given a price `p`, use `toFixed(2)` and a template literal to format it as a Rufiyaa currency string (e.g., "MVR 150.50").
