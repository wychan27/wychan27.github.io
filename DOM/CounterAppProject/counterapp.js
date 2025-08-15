// 1. Create a variable to hold the number
let count = 0;

// 2. Select the elements
const counterDisplay = document.getElementById('counter-display');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');

// 3. Add a click event listener to the "Increase" button
increaseBtn.addEventListener('click', function() {
    count++; // Add 1 to the 'count' variable
    counterDisplay.textContent = count; // Update the text on the page
});

// 4. Add a click event listener to the "Decrease" button
decreaseBtn.addEventListener('click', function() {
    count--; // Subtract 1 from the 'count' variable
    counterDisplay.textContent = count; // Update the text on the page
});