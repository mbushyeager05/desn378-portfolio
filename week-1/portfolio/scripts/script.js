// Theme Management System

const toggle = document.querySelector('.theme-toggle');
const html = document.documentElement;


function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    // User has made a choice 
    applyTheme(savedTheme);
  } else {
   
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemTheme = prefersDark ? 'dark' : 'light';
    applyTheme(systemTheme);
  }
}

// Apply Theme
function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
}

toggle.addEventListener('click', function() {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});

// Had Claude Help me with the System Theme Change Listener
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

darkModeMediaQuery.addEventListener('change', (e) => {
  const savedTheme = localStorage.getItem('theme');
  

  if (!savedTheme) {
    const newTheme = e.matches ? 'dark' : 'light';
    applyTheme(newTheme);
  }
});

// Initialize on Page Load
initializeTheme();