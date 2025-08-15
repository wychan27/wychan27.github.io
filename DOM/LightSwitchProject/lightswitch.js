// 1. Select the elements by their IDs
const lightBulb = document.getElementById('lightBulb');
const switchButton = document.getElementById('switchButton');

// 2. Add a click event listener to the button
switchButton.addEventListener('click', () => {

    // 3. Check the current image source
    if (lightBulb.src.includes('lightbulb-off.png')) {
        // If the light is off, turn it on!
        lightBulb.src = 'lightbulb-on.png';
        switchButton.textContent = 'Turn Off'; // Change the button text
    } else {
        // If the light is on, turn it off!
        lightBulb.src = 'lightbulb-off.png';
        switchButton.textContent = 'Turn On'; // Change the button text
    }
});  