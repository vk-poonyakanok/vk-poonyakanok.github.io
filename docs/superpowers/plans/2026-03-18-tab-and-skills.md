# Tab and Skills Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Separate Certifications from Skills, replace the skills table with a badge-based tech stack, and ensure all tabs are visible on mobile.

**Architecture:** Single-file update to `index.html`. CSS and HTML structure will be updated to support the new tabs and mobile layout.

**Tech Stack:** HTML5, CSS3, JavaScript.

---

### Task 1: Navigation & Mobile Layout Update

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add Certifications to the nav bar**
Update the `<nav class="tab-bar">` section.

```html
<nav class="tab-bar">
    <div class="sliding-underline" id="tab-underline"></div>
    <!-- ... other buttons ... -->
    <button class="tab-btn" onclick="openTab(event, 'skills')">Skills</button>
    <button class="tab-btn" onclick="openTab(event, 'certifications')">Certifications</button>
    <!-- ... other buttons ... -->
</nav>
```

- [ ] **Step 2: Update mobile CSS for tab-bar wrapping**
Update the `@media (max-width: 768px)` section.

```css
@media (max-width: 768px) {
    .tab-bar {
        flex-wrap: wrap; /* Allow tabs to wrap to multiple lines */
        justify-content: center; /* Center tabs when wrapped */
    }
    /* Hide the fading hint since all tabs are now visible */
    .tab-bar-container::after {
        display: none;
    }
}
```

- [ ] **Step 3: Commit navigation updates**
```bash
git add index.html
git commit -m "feat: add certifications tab and implement multi-line wrapping for mobile nav"
```

### Task 2: Separate Certifications Tab

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Create new Certifications tab content**
Move the certifications content from the `skills` div to a new `certifications` div.

```html
<!-- Certifications Tab -->
<div id="certifications" class="tab-content">
    <div class="card">
        <h2>Certifications</h2>
        <!-- Move cert-items and the details block here -->
    </div>
</div>
```

- [ ] **Step 2: Commit tab separation**
```bash
git add index.html
git commit -m "feat: move certifications to its own dedicated tab"
```

### Task 3: Badge-based Tech Stack (Skills Tab)

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace skills table with badges**
Update the `#skills` tab content with the new badge-based layout.

```html
<div id="skills" class="tab-content">
    <div class="card">
        <h2>🛠 Tech Stack</h2>
        
        <h3 class="mono" style="font-size: 1rem; margin-top: 1.5rem;">💻 Core Languages</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <img src="https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python">
            <img src="https://img.shields.io/badge/R-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white" alt="R">
            <img src="https://img.shields.io/badge/SQL-%2300758F.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="SQL">
            <img src="https://img.shields.io/badge/Stata-%231A538A.svg?style=for-the-badge&logo=stata&logoColor=white" alt="Stata">
        </div>

        <h3 class="mono" style="font-size: 1rem; margin-top: 1.5rem;">🤖 Data Science & AI</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <img src="https://img.shields.io/badge/XGBoost-1B1F23?style=for-the-badge&logo=xgboost&logoColor=white" alt="XGBoost">
            <img src="https://img.shields.io/badge/LightGBM-393939?style=for-the-badge&logo=lightgbm&logoColor=white" alt="LightGBM">
            <img src="https://img.shields.io/badge/YOLO-00FFFF?style=for-the-badge&logo=ultralytics&logoColor=black" alt="YOLO">
            <img src="https://img.shields.io/badge/Scikit--Learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-Learn">
            <img src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white" alt="PyTorch">
            <img src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white" alt="TensorFlow">
        </div>

        <h3 class="mono" style="font-size: 1rem; margin-top: 1.5rem;">📊 Data Analysis & Processing</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <img src="https://img.shields.io/badge/NumPy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy">
            <img src="https://img.shields.io/badge/Pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas">
            <img src="https://img.shields.io/badge/OpenCV-%235C3EE8.svg?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV">
        </div>

        <h3 class="mono" style="font-size: 1rem; margin-top: 1.5rem;">🎨 Visualization & Design</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <img src="https://img.shields.io/badge/Tableau-E97627?style=for-the-badge&logo=Tableau&logoColor=white" alt="Tableau">
            <img src="https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=microsoftpowerbi&logoColor=black" alt="Power BI">
            <img src="https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black" alt="Matplotlib">
            <img src="https://img.shields.io/badge/Seaborn-3B5B9A?style=for-the-badge&logo=seaborn&logoColor=white" alt="Seaborn">
            <img src="https://img.shields.io/badge/Adobe%20Photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobephotoshop&logoColor=white" alt="Adobe Photoshop">
            <img src="https://img.shields.io/badge/Adobe%20Lightroom-31A8FF?style=for-the-badge&logo=Adobe%20Lightroom&logoColor=white" alt="Adobe Lightroom">
        </div>

        <h3 class="mono" style="font-size: 1rem; margin-top: 1.5rem;">☁️ Cloud & Infrastructure</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <img src="https://img.shields.io/badge/Google_Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Google Cloud">
            <img src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white" alt="Firebase">
        </div>

        <h3 class="mono" style="font-size: 1rem; margin-top: 1.5rem;">🛠 Environments & Tools</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <img src="https://img.shields.io/badge/Jupyter-%23F37626.svg?style=for-the-badge&logo=Jupyter&logoColor=white" alt="Jupyter">
            <img src="https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white" alt="Anaconda">
        </div>
    </div>
</div>
```

- [ ] **Step 2: Commit tech stack updates**
```bash
git add index.html
git commit -m "feat: replace skills table with badge-based tech stack"
```

### Task 4: Final Verification

- [ ] **Step 1: Test tab navigation**
Verify that "Skills" and "Certifications" are separate and both work.

- [ ] **Step 2: Verify mobile layout**
Test on various screen widths to ensure all tabs wrap and are visible.

- [ ] **Step 3: Check tech stack visuals**
Ensure all badges load correctly and are grouped as intended.
