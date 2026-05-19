# Custom Font Setup Demo

A comprehensive guide and demo for setting up custom fonts in web projects using `@font-face`.

---

## What You'll Learn

- How to use `@font-face` to add custom fonts
- Font file formats and when to use them
- Setting up font families with multiple weights
- Best practices for web fonts
- Real-world implementation examples

---

## Quick Start

### Using VS Code Live Server (Recommended)

1. **Install Live Server extension** in VS Code (by Ritwick Dey)
2. **Right-click** on `index.html` in VS Code
3. **Select** "Open with Live Server"
4. The page opens with auto-reload on save!

### Alternative Methods

**Option 1: Open directly**
```bash
open index.html
```

**Option 2: Python server**
```bash
python3 -m http.server
```

### What's Included

- Complete visual guide with code examples
- 3 Dhivehi fonts ready to use (Dhivehi Web, MV Utheemu, AK Liyan)
- Live examples with actual Dhivehi text
- Bootstrap Icons for clean UI

---

## Project Structure

```
fontDemo/
├── index.html              # Interactive demo and guide
├── fonts/
│   ├── fontsetup.css      # Font declarations using @font-face
│   ├── Dhivehi.ttf        # Dhivehi font
│   ├── mvutheemuREGULAR.ttf   # MV Utheemu Regular
│   ├── mvutheemuBOLD.ttf      # MV Utheemu Bold
│   ├── AK Liyan.ttf       # AK Liyan Regular
│   └── AK Liyan Bold.ttf  # AK Liyan Bold
└── README.md              # This file
```

---

## How to Add Your Own Fonts

### Step 1: Add Font Files
Place your font files in the `fonts/` folder:
```
fonts/
├── fontsetup.css
├── MyFont-Regular.ttf
├── MyFont-Bold.ttf
└── MyFont-Light.ttf
```

### Step 2: Declare Fonts in fontsetup.css

```css
/* Regular weight */
@font-face {
  font-family: 'My Custom Font';
  src: url('MyFont-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

/* Bold weight */
@font-face {
  font-family: 'My Custom Font';
  src: url('MyFont-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

/* Light weight */
@font-face {
  font-family: 'My Custom Font';
  src: url('MyFont-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
}
```

### Step 3: Link the CSS in Your HTML

```html
<link rel="stylesheet" href="fonts/fontsetup.css">
```

### Step 4: Use the Font

```css
h1 {
  font-family: 'My Custom Font', Arial, sans-serif;
  font-weight: 700; /* Uses the bold variant */
}

p {
  font-family: 'My Custom Font', Arial, sans-serif;
  font-weight: 400; /* Uses the regular variant */
}
```

---

## Font File Formats

| Extension | Format Name | CSS Format Value | Best For |
|-----------|-------------|------------------|----------|
| `.ttf` | TrueType | `format('truetype')` | General use |
| `.otf` | OpenType | `format('opentype')` | General use |
| `.woff` | WOFF | `format('woff')` | Web (smaller files) |
| `.woff2` | WOFF2 | `format('woff2')` | Web (smallest files) - Recommended |

**Recommendation:** Use WOFF2 when available for best performance.

---

## Font Weight Reference

| Name | Value | Common Use |
|------|-------|------------|
| Thin | 100 | Very light headings |
| Extra Light | 200 | Light headings |
| Light | 300 | Subtle text |
| Regular | 400 | Body text (default) |
| Medium | 500 | Emphasis |
| Semi Bold | 600 | Subheadings |
| Bold | 700 | Headings, strong emphasis |
| Extra Bold | 800 | Heavy headings |
| Black | 900 | Very heavy headings |

---

## Best Practices

1. **Use meaningful names:**
   ```css
   font-family: 'Roboto Web';  /* Good */
   font-family: 'Font1';        /* Bad */
   ```

2. **Always provide fallbacks:**
   ```css
   font-family: 'My Font', Arial, sans-serif;
   ```

3. **Group font weights under one family:**
   ```css
   /* Same font-family, different weights */
   @font-face {
     font-family: 'My Font';
     src: url('MyFont-Regular.ttf');
     font-weight: 400;
   }

   @font-face {
     font-family: 'My Font';
     src: url('MyFont-Bold.ttf');
     font-weight: 700;
   }
   ```

4. **Check font licensing:**
   Make sure you have the right to use fonts on your website.

5. **Optimize for performance:**
   - Use WOFF2 format when possible
   - Only include font weights you actually use
   - Consider using `font-display: swap;` for better loading

---

## Dhivehi Fonts Included

This demo includes 3 Dhivehi fonts ready to use.

### Dhivehi Pangram for Font Testing

Just like English uses "The quick brown fox jumps over the lazy dog", Dhivehi uses:

**ސިލުޖަހަންޏާ ވާނި މީހަކު ދާށޭ**

This phrase is used throughout the demo to test the fonts as it contains many Thaana letters, making it perfect for showcasing font coverage and rendering.

### Available Fonts

### 1. Dhivehi Web
```css
font-family: 'Dhivehi Web', sans-serif;
```
Basic Dhivehi font, single weight.

### 2. MV Utheemu
```css
font-family: 'MV Utheemu', sans-serif;
font-weight: 400; /* Regular */
font-weight: 700; /* Bold */
```
Popular Dhivehi font with Regular and Bold weights.

### 3. AK Liyan
```css
font-family: 'AK Liyan', sans-serif;
font-weight: 400; /* Regular */
font-weight: 700; /* Bold */
```
Modern Dhivehi font with Regular and Bold weights.

### Using Dhivehi Fonts

**CSS:**
```css
.dhivehi-text {
  font-family: 'MV Utheemu', sans-serif;
  direction: rtl;        /* Right-to-left text */
  text-align: right;     /* Align text to the right */
}
```

**HTML:**
```html
<p class="dhivehi-text">
  ސިލުޖަހަންޏާ ވާނި މީހަކު ދާށޭ
</p>
```

**Important:** Always use `direction: rtl;` and `text-align: right;` for Dhivehi/Arabic text.

---

## Real World Example

Check out the **certificateGen** project in this repository:
```
projects/certificateGen/fonts/fontsetup.css
```

It demonstrates:
- Multiple font families (AK Veli, Dhivehi, DM Mono, etc.)
- Different weights and styles
- Dhivehi/Arabic font support
- Professional font organization

---

## Resources

- [MDN @font-face Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)
- [Google Fonts](https://fonts.google.com/) - Free fonts for web use
- [Font Squirrel](https://www.fontsquirrel.com/) - Free fonts + webfont generator
- [Can I Use - WOFF2](https://caniuse.com/woff2) - Browser support for font formats

---

## Notes

- The `fontsetup.css` file includes detailed comments and examples
- All examples in the file are commented out by default
- Uncomment and modify the examples to use your own fonts
- The demo page (`index.html`) works without any fonts added

---

## Tips

1. **Font file naming convention:**
   ```
   FontName-Regular.ttf
   FontName-Bold.ttf
   FontName-Light.ttf
   FontName-Italic.ttf
   FontName-BoldItalic.ttf
   ```

2. **Testing fonts:**
   - Test in multiple browsers (Chrome, Firefox, Safari)
   - Check on different operating systems
   - Verify fallback fonts work correctly

3. **Performance:**
   - Limit the number of font weights you load
   - Use `font-display: swap;` to prevent invisible text during loading
   - Consider subsetting fonts for specific character sets

---

**Made by Sumeyku Academy**
Part of the **Code the Web** curriculum
