import { newTodoForm } from "/src/js/modules/ui/newTodoForm.js";
import { createCompletionRow } from "/src/js/modules/ui/createCompletionRow.js";
import { renderTodos } from "/src/js/modules/ui/renderTodos.js";
import { todoEventHandler } from "/src/js/modules/events/todoEventHandler.js";
import { addTodoEventHandler } from "/src/js/modules/events/addTodoEventHandler.js";

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
