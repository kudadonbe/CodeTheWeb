# 🌐 Code the Web – Classroom Course Repo

A full **web development curriculum** taught in a physical classroom setting, combining project-based lessons with fundamentals of HTML, CSS, and JavaScript — without any frameworks.

---

## 🏫 Course Summary

- **Total Sessions:** 14 Core + 4 Bonus
- **Session Duration:** 1.5–2 hours
- **Format:** In-person, hands-on (lab or laptop setting)
- **Languages Taught:** HTML, CSS, JavaScript (Vanilla)
- **Final Goal:** A real working **portfolio website** with multiple projects

---

## 📂 Repository Structure

```bash
.
├── bootcamp/           # Extra JS practice and mini lessons
├── classes/            # All class folders with notes and slides (00–18)
├── projects/           # Student & demo projects (To-Do, Certificate Gen, etc.)
├── tutorial/           # Bonus examples and mini tutorial apps
├── settings/           # Course planning, outlines, themes, teaching notes
├── index.html          # Course landing page
└── README.md           # You're here
````

---

## 🗂️ Key Folders

### 📘 `classes/`

Each subfolder (`00_class`, `01_class`, ..., `18_class`) contains:

* `slides.md` – Teaching slides
* `note.md` or `guide.md` – Teacher/student notes
* `.html` files – Demo code or project pages

### 💻 `projects/`

Mini projects built during or after classes:

* `banking/` – Final project for teaching JS fundamentals
* `certificateGen/` – Multi-page Dhivehi/English certificate app
* `todo/` – Live To-Do App
* `presentation/`, `lable/`, `Invoice/` – Extra HTML/CSS examples

### 🎒 `bootcamp/`

JavaScript practice exercises covering all fundamentals:

* **13 exercise files** (01_variables.js → 13_oop_classes.js)
* Each file has educational introduction explaining **what** and **why**
* Covers: variables, data types, arrays, objects, loops, conditionals, functions, ES6+, JSON, async, error handling, OOP
* See `bootcamp/README.md` for setup and testing instructions

### 📁 `settings/`

Planning docs:

* `course_outline.md` – Full class breakdown (14 sessions)
* Theme images, console screenshots, VS Code tips

---

## 📚 Class Topics (01–14)

| Week  | Topic                             | Output                    |
| ----- | --------------------------------- | ------------------------- |
| 1     | Intro to Code & Web               | Welcome Card (HTML + CSS) |
| 2     | JS Basics & Events                | Button → Change Text      |
| 3     | Variables & Logic                 | Greet User App            |
| 4     | Loops & Functions                 | Compliment Generator      |
| 5     | Forms and Input                   | Feedback Form             |
| 6     | Arrays & DOM                      | Show Comments List        |
| 7     | Booleans + UI Visibility          | Secret Revealer           |
| 8–10  | To-Do App Build                   | Full-featured To-Do List  |
| 11–13 | Portfolio Site + Contact + Mobile | Responsive Site           |
| 14    | Publish & Wrap-up                 | Live Website on GitHub    |

---

## 🎁 Bonus Lessons (15–18)

| Class | Topic              | Focus                                |
| ----- | ------------------ | ------------------------------------ |
| 15    | localStorage To-Do | Data persistence, `JSON.stringify()` |
| 16    | IndexedDB          | Client database, `idb` wrapper       |
| 17    | Fetch + JSON API   | `fetch()`, async/await               |
| 18    | json-server + CRUD | Simulated backend + RESTful APIs     |

---

## 🚀 Getting Started

### For Students (Testing JavaScript Exercises)

```bash
# Install dependencies (first time only)
pnpm install

# Run JavaScript files with auto-reload
pnpm dev bootcamp/exercises/01_variables.js

# Stop with Ctrl+C
```

See [`bootcamp/README.md`](bootcamp/README.md) for detailed instructions.

### For Viewing HTML/CSS Projects

```bash
# Run local server (optional)
python3 -m http.server
```

Or just open `index.html` and any class/project `index.html` in your browser.

---

## ✍️ Contribution & Customization

* Use `classes/` to teach or self-learn in sequence
* Customize the `projects/` for student work
* Use `settings/` for printable guides and slides
* All files are editable using VS Code or browser dev tools

---

## 📄 License

MIT License — free to learn, use, and share with attribution.

---

> Made with 💙 by Sumeyku Academy
> For the **Foundations of Programming through Web Technologies** course

```