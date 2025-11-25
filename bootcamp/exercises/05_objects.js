// ===== 5. Objects (Maldivian Examples) =====

/*
 * WHAT ARE OBJECTS?
 * Objects are collections of related data and functionality stored as key-value pairs.
 * Think of them as real-world objects with properties (characteristics) and methods (actions).
 *
 * WHY DO WE NEED OBJECTS?
 * 1. Organize Related Data: Group a student's name, age, and school together instead of separate variables
 * 2. Real-World Modeling: Represent real things like boats, books, or people with all their properties
 * 3. Readable Code: student.name is clearer than studentName, studentAge, studentSchool as separate variables
 * 4. Flexible Structure: Add, modify, or remove properties as needed
 *
 * OBJECTS VS ARRAYS:
 * - Arrays: Ordered lists accessed by position [0, 1, 2]
 *   Example: let islands = ["Malé", "Addu", "Fuvahmulah"];
 *   Access: islands[0] → "Malé"
 *
 * - Objects: Named properties accessed by key
 *   Example: let student = {name: "Ahmed", age: 18, school: "Dharumavantha"};
 *   Access: student.name → "Ahmed"
 *
 * OBJECT BASICS:
 * - Create: let boat = {name: "Dhoni", length: 50, color: "blue"};
 * - Access (dot notation): boat.name → "Dhoni"
 * - Access (bracket notation): boat["length"] → 50
 * - Add property: boat.engineHP = 200;
 * - Modify property: boat.color = "red";
 * - Delete property: delete boat.color;
 *
 * NESTED OBJECTS:
 * Objects can contain other objects for complex data:
 *   let house = {
 *     name: "Sea View",
 *     address: {
 *       street: "Majeedhee Magu",
 *       island: "Malé",
 *       atoll: "Kaafu"
 *     }
 *   };
 *   Access: house.address.island → "Malé"
 *
 * REAL-WORLD EXAMPLE:
 * Instead of scattered variables:
 *   let boatName = "Blue Wave";
 *   let boatLength = 45;
 *   let boatColor = "blue";
 *
 * Use one organized object:
 *   let boat = {
 *     name: "Blue Wave",
 *     length: 45,
 *     color: "blue"
 *   };
 *
 * Much cleaner and easier to pass around in your program!
 */

// ===== EXERCISES =====

// 1. Create an object named `student` with properties for `name`, `age`, and `school`.


// 2. Access and print the `name` property of the `student` object.


// 3. Access and print the `age` property of the `student` object.


// 4. Add a new property `grade` to the `student` object.


// 5. Update the `school` property of the `student` object to a new school.


// 6. Create an object named `fishingBoat` with properties for `name`, `length`, and `engineHP`.


// 7. Access a property of the `fishingBoat` object using bracket notation.


// 8. Add a `color` property to the `fishingBoat` object.


// 9. Create an object `book` with properties `title`, `author`, and `pages`.


// 10. Write a statement to print the book's title and author in the format: "[Title] by [Author]".


// 11. Add a property `isRead` to the `book` object with a boolean value.


// 12. Create a nested object `house` with a `name` property and an `address` property, where `address` is another object with `street`, `island`, and `atoll`.


// 13. Access the `street` property of the `house`'s `address`.


// 14. Get an array of all the keys from the `student` object.


// 15. Get an array of all the values from the `student` object.
