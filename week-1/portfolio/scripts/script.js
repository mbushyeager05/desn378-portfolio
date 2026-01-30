// // Step 1: Toggle between both classes
// const toggle = document.querySelector(".theme-toggle");


// // Toggle the theme state
// toggle.addEventListener("click", function () {
//   const currentTheme = document.documentElement.dataset.theme;

//   let newTheme;
//   if (currentTheme === "dark") {
//     newTheme = "light";
//   } else {
//     newTheme = "dark";
//   }
//   document.documentElement.dataset.theme = newTheme;
  
// });



// Step 1: Load saved theme on page load
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  // If there's a saved theme, use it
  document.documentElement.dataset.theme = savedTheme;
} else {

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const systemTheme = prefersDark ? 'dark' : 'light';
  document.documentElement.dataset.theme = systemTheme;
}

// Step 2: Toggle button functionality
const toggle = document.querySelector('.theme-toggle');

toggle.addEventListener('click', function() {
  const currentTheme = document.documentElement.dataset.theme;
  
  // Determine new theme
  let newTheme;
  if (currentTheme === 'dark') {
    newTheme = 'light';
  } else {
    newTheme = 'dark';
  }
  
  // Apply new theme
  document.documentElement.dataset.theme = newTheme;
  
  // Save to localStorage
  localStorage.setItem('theme', newTheme);
});