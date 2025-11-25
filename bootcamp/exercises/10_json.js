// ===== 10. JSON (Maldivian Examples) =====

/*
 * WHAT IS JSON?
 * JSON (JavaScript Object Notation) is a lightweight text format for storing and exchanging data.
 * It looks like JavaScript objects but is actually just a string that follows specific rules.
 *
 * WHY DO WE NEED JSON?
 * 1. Data Exchange: Send data between servers and web applications (APIs use JSON)
 * 2. Storage: Save complex data structures to files or databases
 * 3. Universal Format: Works with almost every programming language, not just JavaScript
 * 4. Human Readable: Easy to read and write compared to other data formats like XML
 *
 * JSON VS JAVASCRIPT OBJECTS:
 *
 * JavaScript Object:
 *   let student = {name: "Ahmed", age: 18};
 *
 * JSON String:
 *   '{"name": "Ahmed", "age": 18}'
 *   Note: Property names MUST be in double quotes in JSON!
 *
 * KEY METHODS:
 *
 * 1. JSON.stringify() - Convert JavaScript object to JSON string
 *    let student = {name: "Ahmed", age: 18};
 *    let jsonString = JSON.stringify(student);
 *    console.log(jsonString); // '{"name":"Ahmed","age":18}'
 *
 * 2. JSON.parse() - Convert JSON string to JavaScript object
 *    let jsonString = '{"name":"Ahmed","age":18}';
 *    let student = JSON.parse(jsonString);
 *    console.log(student.name); // "Ahmed"
 *
 * JSON RULES:
 * - Property names must be in double quotes: {"name": "value"}
 * - Strings must use double quotes, not single quotes
 * - No trailing commas: {"a": 1, "b": 2,} ← INVALID
 * - Can contain: strings, numbers, objects, arrays, booleans, null
 * - Cannot contain: functions, undefined, Date objects (must convert first)
 *
 * REAL-WORLD EXAMPLE:
 * When you fetch data from a weather API:
 *
 * 1. API sends JSON string:
 *    '{"island":"Malé","temperature":30,"conditions":"sunny"}'
 *
 * 2. You parse it to use in JavaScript:
 *    let weather = JSON.parse(jsonString);
 *    console.log(`It's ${weather.temperature}°C in ${weather.island}`);
 *
 * 3. When you send data to save:
 *    let userData = {username: "aishath", score: 95};
 *    let dataToSend = JSON.stringify(userData);
 *    // Send dataToSend to server...
 */

// ===== EXERCISES =====

// 1. Create a JavaScript object representing a student with a name, age, and a list of subjects.


// 2. Convert the student object into a JSON string using `JSON.stringify()`.


// 3. Log the JSON string to the console.


// 4. Create a JSON string representing a book with a title, author, and publication year.
const bookJSON = '{"title": "Dhivehi Raajjege Tarikh", "author": "Naseema Mohamed", "year": 2000}';


// 5. Parse the `bookJSON` string into a JavaScript object using `JSON.parse()`.


// 6. Access and print the `author` of the book object.


// 7. Create an array of objects, where each object represents a fish with a name and price per kilo.


// 8. Convert the array of fish into a JSON string.


// 9. You receive the following JSON string from a marine biology API. Parse it into a JavaScript array.
const fishJSON = '[{"name": "Yellowfin Tuna", "latin_name": "Thunnus albacares"}, {"name": "Skipjack Tuna", "latin_name": "Katsuwonus pelamis"}]';


// 10. Loop through the parsed array of fish and print each fish's common and Latin name.


// 11. Create a complex object with nested objects and arrays representing an atoll with its islands and population. Convert it to a JSON string.


// 12. Take a JSON string with Thaana script and parse it. `JSON.parse` should handle it correctly.
const thaanaJSON = ' { "name" : "އައިމިނަތު", "age" : [ "25" ] } ';
