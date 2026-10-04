function addStatus(li) {
    const badge = document.createElement('span');
    badge.className = 'status pending';
    badge.textContent = 'Pending';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'toggle-btn';
    btn.textContent = 'Mark as Completed';
    btn.addEventListener('click', function () {
        const done = badge.classList.toggle('completed');
        badge.classList.toggle('pending', !done);
        badge.textContent = done ? 'Completed' : 'Pending';
        btn.textContent = done ? 'Mark as Pending' : 'Mark as Completed';
    });
    li.appendChild(badge);
    li.appendChild(btn);
}

// Apply to existing sample tasks
document.querySelectorAll('#task-list li').forEach(addStatus);

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
        li.textContent = title + " - " + desc + " ";
        addStatus(li);
        taskList.appendChild(li);

        document.getElementById('task-title').value = '';
        document.getElementById('task-desc').value = '';
    }
});
