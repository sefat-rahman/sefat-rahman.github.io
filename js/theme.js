// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  // Get the toggle button
  const themeToggle = document.getElementById('theme-toggle');
  
  // Get the stored theme preference
  const getStoredTheme = () => localStorage.getItem('theme');
  const setStoredTheme = (theme) => localStorage.setItem('theme', theme);
  
  // Set theme based on stored preference or user's system preference
  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };
  
  // Apply theme to document
  const setTheme = (theme) => {
    document.body.classList.add('theme-transition');
    
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    
    themeToggle.classList.add('theme-toggle-rotate');
    
    // Remove transition class after animation completes
    setTimeout(() => {
      document.body.classList.remove('theme-transition');
      themeToggle.classList.remove('theme-toggle-rotate');
    }, 500);
    
    // Update stored preference
    setStoredTheme(theme);
  };
  
  // Initialize theme
  setTheme(getPreferredTheme());
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    setTheme(newTheme);
  });
  
  // Update theme if system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
    if (!getStoredTheme()) {
      setTheme(matches ? 'dark' : 'light');
    }
  });
  
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}); 