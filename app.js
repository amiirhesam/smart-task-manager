import TaskManager from './taskManager.js';
import { loadTasks, saveTasks } from './storage.js';
import { renderTasks } from './ui.js';

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addTaskBtn');
const list = document.getElementById('taskList');

const manager = new TaskManager(loadTasks());
let currentFilter = 'all';

function updateUI() {
  renderTasks(manager.getFilteredTasks(currentFilter), list);
  saveTasks(manager.tasks);
}

addBtn.addEventListener('click', () => {
  if (!taskInput.value.trim()) return;
  manager.addTask(taskInput.value);
  taskInput.value = '';
  updateUI();
});

list.addEventListener('toggle', e => {
  manager.toggleTask(e.detail);
  updateUI();
});

list.addEventListener('delete', e => {
  manager.deleteTask(e.detail);
  updateUI();
});

document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    currentFilter = btn.dataset.filter;
    updateUI();
  });
});

updateUI();
