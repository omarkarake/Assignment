const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const sortAscButton = document.getElementById("sort-asc");
const sortDescButton = document.getElementById("sort-desc");

let todos = [];

// Add a new to-do item
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("due-date").value;

  const todo = {
    id: Date.now(),
    title,
    description,
    dueDate,
    completed: false,
  };

  todos.push(todo);
  displayTodos();
  todoForm.reset();
});

// Display to-do items
function displayTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    if (todo.completed) {
      todoItem.classList.add("completed");
    }
    todoItem.dataset.id = todo.id;

    const todoDetails = document.createElement("div");
    todoDetails.innerHTML = `
    <strong>${todo.title}</strong>
    <p>${todo.description}</p>
    <small>Due: ${new Date(todo.dueDate).toLocaleString()}</small>
    `;

    const actionButtons = document.createElement("div");
    actionButtons.classList.add("action-btn");

    const completeButton = document.createElement("button");
    completeButton.textContent = todo.completed ? "Undo" : "Complete";
    completeButton.classList.add("complete");
    completeButton.addEventListener("click", () => toggleComplete(todo.id));

    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editTodo(todo.id));

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTodo(todo.id));

    actionButtons.append(completeButton, editButton, deleteButton);

    todoItem.append(todoDetails, actionButtons);
    todoList.appendChild(todoItem);
  });
}

// Toggle complete status
function toggleComplete(id) {
  const todo = todos.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  displayTodos();
}

// Edit a to-do item
function editTodo(id) {
  const todo = todos.find((todo) => todo.id === id);
  document.getElementById("title").value = todo.title;
  document.getElementById("description").value = todo.description;
  document.getElementById("due-date").value = todo.dueDate;

  deleteTodo(id);
}

// Delete a to-do item
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  displayTodos();
}

// Sort to-do items by due date
sortAscButton.addEventListener("click", () => {
  todos.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  displayTodos();
});

sortDescButton.addEventListener("click", () => {
  todos.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
  displayTodos();
});

console.log(new Date());
