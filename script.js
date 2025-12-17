document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function addTask(taskText = null, save = true) {
        const text = taskText !== null ? taskText : taskInput.value.trim();

        if (text === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement("li");
        li.textContent = text;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        removeButton.onclick = function () {
            taskList.removeChild(li);
            tasks = tasks.filter(task => task !== text);
            saveTasks();
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        if (save) {
            tasks.push(text);
            saveTasks();
        }

        taskInput.value = "";
    }

    function loadTasks() {
        tasks.forEach(task => addTask(task, false));
    }

    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    loadTasks();
});
