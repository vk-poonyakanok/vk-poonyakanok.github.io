# Design Specification: Browser Tab Icon (March 18, 2026)

## Overview
This document outlines the design for the new browser tab icon (favicon) for the portfolio website of Vitchakorn Poonyakanok. The icon will be a custom SVG that reflects the initials of the user and the minimalist, mono-spaced aesthetic of the site.

## 1. SVG Design: Initials-based (V/VP)
The current laptop emoji (💻) will be replaced with a custom SVG icon.
- **Icon Content:** Stylized initials "V" or "VP".
- **Design Strategy:**
  - **Font:** A minimalist, blocky, and mono-spaced style that complements the "JetBrains Mono" font used throughout the site.
  - **Color:** The site's primary accent color (`#2f81f7` from the CSS) or the heading color (`#58a6ff`).
  - **Background:** A square or circular shape (or no background for a cleaner look).
- **Functionality:** 
  - The icon will be implemented as an inline SVG in the `<head>` of `index.html`.
  - This ensures it's always correctly loaded and styled without external dependencies.

## 2. Technical Implementation
- **File:** `index.html`
- **Location:** `<link rel="icon" ...>` tag in the `<head>`.
- **Implementation:** Replace the existing `<link>` tag with a new one that contains the custom SVG path or code.

## Implementation Plan
1.  **Generate SVG Code:** Create a minimalist SVG for the initials "V" or "VP".
2.  **Update HTML:** Replace the old favicon in `index.html` with the new SVG code.
3.  **Verification:** Test that the new icon correctly appears in the browser tab across different browsers.
