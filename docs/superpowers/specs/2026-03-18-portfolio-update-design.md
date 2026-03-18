# Design Specification: Portfolio Updates (March 18, 2026)

## Overview
This document outlines the design for three key updates to the portfolio website of Vitchakorn Poonyakanok:
1.  **Theme Toggle Icon:** Replacing text with standard sun and moon icons.
2.  **Publication Contributors:** Adding cleaned contributor names to the second publication.
3.  **Mobile Responsiveness:** Implementing a modern fluid layout for small screens.

## 1. Theme Toggle Enhancement
The current theme toggle button shows "Toggle_Theme()". This will be replaced with Font Awesome icons.
- **Icon Strategy:** 
  - Show `<i class="fa-solid fa-sun"></i>` (Sun) while in **Dark mode** (to switch to Light).
  - Show `<i class="fa-solid fa-moon"></i>` (Moon) while in **Light mode** (to switch to Dark).
- **Functionality:** 
  - Update `toggleTheme()` to change the button's inner HTML.
  - The icon should persist on page load by checking `localStorage`.

## 2. Publication Contributor Updates
The second publication's details section currently lacks a "Contributors" field. This will be added with cleaned names.
- **Publication Title:** "Preliminary investigation and rapid response to methanol intoxication outbreak linked to illegal herbal liquor in Bangkok, August 2024"
- **Contributors List:** Charuttaporn Jitpeera, Watcharapol Rongdech, Kogkawee Raruenroeng, Vitchakorn Poonyakanok, Panita Kumphon, Kawinna Kerdsalung, Rittichai Jaipong, Tatcha Manta, Thanawan Gabbhirom, Somrak Sirikhetkon, Kanyarat Jarudilokkul, Kantakarn Nilsum, Thanach Photphisutthiphong, Nattinee Isarankura, Wichan Bhunyakitikorn.
- **Formatting:** Comma-separated list with a "Contributors:" label in bold.

## 3. Modern Responsive Layout (Mobile)
A modern fluid layout will be implemented for improved mobile experience.
- **Typography:** 
  - Use `clamp()` for `h1` and `h2` font sizes (e.g., `clamp(1.5rem, 5vw, 2.5rem)`).
- **Navigation:**
  - Reduce `tab-bar` padding and font sizes on mobile.
  - Ensure the `tab-bar` is compact for 1-column layout on very small screens.
- **Grid Systems:**
  - Adjust `apps-grid` for better handling of 320px+ screens (e.g., ensuring cards don't overflow).
- **General Styling:**
  - Standardize mobile padding across the container and header for consistency.

## Implementation Plan
1.  **Theme Toggle:** Modify HTML and JS.
2.  **Publications:** Update HTML for the second publication.
3.  **Responsiveness:** Update CSS with media queries and `clamp()` values.
4.  **Verification:** Test responsiveness across various screen sizes.
