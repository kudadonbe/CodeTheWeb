# 🏫 **Code the Web – Class 13: Make It Mobile (Responsive Design)**

### 🎯 **Session Goal**

Teach students how to make their portfolio site **look good on both desktop and mobile screens**. Introduce **responsive design**, including **flexbox**, **media queries**, and **mobile-first principles**.

---

## 🧑‍🏫 **Class Overview**

| Section       | Description                                               |
| ------------- | --------------------------------------------------------- |
| Topic         | Responsive design + mobile layout                         |
| Duration      | 1.5–2 hours                                               |
| Format        | Live coding, side-by-side preview, refactor activity      |
| Prerequisites | Class 12 (working portfolio with projects + contact form) |
| Key Concepts  | Flexbox, media queries, viewport, column layout           |
| Output        | A mobile-friendly portfolio site                          |

---

## 🛠️ **Starter Responsive Code Examples**

### ✅ 1. **Viewport Meta Tag**

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

---

### ✅ 2. **Flexbox Layout Example**

```css
.navbar {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
```

---

### ✅ 3. **Media Query Example**

```css
@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    align-items: center;
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

---

## 📖 **Key Concepts Introduced**

| Concept            | Explanation                                     |
| ------------------ | ----------------------------------------------- |
| Viewport meta tag  | Ensures mobile browsers scale correctly         |
| Flexbox            | Responsive layout model (row/column, wrapping)  |
| Media queries      | Apply styles only under certain screen sizes    |
| Mobile-first       | Design for small screens first, then scale up   |
| % / rem / vw units | Use scalable, flexible sizes (avoid fixed `px`) |

---

## 🧭 **Teaching Flow**

### 🔹 Step 1: Why Responsive Design? (10 min)

* Show same website on desktop + mobile view
* Ask: How does a good mobile site feel?

### 🔹 Step 2: Add Meta Tag + Check (5 min)

* Add `<meta name="viewport">`
* Show how page now scales properly on mobile

### 🔹 Step 3: Refactor Navigation with Flexbox (20 min)

* Update navigation to use `display: flex`
* Try stacking links in mobile view using `flex-direction: column`

### 🔹 Step 4: Use Media Queries (30 min)

* Explain screen breakpoints (`max-width: 600px`)
* Let students adjust font sizes, spacing, and layout
* Add margin/padding for touch-friendly buttons

---

## 🧪 **In-Class Challenge**

> ✅ Make your **Projects** section display in 2 columns on desktop, 1 column on mobile
> ✅ Make all buttons at least `40px` tall on small screens

```css
@media (max-width: 600px) {
  .project-list {
    display: flex;
    flex-direction: column;
  }
}
```

---

## 📝 **Homework / Extension Task**

* Use flexbox to center your contact form
* Hide large background images on mobile
* Add smooth spacing using `%`, `em`, or `vw`

---

## 🧠 **Secretly Learned**

| Concept              | Where It’s Used                            |
| -------------------- | ------------------------------------------ |
| Responsive layout    | Flexbox and media queries                  |
| Accessibility basics | Button spacing, font size adjustments      |
| Mobile-first design  | Prioritize smallest screens, then scale up |
| CSS power            | One file for multiple screen sizes         |

---