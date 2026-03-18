# Design Specification: Footer and Tab Bar Enhancements (March 18, 2026)

## Overview
This document outlines the design for two enhancements to the portfolio website of Vitchakorn Poonyakanok:
1.  **Automated Footer Date:** Dynamically displaying the last modified date of the file.
2.  **Advanced Sliding Tab Bar:** Improving the mobile user experience with sliding animations and hints.

## 1. Automated Footer Date
The footer will be updated to show the date the file was last updated, providing a "versioning" feel.
- **Content:** "Last Updated: [MM/DD/YYYY]"
- **Implementation:** 
  - Use `document.lastModified` in the initialization script to dynamically generate the date string.
  - Format the date for readability (e.g., using `Intl.DateTimeFormat` or simple string manipulation).
- **Styling:** Small font size, consistent with the current footer's opacity (0.6) and mono font.

## 2. Advanced Sliding Tab Bar (Mobile)
The tab bar will be enhanced for a smoother, more intuitive mobile experience.
- **Sliding Underline:** 
  - A 2px high underline (`--tab-active` color) that animates between tabs.
  - **Implementation:** A new `div` with `position: absolute` and `transition`.
- **Edge Fading Hint:** 
  - A subtle CSS gradient on the right side of the tab bar that indicates more tabs are available to scroll.
  - **Implementation:** Using a `::after` pseudo-element on the `tab-bar` with a `linear-gradient`.
- **Auto-Center Scroll:** 
  - The tab bar will automatically scroll to keep the active tab centered in the viewport.
  - **Implementation:** Update the `openTab()` function to calculate the scroll position and use `scrollTo({ behavior: 'smooth' })`.

## Technical Implementation
- **File:** `index.html`
- **CSS:** Add styles for the `.sliding-underline` and the `::after` fading effect on `.tab-bar`.
- **JS:** Update the `openTab()` function and add the date initialization logic.

## Implementation Plan
1.  **Footer Date:** Update the HTML and add the JS initialization.
2.  **Tab Bar CSS:** Add styles for the sliding underline and edge fading hint.
3.  **Tab Bar JS:** Update `openTab()` to handle underline movement and auto-centering.
4.  **Verification:** Test the date display and tab bar animations across devices.
