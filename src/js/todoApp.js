import { newTodoForm } from "/src/js/modules/newTodoForm.js";
import { createCompletionRow } from "/src/js/modules/createCompletionRow.js";
import { renderTodos } from "/src/js/modules/renderTodos.js";
import { todoEventHandler } from "/src/js/modules/todoEventHandler.js";

export const todoApp = () => {
    const init = () => {
        renderTodos();
        newTodoForm();
        createCompletionRow();
        todoEventHandler();
    };

    return {
        init,
    };
};
