// =====================================================
// 1. JSON – What is it and Why?
// =====================================================
// JSON is used to store and send data as text.
// We use JSON.stringify() to convert JS → JSON
// We use JSON.parse() to convert JSON → JS

const students = [
  { id: 1, name: "Ali", age: 17 },
  { id: 2, name: "Laila", age: 18 }
];

const jsonString = JSON.stringify(students);
console.log("1. JSON String:", jsonString);

const parsedStudents = JSON.parse(jsonString);
console.log("2. Parsed JSON → JS Object:", parsedStudents);

// =====================================================
// 2. Arrow Functions
// =====================================================
// A shorter way to write functions using =>

const greet = (name) => "Hello, " + name;
console.log("3. Greeting:", greet("Zaid"));

// =====================================================
// 3. forEach and map – View/Loop Examples
// =====================================================

console.log("4. forEach → Loop through students:");
students.forEach((student) => {
  console.log(" -", student.name);
});

console.log("5. map → Get new array of names:");
const names = students.map((s) => s.name);
console.log(" → Names:", names);

// =====================================================
// 4. localStorage CRUD – Browser Storage
// =====================================================
// You can save data that stays after refresh (only strings)

function saveToLocal() {
  localStorage.setItem("students", JSON.stringify(students));
  console.log("6. Data saved to localStorage");
}

function loadFromLocal() {
  const raw = localStorage.getItem("students");
  const loaded = raw ? JSON.parse(raw) : [];
  console.log("7. Data loaded from localStorage →", loaded);
  return loaded;
}

function updateStudent(id, newData) {
  let data = loadFromLocal();
  const index = data.findIndex((s) => s.id === id);
  if (index !== -1) {
    data[index] = { ...data[index], ...newData };
    localStorage.setItem("students", JSON.stringify(data));
    console.log("8. Student updated.");
  }
}

function deleteStudent(id) {
  let data = loadFromLocal();
  data = data.filter((s) => s.id !== id);
  localStorage.setItem("students", JSON.stringify(data));
  console.log("9. Student deleted.");
}

saveToLocal();
loadFromLocal();
updateStudent(2, { age: 20 });
deleteStudent(1);
loadFromLocal();

// =====================================================
// 5. fetch() + .then() – API Data (GET)
// =====================================================
// Fetch from public API → Promise → .then() handles response

const apiURL = "https://jsonplaceholder.typicode.com/posts";

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => console.log("10. GET → First Post:", data[0]));

// =====================================================
// 6. fetch() – POST, PUT, PATCH, DELETE
// =====================================================

fetch(apiURL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Hello", body: "Test Post", userId: 1 })
})
  .then((res) => res.json())
  .then((data) => console.log("11. POST →", data));

fetch(apiURL + "/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ id: 1, title: "Updated", body: "Updated Post", userId: 1 })
})
  .then((res) => res.json())
  .then((data) => console.log("12. PUT →", data));

fetch(apiURL + "/1", {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Partially Updated" })
})
  .then((res) => res.json())
  .then((data) => console.log("13. PATCH →", data));

fetch(apiURL + "/1", { method: "DELETE" })
  .then(() => console.log("14. DELETE → Success"));

// =====================================================
// 7. async/await – Modern Way to Fetch
// =====================================================

async function getPosts() {
  const res = await fetch(apiURL);
  const data = await res.json();
  console.log("15. async/await GET →", data[0]);
}

getPosts();

// =====================================================
// 8. Basic Array Methods – CRUD Style
// =====================================================

console.log("16. push → Add new student at end:");
students.push({ id: 3, name: "Ibrahim", age: 19 });
console.log(" → After push:", students);

console.log("17. pop → Remove last student:");
students.pop();
console.log(" → After pop:", students);

console.log("18. unshift → Add student at start:");
students.unshift({ id: 0, name: "Aisha", age: 20 });
console.log(" → After unshift:", students);

console.log("19. shift → Remove first student:");
students.shift();
console.log(" → After shift:", students);

console.log("20. splice → Remove 1 item at index 1:");
students.splice(1, 1); // delete 1 item
console.log(" → After splice (delete):", students);

console.log("21. splice → Insert at index 1:");
students.splice(1, 0, { id: 5, name: "Musa", age: 22 });
console.log(" → After splice (insert):", students);
