---
marp: true
theme: uncover
class: invert
paginate: true
backgroundImage: url('../../settings/kudadonbe_theme_black.png')
---

# 🎨 **Day 2 – Introduction to CSS**

> Making the Web Beautiful

---

## 🎯 Today's Goals

- Understand what CSS is and why it's important
- Learn CSS selectors and properties
- Master colors and backgrounds
- Understand the box model
- Style text and links
- Use the display property

---

## 🤔 What is CSS?

### **CSS = Cascading Style Sheets**

- 🎨 The "design layer" of the web
- Controls how HTML looks
- Separates content from presentation
- **HTML = What, CSS = How it looks**

---

## 🌐 The Web Without CSS

### **Imagine:**

- No colors (only black and white)
- No layouts (everything stacked)
- No fonts (only browser defaults)
- **Boring!** 😴

> CSS makes the web beautiful and usable

---

## 📝 How to Add CSS

### **3 Ways:**

1. **Inline** – In HTML element
2. **Internal** – In `<style>` tag
3. **External** – Separate `.css` file

```html
<!-- Inline -->
<p style="color: blue;">Blue text</p>

<!-- Internal -->
<style>
  p { color: blue; }
</style>

<!-- External -->
<link rel="stylesheet" href="styles.css">
```

---

## 🎯 CSS Syntax

### **The Pattern:**

```css
selector {
  property: value;
  property: value;
}
```

**Example:**
```css
h1 {
  color: navy;
  font-size: 32px;
}
```

---

## 🔍 CSS Selectors

### **Common Selectors:**

```css
/* Element selector */
p { color: black; }

/* Class selector */
.highlight { background: yellow; }

/* ID selector */
#header { font-size: 24px; }

/* Multiple selectors */
h1, h2, h3 { font-family: Arial; }
```

---

## 🎨 Colors in CSS

### **Ways to Define Colors:**

```css
/* Color names */
color: red;

/* Hex codes */
color: #ff0000;

/* RGB */
color: rgb(255, 0, 0);

/* RGBA (with transparency) */
color: rgba(255, 0, 0, 0.5);
```

---

## 🖼️ Background Properties

### **Background Basics:**

```css
.box {
  background-color: lightblue;
  background-image: url('image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Shorthand */
background: lightblue url('image.jpg') center/cover no-repeat;
```

---

## 📦 The Box Model

### **Every Element is a Box:**

```
┌─────────────────────────────┐
│        MARGIN               │
│  ┌──────────────────────┐  │
│  │     BORDER            │  │
│  │  ┌───────────────┐   │  │
│  │  │   PADDING     │   │  │
│  │  │  ┌────────┐  │   │  │
│  │  │  │CONTENT │  │   │  │
│  │  │  └────────┘  │   │  │
│  │  └───────────────┘   │  │
│  └──────────────────────┘  │
└─────────────────────────────┘
```

---

## 📦 Box Model Properties

```css
.box {
  /* Content size */
  width: 300px;
  height: 200px;

  /* Padding (inside) */
  padding: 20px;

  /* Border */
  border: 2px solid black;

  /* Margin (outside) */
  margin: 10px;
}
```

---

## 📐 Box Model Shorthand

```css
/* All sides */
padding: 20px;

/* Vertical | Horizontal */
padding: 10px 20px;

/* Top | Right | Bottom | Left (clockwise) */
padding: 10px 15px 20px 15px;

/* Individual sides */
padding-top: 10px;
padding-right: 15px;
padding-bottom: 20px;
padding-left: 15px;
```

---

## 🔤 Styling Text

### **Font Properties:**

```css
p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  line-height: 1.5;
  letter-spacing: 1px;
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
}
```

---

## 🎨 Text Color & Shadow

```css
h1 {
  /* Text color */
  color: #333;

  /* Text shadow */
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

/* Multiple shadows */
h2 {
  text-shadow:
    1px 1px 2px red,
    0 0 1em blue,
    0 0 0.2em blue;
}
```

---

## 🔗 Styling Links

### **Link States:**

```css
/* Normal link */
a {
  color: blue;
  text-decoration: none;
}

/* Visited link */
a:visited {
  color: purple;
}

/* Mouse over link */
a:hover {
  color: red;
  text-decoration: underline;
}

/* Active link (being clicked) */
a:active {
  color: orange;
}
```

---

## 📺 Display Property

### **How Elements Behave:**

```css
/* Block: Takes full width, stacks */
div {
  display: block;
}

/* Inline: Only takes needed width */
span {
  display: inline;
}

/* Inline-block: Inline but can have width/height */
button {
  display: inline-block;
}

/* Hide element */
.hidden {
  display: none;
}
```

---

## 🎯 Block vs Inline

### **Block Elements:**
- Take full width available
- Start on new line
- Can set width and height
- Examples: `<div>`, `<p>`, `<h1>`

### **Inline Elements:**
- Only take needed width
- Don't start new line
- Can't set width/height
- Examples: `<span>`, `<a>`, `<strong>`

---

## 🔧 Common CSS Properties

```css
.element {
  /* Size */
  width: 300px;
  height: 200px;
  max-width: 100%;

  /* Spacing */
  margin: 10px;
  padding: 20px;

  /* Border */
  border: 1px solid #ccc;
  border-radius: 8px;

  /* Background */
  background-color: white;
}
```

---

## 💻 Live Coding Exercise

### **Let's Build a Styled Card!**

We'll create:
- A centered card
- Custom colors and backgrounds
- Styled text
- Hover effects on links
- Proper spacing with box model

---

## 🎨 CSS Units

```css
/* Absolute units */
px   /* Pixels */

/* Relative units */
%    /* Percentage of parent */
em   /* Relative to font-size */
rem  /* Relative to root font-size */
vw   /* Viewport width */
vh   /* Viewport height */
```

---

## 🌈 Color Tools

### **Resources:**

- Color picker in browser DevTools
- https://coolors.co – Color palette generator
- https://htmlcolorcodes.com – Color reference
- Adobe Color – Color wheel

> **Tip:** Start with a simple 2-3 color scheme

---

## 🎯 CSS Best Practices

1. **Use classes** instead of IDs for styling
2. **Keep it simple** – Don't over-style
3. **Use comments** to organize code
4. **Group related styles** together
5. **Use meaningful class names**

```css
/* Good */
.button-primary { }

/* Bad */
.btn1 { }
```

---

## 🐛 Common CSS Mistakes

1. **Forgetting semicolons** `;`
2. **Misspelling property names**
3. **Wrong selector syntax**
4. **Not understanding box model**
5. **Inline styles everywhere**

> Use browser DevTools to debug!

---

## 🛠️ Browser DevTools

### **Inspect Element:**

- Right-click → Inspect
- See HTML and CSS
- Edit live in browser
- Test before coding
- Debug styling issues

**Practice this today!**

---

## 📝 Today's Project

### **Styled Profile Card**

Create a beautiful profile card with:
- Custom colors and background
- Styled heading and text
- Rounded corners
- Hover effect on button
- Proper spacing (box model)

---

## 🎯 Challenge Tasks

1. **Easy:** Change all colors in your card
2. **Medium:** Add a background image
3. **Hard:** Create a hover effect that changes multiple properties
4. **Expert:** Style a navigation menu with links

---

## 📚 CSS Resources

- **MDN CSS Reference:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **CSS-Tricks:** https://css-tricks.com
- **W3Schools CSS:** https://www.w3schools.com/css/
- **Can I Use:** https://caniuse.com (browser support)

---

## 🔄 Review

### **What We Learned:**

- ✅ CSS adds style to HTML
- ✅ Selectors target elements
- ✅ Box model: content, padding, border, margin
- ✅ Colors: names, hex, RGB
- ✅ Text styling properties
- ✅ Link states (hover, visited, etc.)
- ✅ Display property (block, inline)

---

## 🏠 Homework

### **Practice Tasks:**

1. Style your Day 1 HTML page with CSS
2. Create 3 different colored boxes
3. Style a list of links with hover effects
4. Experiment with different fonts
5. Build a simple "About Me" card

**Goal:** Get comfortable with CSS syntax!

---

## ❓ Questions?

### **Tomorrow: Day 3 – Advanced CSS**

We'll learn:
- Flexbox for layouts
- CSS Grid
- Responsive design
- Animations
- CSS variables

---

# 🎨 **Keep Styling!**

> "CSS is like painting – practice makes perfect"

**See you tomorrow!**

---
