import { newTodoForm } from "/src/js/modules/ui/newTodoForm.js";
import { createCompletionRow } from "/src/js/modules/ui/createCompletionRow.js";
import { renderTodos } from "/src/js/modules/ui/renderTodos.js";
import { toggleTodoStatus } from "/src/js/modules/events/toggleTodoStatus.js";
import { addTodo } from "/src/js/modules/events/addTodo.js";

export const todoApp = () => {
    const init = () => {
        renderTodos();
        newTodoForm();
        createCompletionRow();
        addTodo();
        toggleTodoStatus();
    };

    return {
        init,
    };
};
