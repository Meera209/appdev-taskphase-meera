const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");
const counter = document.querySelector("#counter");

function updateCounter() {
    const tasks = taskList.querySelectorAll("li");
    const completedTasks = taskList.querySelectorAll(".completed");

    const remaining = tasks.length - completedTasks.length;

    counter.textContent = remaining + " tasks left";
}

function addTask() {
    const taskName = taskInput.value.trim();

    if (taskName === "") {
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = taskName;
    span.classList.add("task-text");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    checkbox.addEventListener("change", function() {
        li.classList.toggle("completed");
        updateCounter();
    });

    deleteButton.addEventListener("click", function() {
        li.remove();
        updateCounter();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";

    updateCounter();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
