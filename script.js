const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority");
const taskList = document.querySelector("#task-list");

const tasks = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskName = taskInput.value.trim();
    const taskPriority = priorityInput.value;

    if (taskName === "") {
        return;
    }

    const task = {
        name: taskName,
        priority: taskPriority,
        completed: false
    };

    tasks.push(task);

    displayTasks();

    taskInput.value = "";
});

function displayTasks() {
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.classList.add(task.priority);

        const taskText = document.createElement("span");
        taskText.textContent = task.name + " - " + task.priority;

        taskElement.appendChild(taskText);
        taskList.appendChild(taskElement);
    }
}