const form = document.querySelector('#todoAddForm');
const listGroup = document.querySelector('.list-group');
const todoInput = document.querySelector('#todoName');
const clearButton = document.querySelector('#todoClearButton');
const cardBody = document.querySelectorAll('.card-body')[1];
const filterInput = document.querySelector('#todoSearch');

let todos = [];
run();

function run() {
    form.addEventListener('submit', addTodo);
    document.addEventListener('DOMContentLoaded', loadPage);
    clearButton.addEventListener('click', removeTodo);
    cardBody.addEventListener('click', removeTodoItem);
    filterInput.addEventListener('keyup', filterTodos);
}

function loadPage() {
    checkStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}

function addTodo(e) {
    const inputValue = todoInput.value.trim();
    if (inputValue === '') {
        alert('Lütfen bir değer girin');
        return;
    } else {
        addTodoToUI(inputValue);
        addTodoToStorage(inputValue);
    }

    e.preventDefault();
}

function removeTodo(e) {
    const todos = document.querySelectorAll('.list-group-item');
    if (todos.length === 0) {
        alert('Silinecek öğe yok');
    } else {
        todos.forEach(function (todo) {
            todo.remove();
        });
        removeTodoStorage(todos);
    }
}

function addTodoToUI(newTodo) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between';
    li.innerHTML = newTodo;

    const a = document.createElement('a');
    a.href = '#';
    a.className = 'delete-item';

    const i = document.createElement('i');
    i.className = 'fa fa-remove';

    a.appendChild(i);
    li.appendChild(a);
    listGroup.appendChild(li);

    todoInput.value = '';
}

function removeTodoItem(e) {
    if (e.target.classList.contains('fa-remove')) {
        e.target.parentElement.parentElement.remove();
        let value = e.target.parentElement.parentElement.textContent;
        removeTodoItemStorage(value);
    }
}

function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase().trim();
    const todos = document.querySelectorAll('.list-group-item');
    if (todos.length === 0) {
        alert('Filtrelenecek öğe yok');
        this.value = '';
    } else {
        todos.forEach(function (todo) {
            if (todo.textContent.toLowerCase().includes(filterValue)) {
                todo.setAttribute('style', 'display: block');
            } else {
                todo.setAttribute('style', 'display: none !important');
            }
        })
    }
}
