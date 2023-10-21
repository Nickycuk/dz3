function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => displayTodos(data))
        .catch(error => console.error('Ошибка:', error));
}

function displayTodos(todos) {
    const todosContainer = document.getElementById('todosContainer');

    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const todoTitle = document.createElement('div');
        todoTitle.classList.add('todo-title');
        todoTitle.textContent = todo.title;

        const todoDescription = document.createElement('div');
        todoDescription.classList.add('todo-description');
        todoDescription.textContent = todo.body;

        todoItem.appendChild(todoTitle);
        todoItem.appendChild(todoDescription);

        todosContainer.appendChild(todoItem);
    });
}

getTodos();
