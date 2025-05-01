const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function addTodo(event) {
    const todoText = todoInput.ariaValueMax.trim()

    if (todoText !== ""){
        const todoItem = document.createElement("li");
        todoItem.className = "todo-item";

        const todoTextSpan = document.createElement("span");
        todoTextSpan.textContent = todoText;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn"
        deleteBtn.textContent = "삭제"

        todoItem.appendChild(todoTextSpan);
        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);

        todoInput.value = "";
    }
}