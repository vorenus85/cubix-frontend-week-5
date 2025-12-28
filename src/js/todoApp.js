import { newTodoForm } from "/src/js/modules/newTodoForm.js";
import { createCompletionRow } from "/src/js/modules/createCompletionRow.js";
import { renderTodos } from "/src/js/modules/renderTodos.js";
import { todoEventHandler } from "/src/js/modules/todoEventHandler.js";
import { addTodoEventHandler } from "/src/js/modules/addTodoEventHandler.js";

export const todoApp = () => {
    const init = () => {
        renderTodos();
        newTodoForm();
        createCompletionRow();
        addTodoEventHandler();
        todoEventHandler();
    };

    return {
        init,
    };
};
