function addTodoToStorage(newTodo) {
    checkStorage();
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function checkStorage() {
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
}

function removeTodoStorage(todo) {
    todos = []
    localStorage.setItem('todos', JSON.stringify(todos));
}

function removeTodoItemStorage(todo) {
    checkStorage(); 
    todos.forEach(function (item, index) {
        if (todo === item) {
            todos.splice(index, 1);
        }
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}