const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function addTodo(event) {
    event.preventDefault();

    const todoText = todoInput.value.trim()

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

function handleTodoClick(event) {
    const target = event.target;

    if (target.classList.contains("delete-btn")) {
        target.parentElement.remove();
    }
    else if (target.tagName === "SPAN") {
        target.parentElement.classList.toggle("completed");
    }
}

todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", handleTodoClick);