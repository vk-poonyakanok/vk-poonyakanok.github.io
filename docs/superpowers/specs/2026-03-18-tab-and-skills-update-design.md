# Design Specification: Tab Restructuring and Tech Stack Update (March 18, 2026)

## Overview
This document outlines the design for two major updates to the portfolio website of Vitchakorn Poonyakanok:
1.  **Tab Separation:** Moving Certifications out of the Skills tab into its own dedicated tab.
2.  **Tech Stack Update:** Replacing the current skills table with a modern, badge-based tech stack.
3.  **Mobile Navigation Update:** Ensuring all tabs are visible on mobile by implementing a wrapping layout.

## 1. Tab Separation: Certifications & Skills
Currently, Certifications and Skills are combined in a single tab. These will be split for better organization.
- **New Tab Nav:** A new "Certifications" button will be added to the `tab-bar`.
- **Certifications Content:** All certification items (Biomedical Researchers, Google Cybersecurity, etc.) will be moved to a new `div` with `id="certifications"`.
- **Skills Content:** The existing Skills tab will focus exclusively on the tech stack.

## 2. Tech Stack Update (Skills Tab)
The current Skills table will be replaced with a badge-based layout using Shields.io.
- **Categories:**
  - **Core Languages:** Python, R, SQL, Stata.
  - **Data Science & AI:** XGBoost, LightGBM, YOLO, Scikit-Learn, PyTorch, TensorFlow.
  - **Data Analysis & Processing:** NumPy, Pandas, OpenCV.
  - **Visualization & Design:** Tableau, Power BI, Matplotlib, Seaborn, Adobe Photoshop, Adobe Lightroom.
  - **Cloud & Infrastructure:** Google Cloud, Firebase.
  - **Environments & Tools:** Jupyter, Anaconda.
- **Styling:** Badges will be displayed in groups under their respective headings.

## 3. Mobile Navigation: Multi-line Wrapping
To ensure all 8 tabs are visible on mobile without horizontal scrolling:
- **Mobile CSS Update:** In the `@media (max-width: 768px)` section, `flex-wrap: wrap;` will be added to `.tab-bar`.
- **Spacing:** Adjustments will be made to button margins and padding to ensure a clean, multi-line layout on small screens.

## Technical Implementation
- **File:** `index.html`
- **HTML:** Update the `nav` and `tab-content` sections.
- **CSS:** Update the media queries for `.tab-bar`.
- **JS:** No significant changes needed, as `openTab()` handles dynamic content.

## Implementation Plan
1.  **Tab Separation:** Move Certifications to a new tab and add the nav item.
2.  **Skills Update:** Replace the skills table with the badge-based tech stack.
3.  **Mobile Navigation:** Update CSS to wrap tabs on small screens.
4.  **Verification:** Test tab navigation and mobile responsiveness.
