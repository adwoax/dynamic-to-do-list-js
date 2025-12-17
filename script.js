// Ensure the script runs after the HTML document has fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // Select required DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    // Retrieve and trim the task input value
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Assign click event to remove the task
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
    };

    // Append remove button to list item
    listItem.appendChild(removeButton);

    // Append list item to task list
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = "";
  }

  // Add event listener to Add Task button
  addButton.addEventListener("click", addTask);

  // Add event listener to input field for Enter key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

});
