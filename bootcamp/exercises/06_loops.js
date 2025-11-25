// ===== 6. Loops (Maldivian Examples) =====

/*
 * WHAT ARE LOOPS?
 * Loops are programming structures that repeat a block of code multiple times automatically.
 * Instead of writing the same code 100 times, you write it once and let the loop repeat it.
 *
 * WHY DO WE NEED LOOPS?
 * 1. Avoid Repetition: Write code once, run it many times (DRY - Don't Repeat Yourself)
 * 2. Process Collections: Go through every item in an array or object
 * 3. Unknown Iterations: Keep doing something until a condition is met
 * 4. Save Time & Effort: 3 lines of loop code can replace 1000 lines of repeated code
 *
 * TYPES OF LOOPS:
 *
 * 1. FOR LOOP - Use when you know how many times to repeat
 *    for (let i = 0; i < 5; i++) {
 *      console.log(i); // Prints 0, 1, 2, 3, 4
 *    }
 *
 * 2. WHILE LOOP - Use when you don't know how many times, but you have a condition
 *    let count = 0;
 *    while (count < 5) {
 *      console.log(count);
 *      count++;
 *    }
 *
 * 3. FOR...OF LOOP - Use to loop through array values
 *    let islands = ["Malé", "Addu", "Fuvahmulah"];
 *    for (let island of islands) {
 *      console.log(island); // Prints each island name
 *    }
 *
 * 4. FOR...IN LOOP - Use to loop through object properties
 *    let boat = {name: "Dhoni", length: 50};
 *    for (let key in boat) {
 *      console.log(key, boat[key]); // Prints "name Dhoni", "length 50"
 *    }
 *
 * REAL-WORLD EXAMPLE:
 * Without loops (imagine 200 islands!):
 *   console.log("Island: Malé");
 *   console.log("Island: Addu");
 *   console.log("Island: Fuvahmulah");
 *   // ... 197 more lines!
 *
 * With loops:
 *   let islands = ["Malé", "Addu", "Fuvahmulah", ...]; // 200 islands
 *   for (let island of islands) {
 *     console.log("Island:", island);
 *   }
 *   // Just 3 lines handles all 200!
 */

// ===== EXERCISES =====

// 1. Use a `for` loop to print the numbers from 1 to 10.


// 2. Use a `for` loop to print the even numbers from 2 to 20.


// 3. Use a `for` loop to print the odd numbers from 1 to 19.


// 4. Use a `for` loop to count backwards from 10 to 1.


// 5. Given an array of Maldivian names, use a `for` loop to print each name.
const maldivianNames = ['Aishath', 'Mohamed', 'Fathimath', 'Ahmed'];


// 6. Given an array of Rufiyaa amounts, use a `for` loop to calculate the total.
const rufiyaaAmounts = [100, 50, 20, 10, 5];


// 7. Use a `while` loop to print the numbers from 1 to 5.


// 8. Use a `while` loop to find the first Rufiyaa amount greater than 50.


// 9. Use a `for...of` loop to iterate over the `maldivianNames` array and print each name.


// 10. Use a `for...in` loop to iterate over the properties of a `fisherman` object and print their keys and values.
const fisherman = { name: 'Hassan', boat: 'Dhoani', island: 'Maafushi' };


// 11. Use a `for` loop to print the multiplication table for the number 2.


// 12. Use a `for` loop to create a new array with the squares of the numbers from 1 to 5.
