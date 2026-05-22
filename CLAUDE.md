# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Rest and Renew Collective** is a membership-based wellness community landing page — a static single-page site with no build step required.

## Key Technologies

- HTML5/CSS3: semantic HTML with responsive CSS Grid layout
- Vanilla JavaScript: Intersection Observer API for scroll-triggered fade-in animations
- Web Fonts: Google Fonts (Cormorant, Cormorant SC, EB Garamond) loaded via CDN

## Viewing Locally

Open `index.html` directly in any browser — no server or build process needed.

## Architecture

Single page with six sections in order: Hero, About, Membership, Blog, Testimonials.

**Color system** — CSS variables defined in `:root`:
- `--beige`: #d4c9b2 (background)
- `--brown-dark`: #5c2d1e (headings, accents)
- `--brown-mid`: #8b7355 (secondary text)

**Layout** — CSS Grid throughout; membership cards use a 3-column grid that collapses to 1 column below 900px.

**Animations** — `js/main.js` adds a `.fade-in` class to every section, then uses `IntersectionObserver` to toggle a `.visible` class that triggers a CSS opacity/transform transition (0.6s ease) as sections scroll into view.

**CTAs** — all buttons and signup links point to an external Google Form URL.
