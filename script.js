document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('task-title').value.trim();
    const desc = document.getElementById('task-desc').value.trim();
    const errorMsg = document.getElementById('error-msg');
    const taskList = document.getElementById('task-list');

    if (title === '' || desc === '') {
        errorMsg.textContent = "Please enter both a title and a description.";
        errorMsg.classList.remove('hidden');
    } else {
        errorMsg.classList.add('hidden');
        const li = document.createElement('li');
        li.textContent = title + " - " + desc;
        taskList.appendChild(li);

        document.getElementById('task-title').value = '';
        document.getElementById('task-desc').value = '';
    }
});
