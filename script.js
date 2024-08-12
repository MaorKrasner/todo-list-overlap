document.addEventListener('DOMContentLoaded', function() {
    const taskInputField = document.getElementById('task-input-field');
    const addTaskBtn = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
    const hideCompletedBtn = document.getElementById('hide-completed-button');
    const deleteCompletedBtn = document.getElementById('delete-completed-button');
    const showAllBtn = document.getElementById('show-all-button');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInputField.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <div>
                    <button class="complete-task-button">✓</button>
                    <button class="delete-task-button">🗑</button>
                </div>
            `;
            taskList.appendChild(taskItem);
            taskInputField.value = "";

            taskItem.querySelector('.complete-task-button').addEventListener('click', function() {
                taskItem.classList.toggle('completed');
            });

            taskItem.querySelector('.delete-task-button').addEventListener('click', function() {
                taskItem.remove();
            });
        }
    });

    hideCompletedBtn.addEventListener('click', function() {
        const completedTasks = document.querySelectorAll('.task-item.completed');
        completedTasks.forEach(task => task.style.display = 'none');
    });

    deleteCompletedBtn.addEventListener('click', function() {
        const completedTasks = document.querySelectorAll('.task-item.completed');
        completedTasks.forEach(task => task.remove());
    });

    showAllBtn.addEventListener('click', function() {
        const allTasks = document.querySelectorAll('.task-item');
        allTasks.forEach(task => task.style.display = 'flex');
    });
});