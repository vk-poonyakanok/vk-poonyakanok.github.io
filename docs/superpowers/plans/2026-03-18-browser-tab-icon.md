# Browser Tab Icon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current laptop emoji favicon with a custom SVG icon featuring the initials "VP".

**Architecture:** Update the `<link rel="icon">` tag in `index.html` with an inline SVG.

**Tech Stack:** HTML5, SVG.

---

### Task 1: Generate and Apply Custom SVG Icon

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace existing favicon with new VP SVG**
Update the `<link rel="icon" ...>` tag in the `<head>` of `index.html`.

```html
<!-- Replace the existing line with this -->
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%232f81f7%22/><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-family=%22'JetBrains Mono', monospace%22 font-size=%2260%22 font-weight=%22bold%22 fill=%22white%22>VP</text></svg>">
```

- [ ] **Step 2: Commit icon change**
```bash
git add index.html
git commit -m "feat: replace laptop emoji favicon with custom VP initials SVG"
```

### Task 2: Final Verification

- [ ] **Step 1: Verify icon appearance**
Check the `index.html` file to ensure the SVG code is correctly placed and has no syntax errors.
- Expected: `<link rel="icon" href="data:image/svg+xml,...">` is correctly formatted.
