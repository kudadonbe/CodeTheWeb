# 🏫 **Code the Web – Class 12: Add Projects + Contact Form**

### 🎯 **Session Goal**

Students will expand their portfolio site by:

1. Linking their completed mini-projects, and
2. Creating a functional **Contact Form** using HTML.

Focus is still on **HTML structure**, with a preview of how forms can work later with JavaScript or email links.

---

## 🧑‍🏫 **Class Overview**

| Section       | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| Topic         | Add project links + create a contact form                   |
| Duration      | 1.5–2 hours                                                 |
| Format        | Live demo, portfolio updates, contact form creation         |
| Prerequisites | Class 11 (basic portfolio structure)                        |
| Key Concepts  | `<a href>`, `<form>`, `<input>`, `<textarea>`, `mailto:`    |
| Output        | Updated portfolio with project links + contact form section |

---

## 🛠️ **Example: Projects List with Links**

```html
<section id="projects">
  <h2>Projects</h2>
  <ul>
    <li><a href="todo.html" target="_blank">To-Do App</a></li>
    <li><a href="compliments.html" target="_blank">Compliment Generator</a></li>
  </ul>
</section>
```

> You can use local HTML files or CodePen links for now.

---

## 🛠️ **Example: Contact Form**

```html
<section id="contact">
  <h2>Contact Me</h2>
  <form action="mailto:you@example.com" method="POST">
    <label>Your Name:</label><br>
    <input type="text" name="name" required><br><br>

    <label>Your Email:</label><br>
    <input type="email" name="email" required><br><br>

    <label>Your Message:</label><br>
    <textarea name="message" rows="4" required></textarea><br><br>

    <button type="submit">Send</button>
  </form>
</section>
```

---

## 📖 **Key Concepts Introduced**

| Concept            | Description                                 |
| ------------------ | ------------------------------------------- |
| `<a href>`         | Link to external or internal resources      |
| `target="_blank"`  | Open links in a new tab                     |
| `<form>`           | Form structure block                        |
| `action="mailto:"` | Sends message via email (simplified method) |
| `required`         | Basic validation in HTML                    |
| `<textarea>`       | Multiline input field                       |

---

## 🧭 **Teaching Flow**

### 🔹 Step 1: Recap Previous Class (10 min)

* Revisit portfolio layout (header, nav, sections)
* Review what makes a good project showcase

### 🔹 Step 2: Add Real Project Links (15–20 min)

* Add 1–2 working projects under “Projects” section
* Make each one clickable

### 🔹 Step 3: Build a Contact Form (30–40 min)

* Add fields: name, email, message
* Use `mailto:` action for simple submissions
* Emphasize semantic markup and `required` fields

---

## 🧪 **In-Class Challenge**

> 🎯 Create a second “Contact Method” section:

* Add your LinkedIn, GitHub, or Instagram as icon links
* Bonus: Add an avatar or photo next to the contact form

---

## 📝 **Homework / Extension Task**

* Replace placeholder email with your real address (or test one)
* Add one more project with a working demo
* Style the form using minimal inline CSS if comfortable

---

## 🧠 **Secretly Learned**

| Concept             | Where It’s Used                            |
| ------------------- | ------------------------------------------ |
| Link usage          | `<a href="project.html">`                  |
| Opening in new tab  | `target="_blank"`                          |
| Form structure      | `<form>`, `<input>`, `<textarea>`          |
| Contact methods     | Mailto, socials, and readable presentation |
| Portfolio structure | Projects and contact info all in one page  |

---