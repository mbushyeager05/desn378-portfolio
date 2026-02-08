# Michael Bushyeager — Web Design Portfolio

**DESN368: Code + Design 1 | Fall 2025**  
Eastern Washington University  
Instructor: Travis Masingale

---

## About This Repository

This repository documents my journey through DESN368, where I learned to build for the web with HTML and CSS—understanding how the web actually works at the source level.

- **[View Live Portfolio] https://mbushyeager05.github.io/DESN368-code-design-workspace**
- **[View Learning Log](https://mbushyeager05.github.io/DESN368-code-design-workspace/learning-log.html)** — Weekly progress & exercises

---

## Design Direction

For my portfolio, I pursued a differnt way of exploring with CSS and Styles. I wanted it to have a clean, clear, bold, colorful, and a modern aesthetic. These are things that I wanted my Portfolio look and feel like when finsihed designing and coding it.

| Element | Choice |
|---------|--------|
| Header Font | Fredoka |
| Body Font | Inter|
| Primary Color | #222823 |
| Accent Color | #3498DB |
| Background | #F4F7F5 |

**[View Figma File] https://www.figma.com/design/9lAmkjas7p5fMfrdo0anei/desn368-moods-vibe-Bushyeager-f25?node-id=0-1&t=P8Hx8w7QSs5fOjN4-1**

---

## Featured Projects

| Project | Description | Live Site | Process |
|---------|-------------|-----------|---------|
| The Recipe | A basic HTML layout and basic CSS styles for a reipe of Zuchinni Bread. | [View →]https://mbushyeager05.github.io/DESN368-code-design-workspace/week-2/Recipe/recipe.html | [Figma] No link |
| Tribute Site | A tribue site suing HTMl and CSS. Plus, also Flexbox, for a tribute page/site for Tim Cook.| [View →]https://mbushyeager05.github.io/DESN368-code-design-workspace/week-4/project-1-tribute.html | [Figma] https://www.figma.com/design/WJpAHC5Z9uSkvoC11hd50b/Tibute-Site-Tim-Cook--MB?node-id=0-1&p=f&t=mNBkRBwhf2dXH81S-0 |
| Field Guide | A Field Guide using HTML and CSS. That goes over he game Cities Skylines. Using a two column layout and a side navigation bar. Also includes a reflection page and a link to my portfolio. | [View →] https://mbushyeager05.github.io/DESN368-code-design-workspace/week-6/Interactive%20Field%20Guide.html| [Figma] https://www.figma.com/design/ntNWFMIojTq71yArpCV6ZX/Interactive-Field-Guide-MB?node-id=0-1&t=vaWq5oq5xlSSyuXR-1 |
| Product Landing Page | A product Landing Page for Lego using HTMl and CSS to create a whole new lok for the Lego Prodct Lego Page. Used Grid, Flexbox and CSS animations. Plus card grids for the Lego Landing Product Page. | [View →] https://mbushyeager05.github.io/DESN368-code-design-workspace/week-10/product-landing-page-lego.html | [Figma] https://www.figma.com/design/wwbkc8W06HrM4rDsNr7yWn/ Product-Landing-Page-Bushyeager-Michael?node-id=0-1&t=D0EwnL72iuqhpcKg-1|

---

## Technical Skills Demonstrated

- Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- CSS Layout (Flexbox / Grid)
- Responsive Design with `@media` queries
- CSS Custom Properties (variables)
- CSS Transitions for interaction
- Version Control with Git & GitHub

---

## Archive

- **[Course Log](./archive/course-log.md)** — Detailed weekly documentation
- **[Learning Log](./learning-log.html)** — Index of all exercises and projects

---

## Credits & Citations

### Assets
- Lego.com
- Wikipidea.com
- Claude.Ai
- Open.Ai

### Tutorials & Resources
- My notes are where my resources.

### AI Assistance
- Used Ai fror anything that I was stuck on or needed help with.

---

## Reflection

[→ Read Full Reflection on Portfolio Site](https://mbushyeager05.github.io/DESN368-code-design-workspace/reflection.html)

---


## New Edition of Portfolio

Updated on Febuary 4th 2026

Above is the Old README.md. That was trasnfered over from another GitHUb Reposiory. Below is the what has been done and added to the exsiting porfolio. 

# Signal & State - Portfolio Theme System

**Live Site:** [https://mbushyeager05.github.io/desn378-portfolio/week-1/portfolio/index.html]

## Token System

This project uses CSS custom properties (variables) organized differnt categories:

### Colors
- **color-background:** var(--neutral-gray-100); - Background colors
- **color-text:** var(--neutral-gray-900);  - Typography colors
- **color-accent:** var(--accent-blue-500); - Interactive elements
- **color-secondary:** var(--neutral-gray-400); - Interactive elements
- **color-error:** var(--error-red-500); - Errors
- **border-default:** rgba(255, 255, 255, 0.7); - Dividers and outlines


### Typography

- **font-heading:** var(--fonts-headings), sans-serif; -Heading
- **font-body:** var(--fonts-body), sans-serif;  -Body
- **font-script:** var(--fonts-script);  -Script


### Spacing
- **xs:** 4;
- **s:** 8;
- **m:** 16;
- **l:** 20;
- **xl:** 32;
- **xxl:** 48;
- **3xl:** 64;
- **4xl:** 96;

## Design Decisions

### Dark Mode Approach
Rather than simply inverting colors, I adjusted accent colors for better contrast on dark backgrounds. The accent blue is lighter in dark mode to maintain readability.

### Theme Toggle UI
The Theme Toggle has three differnt option to be able to set whihc preference you like. Those include Light, Dark, and OS System. Whne you hover over the button, the menu open to show these options. The buttomn goes along with the theme of glass look. 

## Resources Used

 - **Claude Sonnet 4.5**

<sub>© 2025 Michael Bushyeager. Built for DESN368 at Eastern Washington University.</sub>


## Design of Theme Toggle 


## Anatomy check

- What does viewBox="0 0 24 24" control?
The viewBox defines the coordinate system and aspect ratio of the SVG canvas. The four numbers are the min-x, min-y, height, and width. This means that viewBox="0 0 24 24" is 24 height and 24 width.

- Why is currentColor more flexible than hard coded colors?
Why curreentColor is more flexible than hard coded colors is because you can hhange icon colors with CSS without editing SVG code.

- If you used path, what does the d attribute describe?

The d attribute contains drawing commands that define the shape that you are wanting draw/design.


## Reflection 


## Icon design
Why does your System icon look the way it does? What idea is it communicating?

Why my System Icon look that is becuase I wnated to experiment with SVG and make them feel fun. I don't really have a theme for my portfolio, so I wanted to see what I could try and make in SVG. I think it was fun to figure out differnt things to created with SVGs. I wanted to have three light bulbs on ethat was full yellow, one that was dark, and then one that was half and half. I saw the requirments and then wanted to experiment with SVGs. I had Cluade Sonnet 4.5 help with issues that occured while building the SVGs. I dead that is communicating was the lightbulb is meant to bright for light mode, the candle is supposed to be dim for dark mode, and then for a toggle switch for OS System mode. 

## System logic
Explain how your code handles System differently from Light and Dark.

System mode operates differently from Light and Dark modes because it chnaged theme control to the user's operating system. When a user selects Light or Dark mode, the application applies a fixed theme that remains constant regardless of external factors. Even when you referesh the page, it stays on what is selected. h Light and Dark modes are tge user choices that is really persistent until manually changed, while System mode creates a the  relationship between the application and the operating system. This is how how my code handles System  differently from Light and Dark.


## Unexpected learning
One thing that surprised you about SVGs or dropdown behavior.

I think one thing that suprised me about SVGs or dropdown behavior is how overhwleming it can be to look at SVG design. I think the path SVG is struggled the most with. The dropdown was pretty fun to create and there was no suprises. I think there was lots of suprises that happend with SVGs. This is what suprised me about SVGs or dropdown behavior.