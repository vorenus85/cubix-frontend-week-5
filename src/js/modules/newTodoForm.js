import { appEl } from "/src/js/modules/appEl.js";

const renderNewTodoNameEl = () => {
    const el = document.createElement("input");
    el.classList.add("form-input", "new-todo-name");
    el.type = "text";
    el.required = true;
    el.name = "new_todo_name";
    el.id = "new_todo_name";
    el.placeholder = "Name";
    return el;
};

const renderNewTodoDifficultyEl = () => {
    const el = document.createElement("input");
    el.classList.add("form-input", "new-todo-difficulty");
    el.type = "number";
    el.required = true;
    el.min = "1";
    el.max = "5";
    el.name = "new_todo_difficulty";
    el.id = "new_todo_difficulty";
    el.placeholder = "Difficulty";
    return el;
};

const renderNewTodoBtn = () => {
    const el = document.createElement("button");
    el.type = "submit";
    el.classList.add("btn", "new-todo", "js-new-todo");
    el.innerHTML = "Save";
    return el;
};

export const newTodoForm = () => {
    const newTodoForm = document.createElement("form");
    appEl.prepend(newTodoForm);
    const formRow = document.createElement("div");
    formRow.classList.add("form-row");
    newTodoForm.append(formRow);
    formRow.append(renderNewTodoNameEl());
    formRow.append(renderNewTodoDifficultyEl());
    formRow.append(renderNewTodoBtn());
};
