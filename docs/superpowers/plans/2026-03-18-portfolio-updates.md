# Portfolio Updates Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the portfolio with a new theme toggle icon, cleaned contributor names for the second publication, and a modern fluid layout for mobile responsiveness.

**Architecture:** Single-file update to `index.html`. CSS and JS logic will be updated within the file to maintain the current architecture.

**Tech Stack:** HTML5, CSS3, JavaScript, Font Awesome.

---

### Task 1: Theme Toggle Icon & Logic

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace button text with Font Awesome icon placeholders**
Modify the theme toggle button and the `toggleTheme` function.

```html
<!-- Replace this line in index.html -->
<button class="theme-toggle" id="theme-toggle" onclick="toggleTheme()">Toggle_Theme()</button>
```

- [ ] **Step 2: Update toggleTheme logic to swap icons**
Update the script section to handle icon changes and persist them.

```javascript
function updateToggleIcon(theme) {
    const toggleBtn = document.getElementById('theme-toggle');
    if (theme === 'light') {
        toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    if (newTheme === 'light') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
    }
    updateToggleIcon(newTheme);
}

// Update initialization
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') document.body.setAttribute('data-theme', 'light');
updateToggleIcon(savedTheme);
```

- [ ] **Step 3: Commit theme toggle changes**
```bash
git add index.html
git commit -m "feat: replace theme toggle text with sun/moon icons"
```

### Task 2: Publication Contributors

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Update second publication details**
Add the "Contributors:" field to the second publication's details section.

```html
<!-- Inside the second publication-item's <details> -->
<p class="item-description"><strong>Contributors:</strong> Charuttaporn Jitpeera, Watcharapol Rongdech, Kogkawee Raruenroeng, Vitchakorn Poonyakanok, Panita Kumphon, Kawinna Kerdsalung, Rittichai Jaipong, Tatcha Manta, Thanawan Gabbhirom, Somrak Sirikhetkon, Kanyarat Jarudilokkul, Kantakarn Nilsum, Thanach Photphisutthiphong, Nattinee Isarankura, Wichan Bhunyakitikorn</p>
```

- [ ] **Step 2: Commit publication updates**
```bash
git add index.html
git commit -m "feat: add cleaned contributor names to second publication"
```

### Task 3: Modern Responsive Layout

**Files:**
- Modify: `index.html` (CSS section)

- [ ] **Step 1: Implement fluid typography for headers**
Use `clamp()` for `h1` and `h2` styles.

```css
h1 {
    color: var(--heading);
    font-family: 'JetBrains Mono', monospace;
    font-size: clamp(1.8rem, 8vw, 2.5rem); /* Updated from 2.5rem */
    margin: 0;
}

h2 {
    color: var(--heading);
    border-bottom: 1px solid var(--border);
    padding-bottom: 0.5rem;
    font-family: 'JetBrains Mono', monospace;
    display: flex;
    align-items: center;
    font-size: clamp(1.2rem, 5vw, 1.5rem); /* Fluid font size */
}
```

- [ ] **Step 2: Enhance mobile-only styles in media query**
Update the `@media (max-width: 768px)` section.

```css
@media (max-width: 768px) {
    header {
        padding: 3rem 1.5rem 1rem;
    }
    .container {
        padding: 0 1.25rem 2rem; /* Adjusted for better spacing */
    }
    .tab-btn {
        padding: 8px 10px; /* More compact tabs */
        font-size: 0.8rem;
    }
    .apps-grid {
        grid-template-columns: 1fr; /* Single column on very small screens */
        gap: 1rem;
    }
}
```

- [ ] **Step 3: Add specialized small screen overrides**
Add a media query for very small devices (e.g., < 400px).

```css
@media (max-width: 480px) {
    .tab-bar {
        padding-top: 5px;
    }
    .tab-btn {
        padding: 6px 8px;
        font-size: 0.75rem;
    }
    .card {
        padding: 1rem; /* More compact cards */
    }
}
```

- [ ] **Step 4: Commit mobile responsiveness updates**
```bash
git add index.html
git commit -m "feat: implement modern fluid layout for mobile responsiveness"
```

### Task 4: Final Verification

- [ ] **Step 1: Test theme toggle functionality**
Verify that the icon swaps correctly and persists on reload.

- [ ] **Step 2: Verify publication details**
Check that the contributor names are correctly formatted and visible.

- [ ] **Step 3: Test responsiveness**
Test on various screen widths (Desktop, Tablet, Mobile) using browser dev tools.
- Expected: No horizontal scrollbars (except for tab-bar), readable text, balanced spacing.
