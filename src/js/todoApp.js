import { newTodoForm } from "/src/js/modules/ui/newTodoForm.js";
import { completionRow } from "/src/js/modules/ui/completionRow.js";
import { renderTodos } from "/src/js/modules/ui/renderTodos.js";
import { toggleTodoStatus } from "/src/js/modules/events/toggleTodoStatus.js";
import { addTodo } from "/src/js/modules/events/addTodo.js";
import { sorting } from "/src/js/modules/events/sorting.js";
import { removeTodo } from "/src/js/modules/events/removeTodo.js";
import { renderMostDifficultRow } from "/src/js/modules/ui/renderMostDifficultRow.js";
import { renderMostDifficultTodo } from "/src/js/modules/ui/renderMostDifficultTodo.js";
import { renderOrderRow } from "/src/js/modules/ui/renderOrderRow.js";
import { todos } from "/src/js/modules/data/todos.js";

export const todoApp = () => {
    const init = () => {
        renderTodos(todos);
        newTodoForm();
        renderOrderRow();
        renderMostDifficultRow();
        renderMostDifficultTodo();
        completionRow();
        // events
        addTodo();
        toggleTodoStatus();
        sorting();
        removeTodo();
    };

    return {
        init,
    };
};
