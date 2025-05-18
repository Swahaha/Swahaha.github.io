// // Allows for easy switching between different color palettes

// document.addEventListener('DOMContentLoaded', function() {
//     // Create theme switcher element
//     createThemeSwitcher();
    
//     // Initialize theme from localStorage or default
//     initializeTheme();
    
//     // Add event listeners for theme options
//     setupThemeListeners();
// });

// // Create the theme switcher UI
// function createThemeSwitcher() {
//     const themeSwitcher = document.createElement('div');
//     themeSwitcher.className = 'theme-switcher';
    
//     // Create theme options
//     const themeBlue = document.createElement('div');
//     themeBlue.className = 'theme-option theme-blue';
//     themeBlue.setAttribute('data-theme', 'blue');
//     themeBlue.title = 'Blue Theme';
    
//     const themePurple = document.createElement('div');
//     themePurple.className = 'theme-option theme-purple';
//     themePurple.setAttribute('data-theme', 'purple');
//     themePurple.title = 'Purple Theme';
    
//     const themeGreen = document.createElement('div');
//     themeGreen.className = 'theme-option theme-green';
//     themeGreen.setAttribute('data-theme', 'green');
//     themeGreen.title = 'Green Theme';
    
//     // Append options to switcher
//     themeSwitcher.appendChild(themeBlue);
//     themeSwitcher.appendChild(themePurple);
//     themeSwitcher.appendChild(themeGreen);
    
//     // Append switcher to body
//     document.body.appendChild(themeSwitcher);
// }

// // Initialize theme from localStorage or default to blue
// function initializeTheme() {
//     const savedTheme = localStorage.getItem('theme') || 'blue';
//     setTheme(savedTheme);
// }

// // Set up event listeners for theme options
// function setupThemeListeners() {
//     const themeOptions = document.querySelectorAll('.theme-option');
    
//     themeOptions.forEach(option => {
//         option.addEventListener('click', function() {
//             const theme = this.getAttribute('data-theme');
//             setTheme(theme);
//         });
//     });
// }

// // Set the active theme
// function setTheme(theme) {
//     // Remove all theme classes from body
//     document.body.classList.remove('palette-blue', 'palette-purple', 'palette-green');
    
//     // Add the selected theme class
//     document.body.classList.add(`palette-${theme}`);
    
//     // Update active state on theme options
//     const themeOptions = document.querySelectorAll('.theme-option');
//     themeOptions.forEach(option => {
//         if (option.getAttribute('data-theme') === theme) {
//             option.classList.add('active');
//         } else {
//             option.classList.remove('active');
//         }
//     });
    
//     // Save theme preference to localStorage
//     localStorage.setItem('theme', theme);
// }

// // Function to toggle dark/light mode (for future implementation)
// function toggleDarkMode() {
//     const isDarkMode = document.body.classList.contains('dark-mode');
    
//     if (isDarkMode) {
//         document.body.classList.remove('dark-mode');
//         localStorage.setItem('darkMode', 'false');
//     } else {
//         document.body.classList.add('dark-mode');
//         localStorage.setItem('darkMode', 'true');
//     }
// }
