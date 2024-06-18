# Task Manager

This project is a simple task manager application built using HTML, CSS, and JavaScript. It allows users to add, edit, and delete tasks, and keeps track of the number of active tasks.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Display the count of active tasks
- Input validation with error handling

## How It Works

### HTML Structure

The HTML file includes the following key elements:

- An input field to enter new tasks.
- A button to add new tasks.
- A container to display the list of tasks.
- An error message element to show validation errors.
- A counter to display the number of active tasks.

### CSS

Basic styles are applied to make the application look clean and user-friendly. The CSS includes styles for the task list, buttons, input field, and completed tasks.

### JavaScript

The JavaScript code provides the functionality for the task manager. Here's a breakdown of the main parts of the code:

#### Variables

- `addBtn`: Button to add a new task.
- `newTaskInput`: Input field for entering a new task.
- `tasksContainer`: Container for displaying the list of tasks.
- `error`: Element to display validation errors.
- `countValue`: Element to display the count of active tasks.
- `taskCount`: Variable to keep track of the number of active tasks.

#### Functions

- `displayCount(taskCount)`: Updates the displayed count of active tasks.
- `addTask()`: Adds a new task to the task list.

#### Event Listeners

- `addBtn.addEventListener("click", addTask)`: Adds a new task when the add button is clicked.
- `window.onload`: Resets the task count and input field when the page is loaded.
- `newTaskInput.addEventListener("keydown", (event) => { ... })`: Adds a new task when the Enter key is pressed in the input field.

#### Adding Tasks

The `addTask` function:

1. Retrieves and trims the value from the input field.
2. Hides the error message.
3. Displays an error message if the input field is empty.
4. Creates a new task element with delete and edit buttons.
5. Appends the new task element to the tasks container.
6. Adds event listeners to the delete and edit buttons for the new task.
7. Updates the task count and displays it.

#### Deleting Tasks

Event listeners on delete buttons:

1. Remove the task element from the DOM.
2. Decrement the task count.
3. Update the displayed task count.

#### Editing Tasks

Event listeners on edit buttons:

1. Populate the input field with the task's name.
2. Remove the task element from the DOM.
3. Decrement the task count.
4. Update the displayed task count.

#### Completing Tasks

Event listeners on checkboxes:

1. Toggle the `completed` class on the task name.
2. Adjust the task count based on whether the task is checked or unchecked.
3. Update the displayed task count.

## Getting Started

To run this project locally:

1. Clone the repository.
2. Open `index.html` inside todo-list-app in a web browser.

## Contributions

Contributions are welcome! Please feel free to submit a Pull Request.
