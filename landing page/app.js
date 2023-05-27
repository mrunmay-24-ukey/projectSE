const toggleSwitch = document.querySelector('#dark-mode-toggle');
const currentTheme = localStorage.getItem('theme');
const heading1 = document.querySelector('.hero-section-heading');

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
 
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    
  }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
} else {
  document.documentElement.setAttribute('data-theme', 'light');
}