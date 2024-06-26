document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById('task-list');
const form = document.getElementById('create-task-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const newTaskDescription = document.getElementById('new-task-description').value;

  // Create a new task list item (stretch: add priority selection, etc.)
  const newTaskItem = document.createElement('li');
  newTaskItem.textContent = newTaskDescription;

  // Add the new item to the task list
  taskList.appendChild(newTaskItem);

  // Clear the input field
  document.getElementById('new-task-description').value = '';
});

});
