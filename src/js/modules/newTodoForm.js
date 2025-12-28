import { appEl } from "/src/js/modules/appEl.js";
import {
    CLASS_NEW_TODO_NAME,
    CLASS_NEW_TODO_DIFFICULTY,
    CLASS_ADD_TODO_BTN,
} from "/src/js/modules/constants.js";

const renderFormElementWrapper = () => {
    const formEl = document.createElement("div");
    formEl.classList.add("form-element");
    return formEl;
};

const renderNewTodoNameEl = () => {
    const formEl = renderFormElementWrapper();

    const el = document.createElement("input");
    el.classList.add("form-input", CLASS_NEW_TODO_NAME);
    el.type = "text";
    el.required = true;
    el.name = "new_todo_name";
    el.id = "new-todo-name";
    el.placeholder = "Name";

    formEl.append(el);
    return formEl;
};

const renderNewTodoDifficultyEl = () => {
    const formEl = renderFormElementWrapper();

    const el = document.createElement("input");
    el.classList.add("form-input", CLASS_NEW_TODO_DIFFICULTY);
    el.type = "number";
    el.required = true;
    el.min = "1";
    el.max = "5";
    el.name = "new_todo_difficulty";
    el.id = "new_todo_difficulty";
    el.placeholder = "Difficulty";

    formEl.append(el);
    return formEl;
};

const renderNewTodoBtn = () => {
    const el = document.createElement("button");
    el.type = "submit";
    el.classList.add("btn", CLASS_ADD_TODO_BTN);
    el.innerHTML = "Save";
    return el;
};

export const newTodoForm = () => {
    const newTodoForm = document.createElement("form");
    newTodoForm.classList.add("new-todo-form");
    appEl.prepend(newTodoForm);
    const formRow = document.createElement("div");
    formRow.classList.add("form-row");
    newTodoForm.append(formRow);

    const errors = document.createElement("ul");
    errors.classList.add("form-errors", "js-form-errors");
    newTodoForm.prepend(errors);

    formRow.append(renderNewTodoNameEl());
    formRow.append(renderNewTodoDifficultyEl());
    formRow.append(renderNewTodoBtn());
};
