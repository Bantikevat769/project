// Todo input aur button ko select karte hain
const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Event listener jab user "Add Task" button click kare
addButton.addEventListener('click', () => {
    const task = inputField.value; // User input lete hain
    if (task.trim()) {  // Agar input empty na ho
        addTodo(task);   // Function call todo add karne ke liye
        inputField.value = '';  // Input field ko clear karte hain
    }
});

// Todo list me naya task add karne ka function
function addTodo(task) {
    const li = document.createElement('li');  // List item create karte hain
    li.textContent = task;  // List item ka text set karte hain

    // Delete button add karte hain
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(li);  // List item ko delete karte hain
    });

    // List item ko todo list me append karte hain
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}
