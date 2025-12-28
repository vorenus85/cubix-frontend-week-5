import { appEl } from "/src/js/modules/appEl.js";
import { CLASS_JS_TODO_ITEM } from "/src/js/modules/constants.js";
import { todos } from "/src/js/modules/todos.js";

export const renderTodos = () => {
    const todoUl = document.createElement("ul");
    todoUl.classList.add("todo-list");
    appEl.prepend(todoUl);

    todos.forEach((element, index) => {
        const todoRow = document.createElement("li");
        todoRow.classList.add("form-group", "todo-list-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "todo_" + index;
        checkbox.id = "todo_" + index;
        checkbox.value = element.name;
        checkbox.classList.add("form-element", CLASS_JS_TODO_ITEM);

        const label = document.createElement("label");
        label.htmlFor = "todo_" + index;
        label.innerHTML = element.name;

        todoRow.append(checkbox);
        todoRow.append(label);
        todoUl.append(todoRow);
    });
};
