# Footer and Tab Bar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement an automated footer date and an enhanced sliding tab bar for mobile.

**Architecture:** Single-file update to `index.html`. CSS and JS logic will be updated within the file to maintain the current architecture.

**Tech Stack:** HTML5, CSS3, JavaScript.

---

### Task 1: Automated Footer Date

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Update footer HTML**
Add an ID to the footer paragraph to target it with JS.

```html
<footer>
    <p id="footer-text">Vitchakorn Poonyakanok, MD | Travel Medicine & DigiHealth</p>
</footer>
```

- [ ] **Step 2: Add JS initialization for the date**
Update the script section to calculate and display the last modified date.

```javascript
function updateFooterDate() {
    const footerText = document.getElementById('footer-text');
    const lastModified = new Date(document.lastModified);
    const formattedDate = lastModified.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    footerText.innerHTML += `<br><span style="font-size: 0.75rem; opacity: 0.8;">Last Updated: ${formattedDate}</span>`;
}

// Add to initialization
updateFooterDate();
```

- [ ] **Step 3: Commit footer updates**
```bash
git add index.html
git commit -m "feat: add automated last updated date to footer"
```

### Task 2: Advanced Sliding Tab Bar CSS

**Files:**
- Modify: `index.html` (CSS section)

- [ ] **Step 1: Add sliding underline styles**
Add styles for the new `.sliding-underline` element.

```css
.tab-bar {
    /* ... existing styles ... */
    position: sticky;
    top: 0;
    background-color: var(--bg);
    z-index: 100;
    padding-top: 10px;
    -webkit-overflow-scrolling: touch;
    border-bottom: none; /* Removed fixed border to use underline container */
}

/* Container for the underline to live behind the tabs but above the border */
.tab-bar::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--border);
    z-index: 1;
}

.sliding-underline {
    position: absolute;
    bottom: 0;
    height: 2px;
    background: var(--tab-active);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 2;
}
```

- [ ] **Step 2: Add edge fading hint**
Add a gradient hint to the tab bar container.

```css
.tab-bar-container {
    position: relative;
    max-width: 100%;
    overflow: hidden;
}

.tab-bar-container::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 40px;
    background: linear-gradient(to right, transparent, var(--bg));
    pointer-events: none;
    z-index: 101;
    opacity: 0;
    transition: opacity 0.3s ease;
}

/* Show hint only on mobile/small screens when scrolling is likely */
@media (max-width: 768px) {
    .tab-bar-container::after {
        opacity: 1;
    }
}
```

- [ ] **Step 3: Commit CSS updates**
```bash
git add index.html
git commit -m "style: add sliding underline and edge fading hint to tab bar"
```

### Task 3: Tab Bar JavaScript Enhancements

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add sliding underline to HTML**
Wrap the `nav` and add the underline div.

```html
<div class="tab-bar-container">
    <nav class="tab-bar">
        <div class="sliding-underline" id="tab-underline"></div>
        <!-- buttons ... -->
    </nav>
</div>
```

- [ ] **Step 2: Update openTab to handle underline and auto-center**
Modify the existing `openTab` function.

```javascript
function updateUnderline() {
    const activeBtn = document.querySelector('.tab-btn.active');
    const underline = document.getElementById('tab-underline');
    if (activeBtn && underline) {
        underline.style.width = activeBtn.offsetWidth + 'px';
        underline.style.left = activeBtn.offsetLeft + 'px';
    }
}

function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
    
    // 1. Update sliding underline
    updateUnderline();

    // 2. Auto-center the active tab in the scroll view
    const tabBar = document.querySelector('.tab-bar');
    const activeBtn = evt.currentTarget;
    const scrollLeft = activeBtn.offsetLeft - (tabBar.offsetWidth / 2) + (activeBtn.offsetWidth / 2);
    tabBar.scrollTo({ left: scrollLeft, behavior: 'smooth' });

    // Scroll to top of container when switching tabs on mobile
    if (window.innerWidth < 768) {
        window.scrollTo({ top: tabBar.parentElement.offsetTop - 10, behavior: 'smooth' });
    }
}

// Update initialization to set initial underline position
window.addEventListener('resize', updateUnderline);
updateUnderline();
```

- [ ] **Step 3: Commit JS updates**
```bash
git add index.html
git commit -m "feat: implement sliding underline and auto-center scroll for tab bar"
```

### Task 4: Final Verification

- [ ] **Step 1: Verify footer date**
Check that "Last Updated: [Date]" appears in the footer.

- [ ] **Step 2: Test tab bar on mobile**
Use browser dev tools to simulate mobile devices.
- Verify sliding underline animation.
- Verify edge fading hint.
- Verify auto-center scroll when clicking tabs.
