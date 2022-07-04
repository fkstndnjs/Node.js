const fetch = require('node-fetch');

async function fetchTodo() {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await response.json();
    console.log(todo);
}

fetchTodo();
