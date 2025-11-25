// ===== 11. Asynchronous JavaScript (Maldivian Examples) =====

/*
 * WHAT IS ASYNCHRONOUS JAVASCRIPT?
 * Asynchronous code allows your program to do multiple things at once without waiting.
 * Instead of blocking while waiting for slow operations (like fetching data), your program continues running.
 *
 * WHY DO WE NEED ASYNC CODE?
 * 1. Don't Freeze the App: Fetch data from servers without making the page unresponsive
 * 2. Handle Delays: Work with operations that take time (file uploads, database queries)
 * 3. Better User Experience: Users can interact with your app while data loads
 * 4. Parallel Operations: Do multiple things simultaneously (fetch multiple APIs at once)
 *
 * SYNCHRONOUS VS ASYNCHRONOUS:
 *
 * Synchronous (blocking):
 *   console.log("Start");
 *   let data = fetchData(); // Program WAITS here (bad!)
 *   console.log(data);
 *   console.log("End");
 *
 * Asynchronous (non-blocking):
 *   console.log("Start");
 *   fetchData().then(data => console.log(data)); // Continues immediately
 *   console.log("End"); // This runs BEFORE data is fetched!
 *
 * KEY CONCEPTS:
 *
 * 1. PROMISES - Represent a future value (will be available eventually)
 *    States: Pending → Fulfilled (success) or Rejected (error)
 *
 *    Creating a Promise:
 *      let promise = new Promise((resolve, reject) => {
 *        setTimeout(() => {
 *          resolve("Data loaded!"); // Success
 *        }, 2000);
 *      });
 *
 *    Using a Promise:
 *      promise.then(data => console.log(data)); // Runs when resolved
 *
 * 2. ASYNC/AWAIT - Modern, cleaner way to work with Promises
 *    Makes asynchronous code look synchronous!
 *
 *    Old way (promise chains):
 *      fetchUser().then(user => {
 *        return fetchPosts(user.id);
 *      }).then(posts => {
 *        console.log(posts);
 *      });
 *
 *    New way (async/await):
 *      async function getPosts() {
 *        let user = await fetchUser();      // Wait for user
 *        let posts = await fetchPosts(user.id); // Then wait for posts
 *        console.log(posts);
 *      }
 *
 * 3. ERROR HANDLING WITH TRY/CATCH
 *    async function login(username, password) {
 *      try {
 *        let user = await loginAPI(username, password);
 *        console.log("Logged in:", user);
 *      } catch (error) {
 *        console.log("Login failed:", error);
 *      }
 *    }
 *
 * 4. PROMISE.ALL - Wait for multiple promises simultaneously
 *    let [weather, flights, hotels] = await Promise.all([
 *      fetchWeather(),
 *      fetchFlights(),
 *      fetchHotels()
 *    ]);
 *    // All three fetch at the same time, not one by one!
 *
 * REAL-WORLD EXAMPLE:
 * Booking a resort room:
 *
 * Without async (blocks everything):
 *   checkAvailability(); // Wait 3 seconds
 *   bookRoom();          // Wait 2 seconds
 *   sendConfirmation();  // Wait 1 second
 *   // User can't do ANYTHING for 6 seconds!
 *
 * With async (responsive):
 *   async function bookResort() {
 *     try {
 *       let availability = await checkAvailability(); // Page still works
 *       let booking = await bookRoom(availability);
 *       await sendConfirmation(booking);
 *       console.log("Booking complete!");
 *     } catch (error) {
 *       console.log("Booking failed:", error.message);
 *     }
 *   }
 */

// ===== EXERCISES =====

// ----- Promises -----
// 1. Create a simple promise that resolves after 3 seconds with the message "Promise resolved!".


// 2. Create a promise that rejects after 1 second with an error message "Promise rejected!".


// 3. Chain two promises. The first resolves with a number of fish caught. The second one adds 10 more fish.


// ----- Async/Await -----
// 4. Write an `async` function that waits for a promise to resolve (e.g., fetching weather data) and then logs the result.


// 5. Write an `async` function that uses a `try...catch` block to handle a rejected promise (e.g., a ferry schedule not found).


// 6. Create an async function `fetchFishermanData` that simulates fetching fisherman's data.
//    It should return a promise that resolves with an object `{ data: 'Fisherman Information' }` after 2 seconds.
async function fetchFishermanData() {
  // Your code here
}


// 7. Use `async/await` to call the `fetchFishermanData` function and log the data.


// ----- Real-world Simulation -----
// 8. Simulate a BML (Bank of Maldives) login. Create an async function `loginBML(username, password)`
//    that returns a promise. If credentials are correct, resolve with a user object.
//    Otherwise, reject with "Login failed".
async function loginBML(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'aishath' && password === 'rufiyaa123') {
        resolve({ username: 'aishath', account: '123456789' });
      } else {
        reject('Login failed');
      }
    }, 1500);
  });
}


// 9. Use `async/await` to call `loginBML` and handle both success and failure cases.


// 10. Write an async function that fetches flight details from two airlines (Maldivian and FlyMe) concurrently using `Promise.all`.
const fetchMaldivian = new Promise(resolve => setTimeout(() => resolve('Maldivian Flight Q2 123'), 1200));
const fetchFlyMe = new Promise(resolve => setTimeout(() => resolve('FlyMe Flight VP 456'), 1800));
