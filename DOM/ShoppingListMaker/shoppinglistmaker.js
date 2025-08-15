// 1. Select the elements
const itemInput = document.getElementById('item-input');
const addButton = document.getElementById('add-btn');
const shoppingList = document.getElementById('shopping-list');

// 2. Add a click event listener to the "Add" button
addButton.addEventListener('click', function() {
    // 3. Get the text from the input box
    const newItemText = itemInput.value;

    // Make sure the input isn't empty
    if (newItemText !== '') {
        // 4. Create a new list item element
        const newListItem = document.createElement('li');

        // 5. Set the text content of the new list item
        newListItem.textContent = newItemText;

        // 6. Add the new list item to the shopping list
        shoppingList.appendChild(newListItem);

        // 7. Bonus: Clear the input box
        itemInput.value = '';
    }
});