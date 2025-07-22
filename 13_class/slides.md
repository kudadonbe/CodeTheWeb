---

marp: true
theme: uncover
class: invert
paginate: true
--------------

# 🏫 Code the Web – Class 13

## Make It Mobile – Responsive Design

> 🎯 Make your site look great on phones AND desktops
> 📱 Learn Flexbox + Media Queries
> 💡 Build mobile-first, scale up later

---

## 🎯 What You’ll Do Today

* Make your site **responsive**
* Use **Flexbox** for layout
* Add **media queries** for mobile styles
* Design with **mobile-first principles**

---

## 🧑‍🏫 Class Format

| Section        | Description                                |
| -------------- | ------------------------------------------ |
| **Topic**      | Responsive design with HTML/CSS            |
| **Duration**   | 1.5–2 hours                                |
| **Output**     | Mobile-friendly portfolio website          |
| **Last Class** | Projects + contact form sections completed |

---

## 📱 Desktop vs. Mobile Experience

Ask students:

* What happens when a non-mobile site opens on a phone?
* Why do good sites “feel right” on small screens?

> Show before/after of same page on different screens

---

## 🧩 Make It Scale Correctly

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

✅ Essential for responsive behavior
✅ Add this in your `<head>`

---

## 🧱 Use Flexbox to Arrange Items

```css
.navbar {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
```

* Items wrap nicely
* Easy to switch between row/column
* Great for menus, footers, and content blocks

---

## 🎯 Style for Different Screen Sizes (Part 1)

```css
@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    align-items: center;
```

---

## 🎯 Style for Different Screen Sizes (Part 2)

```css
  }

  h1 {
    font-size: 24px;
  }

  input, button {
    width: 100%;
    font-size: 16px;
  }
}
```

🔍 `max-width` = activate when screen is **narrow**

---

## 📖 Today’s Tools

| Concept           | Explanation                            |
| ----------------- | -------------------------------------- |
| Viewport meta tag | Scales site for small screens          |
| Flexbox           | Flexible layout for row/column         |
| Media query       | Apply styles to specific screen widths |
| Mobile-first      | Design for smallest screen first       |
| Scalable units    | Use `%`, `em`, `vw` over fixed `px`    |

---

## 🧪 Apply Your Skills

✅ Make **Projects section** show:

* 📱 1 column on mobile
* 💻 2 columns on desktop

```css
.project-list {
  display: flex;
  flex-wrap: wrap;
}

.project-list li {
  width: 100%;
}
```

---

## 🧪 Apply Your Skills (Media Query)

```css
@media (min-width: 768px) {
  .project-list li {
    width: 48%;
  }
}
```

---

## ☑️ Improve Mobile UX

* Buttons = min **40px height**
* Font = min **16px**
* Inputs = full width
* Tap targets = big enough to touch

---

## 📝 Continue at Home

* Center contact form using Flexbox
* Hide background images on phones
* Adjust spacing with `%`, `em`, `vw`
* Experiment with font scaling in media queries

---

## 🧠 What You Picked Up

| Concept              | Where You Used It                     |
| -------------------- | ------------------------------------- |
| Responsive layout    | Flexbox and media queries             |
| Accessibility basics | Touch-friendly buttons and font sizes |
| Mobile-first design  | Start small, grow smart               |
| CSS efficiency       | Style all screen sizes in one file    |

---

## ✅ You Can Now\...

* Make your site look great on any screen
* Use Flexbox to create smart layouts
* Add responsive rules with media queries
* Get ready to style your **final portfolio**
  