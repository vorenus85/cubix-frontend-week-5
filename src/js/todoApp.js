import { createCompletionRow } from "/src/js/modules/createCompletionRow.js";
import { renderTodos } from "/src/js/modules/renderTodos.js";
import { todoEventHandler } from "/src/js/modules/todoEventHandler.js";

export const todoApp = () => {
    const init = () => {
        createCompletionRow();
        renderTodos();
        todoEventHandler();
    };

    return {
        init,
    };
};
