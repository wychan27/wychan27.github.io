// 1. Select the elements
const redButton = document.getElementById('red-btn');
const blueButton = document.getElementById('blue-btn');
const greenButton = document.getElementById('green-btn');

const resetButton = document.getElementById('reset-btn');

// 2. Add event listeners and change the background color
redButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});

blueButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
});

greenButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
}); 

resetButton.addEventListener('click', function() {
  document.body.style.backgroundColor = 'white';
});