document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the task input
        // ["classList.add"]

        // Check if taskText is empty
        if (taskText === "") {
            alert("Please enter a task."); // Prompt user to enter a task
            return; // Exit the function
        }

        // Task Creation
        const listItem = document.createElement('li'); // Create a new <li> element
        listItem.textContent = taskText; // Set its text content

        // Create the Remove Button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Assign class to the button

        // Assign onclick event to remove the task
        removeButton.onclick = () => {
            taskList.removeChild(listItem); // Remove the list item from taskList
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);
        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Attach Event Listeners
    addButton.addEventListener('click', addTask); // Call addTask when button clicked
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask on 'Enter' key press
        }
    });
});