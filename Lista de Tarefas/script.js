document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTodoItem(todoInput.value);
        todoInput.value = '';
    });

    function addTodoItem(todoText) {
        const todoItem = document.createElement('li');

        const todoTextElement = document.createElement('span');
        todoTextElement.textContent = todoText;
        todoTextElement.addEventListener('click', function() {
            todoItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', function() {
            todoItem.remove();
        });

        todoItem.appendChild(todoTextElement);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);
    }
});
