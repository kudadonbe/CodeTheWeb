---
marp: true
theme: uncover
class: invert
paginate: true
backgroundImage: url('../../settings/kudadonbe_theme_black.png')
---

# 🚀 **Day 3 – Advanced CSS**

> Modern Layouts & Responsive Design

---

## 🎯 Today's Goals

- Master **Flexbox** for one-dimensional layouts
- Learn **CSS Grid** for two-dimensional layouts
- Create **responsive designs** that work on all devices
- Add **CSS animations** for interactivity
- Use **CSS variables** for maintainable code

---

## 📱 The Modern Web Challenge

### **Websites must work on:**

- 📱 Mobile phones (320px - 480px)
- 📱 Tablets (768px - 1024px)
- 💻 Laptops (1024px - 1440px)
- 🖥️ Desktops (1440px+)

> **One design, all devices!**

---

## 🔧 Layout Evolution

### **The Journey:**

- **1990s:** Tables for layout 😱
- **2000s:** Floats and positioning 😓
- **2010s:** Flexbox arrives! 🎉
- **2017:** CSS Grid support! 🚀
- **Today:** Flexbox + Grid = Perfect layouts ✨

---

## 📦 Introducing Flexbox

### **Flexbox = Flexible Box Layout**

- One-dimensional layout (row OR column)
- Perfect for navigation, card layouts, centering
- Items flex (grow/shrink) to fill space
- **Most used layout tool!**

---

## 🎯 Flexbox Basics

```css
.container {
  display: flex;
}
```

### **Two Elements:**
1. **Flex Container** (parent)
2. **Flex Items** (children)

```html
<div class="container"> <!-- Flex Container -->
  <div>Item 1</div>     <!-- Flex Item -->
  <div>Item 2</div>     <!-- Flex Item -->
  <div>Item 3</div>     <!-- Flex Item -->
</div>
```

---

## 🔄 Flex Direction

```css
.container {
  display: flex;

  /* Direction */
  flex-direction: row;         /* Default: left to right */
  flex-direction: row-reverse; /* Right to left */
  flex-direction: column;      /* Top to bottom */
  flex-direction: column-reverse; /* Bottom to top */
}
```

---

## 🎯 Justify Content (Main Axis)

```css
.container {
  display: flex;
  justify-content: flex-start;    /* Default: start */
  justify-content: flex-end;      /* End */
  justify-content: center;        /* Center */
  justify-content: space-between; /* Equal space between */
  justify-content: space-around;  /* Equal space around */
  justify-content: space-evenly;  /* Perfectly even spacing */
}
```

---

## ⬆️ Align Items (Cross Axis)

```css
.container {
  display: flex;
  align-items: stretch;     /* Default: fill height */
  align-items: flex-start;  /* Top */
  align-items: flex-end;    /* Bottom */
  align-items: center;      /* Center vertically */
  align-items: baseline;    /* Align text baselines */
}
```

---

## 🎨 Perfect Centering with Flexbox

```css
.container {
  display: flex;
  justify-content: center;  /* Horizontal */
  align-items: center;      /* Vertical */
  height: 100vh;
}
```

### **The holy grail of CSS!** 🏆

---

## 📐 Flex Item Properties

```css
.item {
  /* Grow to fill space */
  flex-grow: 1;

  /* Shrink if needed */
  flex-shrink: 1;

  /* Starting size */
  flex-basis: 200px;

  /* Shorthand */
  flex: 1 1 200px; /* grow shrink basis */

  /* Override alignment */
  align-self: center;

  /* Change order */
  order: 2;
}
```

---

## 🔢 Flex Wrap

```css
.container {
  display: flex;
  flex-wrap: nowrap;      /* Default: single line */
  flex-wrap: wrap;        /* Wrap to multiple lines */
  flex-wrap: wrap-reverse; /* Wrap in reverse */
}
```

**Perfect for responsive card grids!**

---

## 🗂️ Introducing CSS Grid

### **Grid = Two-Dimensional Layout**

- Rows AND columns simultaneously
- Perfect for page layouts, dashboards
- More powerful than Flexbox for complex layouts
- **Modern CSS superpower!**

---

## 📊 Grid Basics

```css
.container {
  display: grid;

  /* Define columns */
  grid-template-columns: 200px 200px 200px;

  /* Define rows */
  grid-template-rows: 100px 100px;

  /* Gap between items */
  gap: 20px;
}
```

---

## 🎯 Grid Template Columns

```css
.grid {
  display: grid;

  /* Fixed widths */
  grid-template-columns: 200px 300px 200px;

  /* Equal columns */
  grid-template-columns: 1fr 1fr 1fr;

  /* Repeat pattern */
  grid-template-columns: repeat(3, 1fr);

  /* Mix units */
  grid-template-columns: 200px 1fr 2fr;

  /* Auto-fill responsive */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

---

## 📏 Grid Positioning

```css
.item {
  /* Column span */
  grid-column: 1 / 3;  /* Start 1, end 3 */
  grid-column: span 2;  /* Span 2 columns */

  /* Row span */
  grid-row: 1 / 3;
  grid-row: span 2;

  /* Shorthand */
  grid-area: 1 / 1 / 3 / 3;
  /* row-start / col-start / row-end / col-end */
}
```

---

## 🎨 Grid Template Areas

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

**Visual and intuitive!**

---

## 🤔 Flexbox vs Grid

### **Use Flexbox when:**
- One-dimensional (row OR column)
- Navigation menus
- Card layouts
- Centering items

### **Use Grid when:**
- Two-dimensional (rows AND columns)
- Page layouts
- Complex designs
- Magazine-style layouts

---

## 📱 Responsive Design

### **Core Principle:**
> Design for mobile first, enhance for larger screens

**Tools:**
- Media queries
- Flexible units (%, rem, vw/vh)
- Flexible layouts (Flexbox/Grid)
- Responsive images

---

## 📐 Media Queries

```css
/* Mobile first: base styles for small screens */
.container {
  padding: 10px;
  font-size: 14px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 20px;
    font-size: 16px;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    padding: 40px;
    font-size: 18px;
  }
}
```

---

## 📱 Common Breakpoints

```css
/* Mobile: 320px - 767px (default) */

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large desktop */
@media (min-width: 1440px) { }

/* Extra large */
@media (min-width: 1920px) { }
```

---

## 🖼️ Responsive Units

```css
/* Relative to parent */
width: 50%;

/* Relative to root font-size */
font-size: 1.5rem;

/* Relative to viewport width */
width: 50vw;

/* Relative to viewport height */
height: 100vh;

/* Minimum and maximum */
width: min(90%, 1200px);
max-width: 100%;
```

---

## 🎬 CSS Animations

### **Two Types:**

1. **Transitions** – Smooth state changes
2. **Animations** – Multi-step sequences

---

## ⚡ Transitions

```css
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: red;
}

/* Multiple properties */
.card {
  transition: all 0.3s ease-in-out;
}

/* Individual properties */
.element {
  transition:
    color 0.2s ease,
    transform 0.3s ease-out,
    opacity 0.4s linear;
}
```

---

## 🎭 Transform Property

```css
.box {
  /* Move */
  transform: translate(50px, 100px);

  /* Rotate */
  transform: rotate(45deg);

  /* Scale */
  transform: scale(1.5);

  /* Skew */
  transform: skew(10deg, 5deg);

  /* Combine multiple */
  transform: translate(50px, 0) rotate(45deg) scale(1.2);
}
```

---

## 🎨 Keyframe Animations

```css
@keyframes slideIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.element {
  animation: slideIn 0.5s ease-out;
}
```

---

## 🔄 Animation Properties

```css
.element {
  animation-name: slideIn;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  /* Shorthand */
  animation: slideIn 1s ease-in-out 0.5s infinite alternate;
}
```

---

## 🎨 CSS Variables (Custom Properties)

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --spacing: 20px;
  --border-radius: 8px;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing);
  border-radius: var(--border-radius);
}

.card {
  background-color: var(--secondary-color);
  margin: var(--spacing);
}
```

---

## 🌓 CSS Variables for Theming

```css
:root {
  --bg-color: white;
  --text-color: black;
}

[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: white;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

**Easy theme switching!**

---

## 🎯 Practical Example: Card Grid

```css
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}
```

---

## 🏗️ Practical Example: Navbar

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--primary-color);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }

  .nav-links {
    flex-direction: column;
    gap: 1rem;
  }
}
```

---

## 💡 Best Practices

1. **Mobile first** – Start with small screens
2. **Use rem** for fonts and spacing
3. **Limit breakpoints** – 2-3 is usually enough
4. **Test on real devices** – Not just browser resize
5. **Use CSS variables** – Easier maintenance
6. **Animate performance** – transform and opacity only

---

## 🚫 Common Mistakes

1. **Too many breakpoints** – Keep it simple
2. **Fixed pixel widths** – Use flexible units
3. **Animating width/height** – Use transform instead
4. **Not testing mobile** – Always check!
5. **Overusing Grid** – Sometimes Flexbox is simpler
6. **Forgetting gap** – Use it instead of margins

---

## 🛠️ DevTools for Responsive

### **Browser DevTools:**

- Toggle device toolbar (Ctrl+Shift+M)
- Test different screen sizes
- See media query breakpoints
- Inspect Grid/Flexbox layouts
- Network throttling

---

## 📝 Today's Project

### **Responsive Dashboard**

Create a dashboard with:
- Flex navbar with logo and links
- Grid layout for cards (3 cols → 2 → 1)
- Hover animations on cards
- Responsive design (mobile, tablet, desktop)
- CSS variables for colors and spacing

---

## 🎯 Challenge Tasks

**Easy:**
- Create a flexbox navigation menu
- Make a 3-column grid that wraps

**Medium:**
- Build a responsive card grid
- Add hover animations to all interactive elements

**Hard:**
- Create a full page layout with header, sidebar, main, footer
- Implement a dark mode toggle with CSS variables

---

## 🔧 Useful Flexbox Patterns

```css
/* Center everything */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Space between with center alignment */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Equal width columns */
.columns > * {
  flex: 1;
}
```

---

## 🔧 Useful Grid Patterns

```css
/* Auto-fit grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

/* Holy grail layout */
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
```

---

## 📚 Resources

- **Flexbox Froggy:** https://flexboxfroggy.com/ (game!)
- **Grid Garden:** https://cssgridgarden.com/ (game!)
- **CSS-Tricks Flexbox Guide:** https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **CSS-Tricks Grid Guide:** https://css-tricks.com/snippets/css/complete-guide-grid/
- **Can I Use:** https://caniuse.com/

---

## 🔄 Review

### **What We Learned:**

- ✅ Flexbox for one-dimensional layouts
- ✅ Grid for two-dimensional layouts
- ✅ Media queries for responsive design
- ✅ Transitions and animations
- ✅ CSS variables for maintainability
- ✅ Modern layout techniques

---

## 🏠 Homework

1. **Complete the dashboard project**
2. **Play Flexbox Froggy** (all levels)
3. **Play Grid Garden** (all levels)
4. **Make your Day 1 & 2 projects responsive**
5. **Experiment with animations** on your cards

**Goal:** Master modern CSS layouts!

---

## 🎉 You're Now a CSS Wizard! 🧙

### **Tomorrow: Day 4 – JavaScript**

We'll make our pages **interactive**!

- Variables and data types
- Functions
- Conditionals and loops
- **Making things happen!**

---

# 🚀 **Keep Building!**

> "Good design is invisible"

**See you tomorrow!**

---
