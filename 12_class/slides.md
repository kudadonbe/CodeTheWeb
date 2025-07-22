---

marp: true
theme: uncover
class: invert
paginate: true
--------------

# 🏫 Code the Web – Class 12

## Add Projects + Contact Form

> 🎯 Expand your portfolio website
> 🔗 Link your real projects
> 📬 Build your first contact form

---

## 🎯 What You'll Do Today

1. Add clickable **project links**
2. Create a basic **Contact Form**
3. Learn HTML form elements and linking
4. Prepare to style it all next class!

---

## 🧑‍🏫 Class Format

| Section             | Description                           |
| ------------------- | ------------------------------------- |
| **Topic**           | Project linking + Contact Form        |
| **Duration**        | 1.5–2 hours                           |
| **Output**          | Portfolio with real links + form      |
| **From Last Class** | Layout with header, nav, and sections |

---

## 🛠️ Projects List with Links

```html
<section id="projects">
  <h2>Projects</h2>
  <ul>
    <li><a href="todo.html" target="_blank">To-Do App</a></li>
    <li><a href="compliments.html" target="_blank">Compliment Generator</a></li>
  </ul>
</section>
```

✅ Use local files or CodePen URLs
✅ Open in new tab with `target="_blank"`

---

## 📬 Build Your Contact Section (Part 1)

```html
<form action="mailto:you@example.com" method="POST">
  <label>Your Name:</label><br>
  <input type="text" name="name" required><br><br>

  <label>Your Email:</label><br>
  <input type="email" name="email" required><br><br>
```

---

## 📬 Build Your Contact Section (Part 2)

```html
  <label>Your Message:</label><br>
  <textarea name="message" rows="4" required></textarea><br><br>

  <button type="submit">Send</button>
</form>
```

> HTML-only — no backend required (yet!)

---

## 📖 HTML Concepts Today

| Tag/Attribute     | Use                              |
| ----------------- | -------------------------------- |
| `<a href="">`     | Add clickable project links      |
| `target="_blank"` | Opens link in new tab            |
| `<form>`          | Wraps all form fields            |
| `mailto:`         | Sends form data via email client |
| `required`        | Basic form validation            |
| `<textarea>`      | Multiline text field             |

---

## 🔁 Portfolio Structure

Ask students:

* What sections did you add last time?
* Did you use semantic tags?
* Did you name yourself in the header?

✅ Header – About – Projects – Contact – Footer

---

## 🔗 Add 1–2 Projects

* Use CodePen or `.html` files
* Link inside `<li><a href=""></a></li>`
* Example:

```html
<a href="todo.html" target="_blank">To-Do App</a>
```

✅ Make them clickable
✅ Open in new tab

---

## 🛠 Step-by-Step Form

* Use 3 fields: Name, Email, Message
* Wrap inside `<form>` with `mailto:`
* Use `<input>`, `<textarea>`, and `<button>`

> Don’t forget `required` for validation!

---

## 🧪 Extend Your Contact Section

➕ Add a new **“Contact Method”** section:

* Add your **LinkedIn**, **GitHub**, or **Instagram**
* Use icons if possible
* Bonus: Add your photo or avatar using `<img>`

---

## 📝 Practice Tasks

* Replace placeholder email with your **real address**
* Add **one more project** with a working link
* Try styling the form using **inline or embedded CSS**

---

## 🧠 What You Picked Up Today

| Concept             | Where You Used It                         |
| ------------------- | ----------------------------------------- |
| Linking Projects    | `<a href="project.html" target="_blank">` |
| Contact Method      | `<form>` + `mailto:` + `input`            |
| Portfolio Structure | New section: Contact + Socials            |
| Web Presentation    | Clear sections with real content          |

---

## ✅ You Can Now\...

* Link to your projects professionally
* Build a functional contact form
* Continue growing your personal site
* Get ready for **styling** in the next class!