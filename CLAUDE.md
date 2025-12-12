# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is **Code the Web**, a web development curriculum for teaching HTML, CSS, and vanilla JavaScript in a physical classroom setting. The course runs 14 core sessions plus 4 bonus lessons, with students building a portfolio website containing multiple projects by the end.

**Key Philosophy:**
- Pure HTML/CSS/JavaScript only (no frameworks, no TypeScript, no build tools)
- Project-based learning with immediate, tangible outputs each session
- Designed for classroom teaching with live coding demonstrations
- Focus on fundamentals through real-world projects

## Repository Structure

```
.
├── classes/          # 00-18: Teaching materials (slides.md, note.md/guide.md, demo HTML)
├── online-course/    # 7-day intensive online course (orientation + 7 days)
├── projects/         # Student projects and examples (banking, todo, certificateGen, etc.)
├── bootcamp/         # JavaScript practice exercises and syntax drills
├── tutorial/         # Bonus tutorial examples
├── settings/         # Course planning docs and outlines
└── index.html        # Course landing page
```

## Course Formats

This repository contains **two distinct course formats**:

1. **14-Week Physical Classroom Course** (`classes/` directory)
   - 14 core sessions + 4 bonus lessons
   - 1.5-2 hours per session
   - In-person, hands-on lab setting
   - Builds portfolio website with multiple projects
   - Progressive learning from basics to GitHub Pages deployment

2. **7-Day Intensive Online Course** (`online-course/` directory)
   - Orientation + 7 days of concentrated learning
   - Designed for online delivery (Google Meet, MS Teams, Skype)
   - Fast-paced fundamentals: HTML → CSS → JavaScript → Project
   - Each day has `slides.md` and `notes.md`
   - Culminates in Certificate Generator project (day 6) and review (day 7)

## Key Projects

### `projects/banking/`
Complete JavaScript banking system teaching all fundamentals in one scenario:
- `banking-fundamentals-template.js`: Step-by-step template covering variables, data types, arrays, objects, loops, conditionals, functions, ES6+ features
- `banking-final-project.js`: Full implementation with multi-bank system, account numbers, transfers
- Uses Intl.NumberFormat for currency formatting
- Demonstrates practical use of all core JS concepts

### `projects/certificateGen/`
Multi-page certificate generator with Dhivehi/English language support:
- `/recipients.html`: Add and manage recipient data
- `/print.html`: Generate and print certificates
- `/data/`: JSON data storage and fetch utilities
- `/templates/`: Certificate templates
- Demonstrates: JSON data handling, multilingual support, print styling

### `projects/todo/`
Progressive To-Do app built across classes 8-10:
- `finalTodoApp.html`: Complete version with add/delete/render functionality
- Self-contained single HTML files (inline CSS/JS)
- Core teaching tool for arrays, DOM manipulation, events

### `bootcamp/exercises/`
Structured JavaScript practice files (01-13):
- `01_variables.js` through `13_oop_classes.js`
- Each file contains practice prompts and exercises
- Some exercises include Dhivehi/Maldivian context examples

## Class Structure (classes/)

Each class folder (00_class through 18_class) follows this pattern:
- `slides.md`: Teaching presentation content
- `note.md` or `guide.md`: Instructor notes and student guidance
- `.html` files: Working demos and starter code

**Core curriculum (Classes 1-14):**
1. Welcome Card (HTML + CSS)
2. Button interactions (JS basics)
3. Variables & user input
4. Loops & functions
5. Forms and validation
6. Arrays & DOM
7. Booleans & visibility toggles
8-10. To-Do App (complete project)
11-13. Portfolio site (responsive design)
14. Publishing to GitHub Pages

**Bonus lessons (Classes 15-18):**
- 15: localStorage (data persistence, JSON.stringify/parse)
- 16: IndexedDB (client-side database)
- 17: fetch() and JSON APIs
- 18: json-server and CRUD operations

## Running the Projects

All projects are client-side HTML/CSS/JavaScript:

```bash
# Simple local server (optional)
python3 -m http.server

# Or open any .html file directly in browser
open index.html
open projects/todo/finalTodoApp.html
open classes/08_class/todoApp.html
open online-course/day6/project/index.html
```

### Running JavaScript Exercises (bootcamp/)

```bash
# Install dependencies (first time only)
pnpm install

# Run with auto-reload using nodemon
pnpm dev bootcamp/exercises/01_variables.js

# Alternative aliases
pnpm watch bootcamp/exercises/01_variables.js

# Or run once with Node.js
node bootcamp/exercises/01_variables.js
```

No build process, no npm install required for HTML/CSS projects.

**Exception:** `projects/learnFunctions/` contains node_modules with Airtable integration (dotenv, node-fetch, airtable packages).

## Development Patterns

### Single-File HTML Pattern
Most teaching examples use self-contained HTML files with inline `<style>` and `<script>` tags. This keeps everything visible and easy to understand for students.

### DOM Manipulation
Standard vanilla JS patterns throughout:
```javascript
document.getElementById()
document.querySelector()
element.innerHTML / innerText
element.addEventListener()
```

### Data Persistence Patterns
- **Class 15:** localStorage with JSON.stringify/parse
- **Class 17:** fetch() for external JSON
- **Class 18:** json-server for full CRUD

### Formatting Conventions
- Banking projects use `Intl.NumberFormat` for currency
- Template literals and string padding (padStart/padEnd) for formatted output
- Functions generally use descriptive names (createBank, findAccount, etc.)

## Course Materials Location

- Full 14-week outline: `settings/Class (14 week plan) course_outline.md`
- Video course outline: `settings/Video Course Outline – Code the Web.md`
- Teaching resources: `settings/` directory

## Important Notes

- **No frameworks:** Everything is vanilla HTML/CSS/JS by design
- **Educational context:** Code is optimized for teaching clarity, not production patterns
- **Dhivehi language:** Some exercises and the certificate generator include Maldivian language support
- **Single HTML files:** Many projects intentionally use inline styles/scripts for classroom simplicity
- **Sequential learning:** Classes build on each other; later classes assume earlier concepts

## When Working With This Codebase

1. **Maintain simplicity:** Don't introduce build tools, frameworks, or complex patterns
2. **Keep code teachable:** Prioritize readability over optimization
3. **Preserve self-contained examples:** Don't split single-file demos into modules
4. **Respect the learning progression:** Understand which class/week introduces each concept
5. **Consider the classroom context:** Changes should work on student laptops without setup complexity
