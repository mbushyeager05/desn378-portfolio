// Theme Management System

const toggle = document.querySelector('.theme-toggle');
const html = document.documentElement;


// Resolve OS preference to a theme string.
function getSystemTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

// Read saved preference (light/dark) or fall back to system.
function getSavedThemePreference() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme && savedTheme !== 'system') {
    return savedTheme;
  }

  return 'system';
}

// Initialize the theme on load using stored preference or system.
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme && savedTheme !== 'system') {
    // User has made a choice
    applyTheme(savedTheme);
    return;
  }

  const systemTheme = getSystemTheme();
  applyTheme(systemTheme);
}

// Apply Theme
function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
}
// Persist selection and update both DOM and button states.
function setThemePreference(theme) {
  if (theme === 'system') {
    localStorage.removeItem('theme');
    applyTheme(getSystemTheme());
    updateActiveThemeButtons('system');
    return;
  }

  applyTheme(theme);
  localStorage.setItem('theme', theme);
  updateActiveThemeButtons(theme);
}

// Highlight the active option in the dropdown.
function updateActiveThemeButtons(preference) {
  if (!themeOptions.length) {
    return;
  }

  themeOptions.forEach((button) => {
    const buttonTheme = button.getAttribute('data-theme');
    const isActive = buttonTheme === preference;
    button.classList.toggle('is-active', isActive);
  });
}

if (toggle) {
  toggle.addEventListener('click', function() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    setThemePreference(newTheme);
  });
}

// Sync with OS changes when no explicit preference is set.
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

darkModeMediaQuery.addEventListener('change', (e) => {
  const savedTheme = localStorage.getItem('theme');

  if (!savedTheme || savedTheme === 'system') {
    const newTheme = e.matches ? 'dark' : 'light';
    applyTheme(newTheme);
  }
});

// Dropdown toggle and option handlers.
const themeButton = document.getElementById('theme_button');
const dropdown = document.getElementById('color-theme-drop-down');
const themeOptions = document.querySelectorAll('.theme_options');

if (themeButton && dropdown) {
  themeButton.addEventListener('click', function() {
    dropdown.classList.toggle('clicked');
    themeButton.classList.toggle('clicked');
  });
}

themeOptions.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedTheme = button.getAttribute('data-theme');

    if (selectedTheme) {
      setThemePreference(selectedTheme);
    }
  });
});

// Initialize on Page Load
initializeTheme();
updateActiveThemeButtons(getSavedThemePreference());
