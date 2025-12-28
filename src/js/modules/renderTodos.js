import { appEl } from "/src/js/modules/appEl.js";
import { CLASS_JS_TODO_ITEM } from "/src/js/modules/constants.js";
import { todos } from "/src/js/modules/todos.js";

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

const createTodoDifficulty = (element) => {
    const difficulty = document.createElement("span");
    difficulty.classList.add("difficulty");
    difficulty.innerHTML = ` -  ${element.difficulty}`;

    return difficulty;
};

export const renderTodos = () => {
    const todoUl = document.createElement("ul");
    todoUl.classList.add("todo-list");
    appEl.prepend(todoUl);

    todos.forEach((element, index) => {
        const todoRow = createTodoRow();
        const checkbox = createTodoCheckbox(element, index);
        const label = createTodoLabel(element, index);
        const difficulty = createTodoDifficulty(element);

        todoRow.append(checkbox);
        todoRow.append(label);
        label.append(difficulty);
        todoUl.append(todoRow);
    });
};
