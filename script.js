/* eslint-disable no-undef */
const toggleSwitch = document.querySelector('input[type=checkbox]');

// Switch Theme Dynamically
const switchTheme = (event) => {
    console.log(event.target.checked);
};

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
