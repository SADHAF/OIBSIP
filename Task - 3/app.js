const pendingList = document.getElementById("pending-list");
const completedList = document.getElementById("completed-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  pendingList.innerHTML = "";
  completedList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const li = document.createElement("li");
    li.innerHTML = `<span>${task.title}</span>
                    <span>${task.date}</span>
                    <div>
                      <button class="edit-btn" onclick="editTask(${i})">Edit</button>
                      <button class="delete-btn" onclick="deleteTask(${i})">Delete</button>
                      <button class="complete-btn" onclick="completeTask(${i})">Complete</button>
                    </div>`;
    if (task.completed) {
      li.classList.add("completed");
      completedList.appendChild(li);
    } else {
      pendingList.appendChild(li);
    }
  }
}

renderTasks();

function addItem() {
  const title = document.getElementById("new-item").value;
  if (title !== "") {
    const task = { title, date: new Date().toLocaleString(), completed: false };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
    document.getElementById("new-item").value = "";
  }
}

function editTask(index) {
  const title = prompt("Edit Task:", tasks[index].title);
  if (title !== null && title !== "") {
    tasks[index].title = title;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function completeTask(index) {
  tasks[index].completed = true;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}
