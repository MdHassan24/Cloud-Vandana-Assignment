// DOM elements
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item for the task
    const li = document.createElement('li');
    li.classList.add('task-item');

    // Add task text to the list item
    li.textContent = taskText;

    // Create and append a remove button for the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('remove-btn');
    removeBtn.onclick = function () {
        li.remove(); // Remove the task when the button is clicked
    };

    // Append the remove button to the list item
    li.appendChild(removeBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Allow pressing "Enter" to add a task as well
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
