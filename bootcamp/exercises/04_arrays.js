// ===== 4. Arrays (Maldivian Examples) =====

/*
 * WHAT ARE ARRAYS?
 * Arrays are special variables that can hold multiple values in a single ordered list.
 * Think of them as numbered containers where each value has a position (index) starting from 0.
 *
 * WHY DO WE NEED ARRAYS?
 * 1. Group Related Data: Store all island names in one place instead of islandName1, islandName2, islandName3...
 * 2. Easy to Loop Through: Process 100 items with a simple loop instead of writing 100 separate commands
 * 3. Dynamic Size: Add or remove items as needed - perfect for growing lists
 * 4. Built-in Methods: JavaScript provides powerful tools like push(), pop(), filter(), map() to work with arrays
 *
 * ARRAY BASICS:
 * - Create: let islands = ["Malé", "Hulhumalé", "Vilimalé"];
 * - Access: islands[0] gives you "Malé" (first item)
 * - Modify: islands[1] = "Addu" changes the second item
 * - Length: islands.length tells you how many items (3)
 *
 * COMMON ARRAY OPERATIONS:
 * - Add to end: push() → islands.push("Gan") adds "Gan" at the end
 * - Remove from end: pop() → islands.pop() removes the last item
 * - Add to start: unshift() → islands.unshift("Fuvahmulah") adds to the beginning
 * - Remove from start: shift() → islands.shift() removes the first item
 * - Find position: indexOf() → islands.indexOf("Malé") returns 0
 * - Check existence: includes() → islands.includes("Addu") returns true/false
 *
 * REAL-WORLD EXAMPLE:
 * Without arrays:
 *   let island1 = "Malé";
 *   let island2 = "Hulhumalé";
 *   let island3 = "Vilimalé";
 *   // Nightmare to manage 100+ islands!
 *
 * With arrays:
 *   let islands = ["Malé", "Hulhumalé", "Vilimalé"];
 *   islands.push("Addu"); // Easy to add more
 *   for (let island of islands) { console.log(island); } // Easy to process all
 */

// ===== EXERCISES =====

// 1. Create an array named `colors` with a list of colors (e.g., ocean blue, coral pink, sand white).


// 2. Access and print the first color in the `colors` array.


// 3. Access and print the last color in the `colors` array.


// 4. Add a new color to the end of the `colors` array.


// 5. Add a new color to the beginning of the `colors` array.


// 6. Remove the last color from the `colors` array.


// 7. Remove the first color from the `colors` array.


// 8. Find the index of a specific color in the `colors` array.


// 9. Check if a specific color is included in the `colors` array.


// 10. Get the length of the `colors` array.


// 11. Create a new array `extraColors` and concatenate it with the `colors` array.


// 12. Create a new array by slicing the `colors` array from the second element to the fourth element.


// 13. Convert the `colors` array to a string.


// 14. Join the elements of the `colors` array with a star (*).
