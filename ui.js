export function renderTasks(tasks, container) {
  container.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.innerHTML = `
      <span>${task.title}</span>
      <button data-id="${task.id}">❌</button>
    `;

    li.querySelector('span').addEventListener('click', () => {
      li.dispatchEvent(new CustomEvent('toggle', { detail: task.id }));
    });

    li.querySelector('button').addEventListener('click', () => {
      li.dispatchEvent(new CustomEvent('delete', { detail: task.id }));
    });

    container.appendChild(li);
  });
}
