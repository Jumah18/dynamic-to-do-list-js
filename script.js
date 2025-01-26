document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize tasks array
    let tasks = [];

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks'); // Retrieve tasks from Local Storage
        if (storedTasks) {
            tasks = JSON.parse(storedTasks); // Parse JSON to array
            tasks.forEach(task => {
                addTaskToDOM(task); // Populate the task list
            });
        }
    }

    // Function to create a task item in the DOM
    function addTaskToDOM(taskText) {
        const listItem = document.createElement('li'); // Create a new <li> element
        listItem.textContent = taskText; // Set its text content

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Assign class to the button

        // Assign onclick event to remove the task
        removeButton.onclick = () => {
            removeTask(taskText); // Call the remove task function with the task text
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);
        // Append the list item to the task list
        taskList.appendChild(listItem);
    }

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the task input

        // Check if taskText is empty
        if (taskText === "") {
            alert("Please enter a task."); // Prompt user to enter a task
            return; // Exit the function
        }

        // Add task to the tasks array and Local Storage
        tasks.push(taskText); // Add new task to the tasks array
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks to Local Storage

        addTaskToDOM(taskText); // Add the task to the DOM
        taskInput.value = ''; // Clear the input field
    }

    // Function to remove a task
    function removeTask(taskText) {
        tasks = tasks.filter(task => task !== taskText); // Remove the task from the tasks array
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Update Local Storage
        loadTaskList(); // Refresh the task list in the DOM
    }

    // Function to load the task list fresh from the array into the DOM
    function loadTaskList() {
        taskList.innerHTML = ''; // Clear the existing list in the DOM
        tasks.forEach(task => {
            addTaskToDOM(task); // Re-add tasks from the tasks array to the DOM
        });
    }

    // Attach Event Listeners
    addButton.addEventListener('click', addTask); // Call addTask when button is clicked
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask on 'Enter' key press
        }
    });

    loadTasks(); // Load tasks from Local Storage on page load
});


// document.addEventListener('DOMContentLoaded', () => {
//     // Select DOM Elements
//     const addButton = document.getElementById('add-task-btn');
//     const taskInput = document.getElementById('task-input');
//     const taskList = document.getElementById('task-list');

//     // Create the addTask Function
//     function addTask() {
//         const taskText = taskInput.value.trim(); // Get and trim the task input
//         // ["classList.add"]

//         // Check if taskText is empty
//         if (taskText === "") {
//             alert("Please enter a task."); // Prompt user to enter a task
//             return; // Exit the function
//         }

//         // Task Creation
//         const listItem = document.createElement('li'); // Create a new <li> element
//         listItem.textContent = taskText; // Set its text content

//         // Create the Remove Button
//         const removeButton = document.createElement('button');
//         removeButton.textContent = "Remove"; // Set button text
//         removeButton.className = 'remove-btn'; // Assign class to the button

//         // Assign onclick event to remove the task
//         removeButton.onclick = () => {
//             taskList.removeChild(listItem); // Remove the list item from taskList
//         };

//         // Append the remove button to the list item
//         listItem.appendChild(removeButton);
//         // Append the list item to the task list
//         taskList.appendChild(listItem);

//         // Clear the input field
//         taskInput.value = '';
//     }

//     // Attach Event Listeners
//     addButton.addEventListener('click', addTask); // Call addTask when button clicked
//     taskInput.addEventListener('keypress', (event) => {
//         if (event.key === 'Enter') {
//             addTask(); // Call addTask on 'Enter' key press
//         }
//     });

    
    
// });