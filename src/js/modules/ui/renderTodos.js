import { appEl } from "/src/js/modules/constants/appEl.js";
import {
    CLASS_JS_TODO_ITEM,
    CLASS_JS_TODO_LIST,
} from "/src/js/modules/constants/index.js";
import { todos } from "/src/js/modules/data/todos.js";

const createDeleteTodoBtn = () => {
    const btn = document.createElement("button");
    btn.innerHTML = "X";
    btn.classList.add("btn", "btn-del", "js-del-todo");
    btn.title = "Delete Todo";

    return btn;
};

const createTodoRow = () => {
    const todoRow = document.createElement("li");
    todoRow.classList.add("form-group", "todo-list-item");

    return todoRow;
};

const createTodoCheckbox = (element, index) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "todo_" + index;
    checkbox.id = "todo_" + index;
    checkbox.value = element.name;
    checkbox.classList.add("form-element", CLASS_JS_TODO_ITEM);

    return checkbox;
};

const createTodoLabel = (element, index) => {
    const label = document.createElement("label");
    label.htmlFor = "todo_" + index;
    label.innerHTML = element.name;

    return label;
};

export const renderTodo = (element, index) => {
    const todoUl = document.querySelector("." + CLASS_JS_TODO_LIST);
    const todoRow = createTodoRow();
    const checkbox = createTodoCheckbox(element, index);
    const label = createTodoLabel(element, index);
    const difficulty = "- " + element.difficulty;
    const deleteBtn = createDeleteTodoBtn();

    todoRow.append(checkbox);
    todoRow.append(label);
    label.append(difficulty);
    todoUl.append(todoRow);
    todoRow.append(deleteBtn);
};

export const renderTodos = () => {
    const todoUl = document.createElement("ul");
    todoUl.classList.add("todo-list", CLASS_JS_TODO_LIST);
    appEl.prepend(todoUl);

    todos.forEach((element, index) => {
        renderTodo(element, index + 1, todoUl);
    });
};
