import { newTodoForm } from "/src/js/modules/ui/newTodoForm.js";
import { completionRow } from "/src/js/modules/ui/completionRow.js";
import { renderTodos } from "/src/js/modules/ui/renderTodos.js";
import { toggleTodoStatus } from "/src/js/modules/events/toggleTodoStatus.js";
import { addTodo } from "/src/js/modules/events/addTodo.js";
import { removeTodo } from "/src/js/modules/events/removeTodo.js";
import { renderMostDifficultRow } from "/src/js/modules/ui/renderMostDifficultRow.js";
import { renderMostDifficultTodo } from "/src/js/modules/ui/renderMostDifficultTodo.js";

export const todoApp = () => {
    const init = () => {
        renderTodos();
        renderMostDifficultRow();
        renderMostDifficultTodo();
        newTodoForm();
        completionRow();
        addTodo();
        toggleTodoStatus();
        removeTodo();
    };

    return {
        init,
    };
};
