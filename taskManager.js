export default class TaskManager {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  addTask(title) {
    this.tasks.push({
      id: Date.now(),
      title,
      completed: false
    });
  }

  toggleTask(id) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  getFilteredTasks(filter) {
    if (filter === 'completed') {
      return this.tasks.filter(task => task.completed);
    }
    if (filter === 'active') {
      return this.tasks.filter(task => !task.completed);
    }
    return this.tasks;
  }
}
