// ===== 13. OOP / Classes (Maldivian Examples) =====

/*
 * WHAT IS OOP (Object-Oriented Programming)?
 * OOP is a programming paradigm that organizes code around "objects" that contain both data and functions.
 * Classes are blueprints for creating objects with shared properties and behaviors.
 *
 * WHY DO WE NEED CLASSES AND OOP?
 * 1. Code Organization: Group related data and functions together logically
 * 2. Reusability: Create multiple objects from the same blueprint (class)
 * 3. Inheritance: Share code between related classes (Student inherits from Person)
 * 4. Real-World Modeling: Model real-world entities with properties and actions
 *
 * KEY CONCEPTS:
 *
 * 1. CLASS - Blueprint for creating objects
 *    class Person {
 *      constructor(name, age) {
 *        this.name = name;  // Property
 *        this.age = age;    // Property
 *      }
 *
 *      introduce() {        // Method
 *        return `I am ${this.name}, age ${this.age}`;
 *      }
 *    }
 *
 * 2. OBJECT/INSTANCE - Actual object created from a class
 *    let ahmed = new Person("Ahmed", 25);
 *    let aisha = new Person("Aisha", 30);
 *    console.log(ahmed.introduce()); // "I am Ahmed, age 25"
 *
 * 3. CONSTRUCTOR - Special method that runs when creating new objects
 *    Sets up initial properties
 *
 * 4. THIS KEYWORD - Refers to the current object instance
 *    Inside ahmed, this.name refers to ahmed's name
 *    Inside aisha, this.name refers to aisha's name
 *
 * 5. METHODS - Functions inside a class
 *    introduce() is a method that belongs to Person objects
 *
 * 6. INHERITANCE - Create classes based on other classes
 *    class Student extends Person {
 *      constructor(name, age, school) {
 *        super(name, age);  // Call parent constructor
 *        this.school = school;
 *      }
 *
 *      introduce() {
 *        return `${super.introduce()}, I study at ${this.school}`;
 *      }
 *    }
 *
 * 7. STATIC METHODS - Methods that belong to the class itself, not instances
 *    class Person {
 *      static getSpecies() {
 *        return "Human";
 *      }
 *    }
 *    Person.getSpecies(); // Call on class, not instance
 *
 * 8. GETTERS AND SETTERS - Control access to properties
 *    class Boat {
 *      constructor() {
 *        this._speed = 0;
 *      }
 *
 *      get speed() {
 *        return this._speed;
 *      }
 *
 *      set speed(value) {
 *        if (value < 0) {
 *          console.log("Speed cannot be negative");
 *        } else {
 *          this._speed = value;
 *        }
 *      }
 *    }
 *
 * CLASS VS OBJECT:
 * - Class: Blueprint/template (like a house plan)
 * - Object: Actual instance created from class (like an actual house built from the plan)
 *
 * REAL-WORLD EXAMPLE:
 * Modeling fishing boats in an app:
 *
 * Without classes (messy):
 *   let boat1Name = "Blue Wave";
 *   let boat1Length = 50;
 *   let boat2Name = "Sea Star";
 *   let boat2Length = 45;
 *   // Hard to manage many boats!
 *
 * With classes (organized):
 *   class Boat {
 *     constructor(name, length) {
 *       this.name = name;
 *       this.length = length;
 *     }
 *
 *     info() {
 *       return `${this.name} is ${this.length} feet long`;
 *     }
 *   }
 *
 *   let boat1 = new Boat("Blue Wave", 50);
 *   let boat2 = new Boat("Sea Star", 45);
 *   console.log(boat1.info()); // "Blue Wave is 50 feet long"
 */

// ===== EXERCISES =====

// 1. Create a `Person` class with a `constructor` that takes `name` and `age`.
//    The constructor should set these as properties on the instance.


// 2. Add a method `introduce()` to the `Person` class that returns a string like "My name is [name], and I am [age] years old."


// 3. Create an instance of the `Person` class and call the `introduce()` method.


// 4. Create a `Student` class that `extends` the `Person` class.
//    The `Student` constructor should also take a `subject`.


// 5. The `Student` constructor should call the `super()` constructor with the name and age.
//    It should also set the `subject` property.


// 6. Override the `introduce()` method in the `Student` class to include the subject.
//    "My name is [name], I am [age] years old, and I study [subject]."


// 7. Create an instance of the `Student` class and call its `introduce()` method.


// 8. Add a `static` method to the `Person` class called `getSpecies()` that returns "Human".
//    Can you call this method on an instance of `Person`? Why or why not?
// Answer:


// 9. What is the `this` keyword in the context of a class? Explain its role.
// Answer:


// 10. Create a `Boat` class with properties `name` and `type`. Add a method `info()` that prints the boat's details.


// 11. Create a `get` and `set` for a `speed` property on the `Boat` class.
//     The setter should not allow the speed to be a negative number.


// 12. Explain the difference between a `class` and an `object` (instance).
// Answer:
