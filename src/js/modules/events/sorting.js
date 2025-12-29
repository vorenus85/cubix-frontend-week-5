import { todos } from "/src/js/modules/data/todos.js";
import {
    sortDifficultyDesc,
    sortDifficultyAsc,
} from "/src/js/modules/data/sortTodo.js";
import { renderTodos } from "/src/js/modules/ui/renderTodos.js";

const clearTodos = () => {
    const todoList = document.querySelector(".js-todo-list");
    todoList.innerHTML = "";
};

const sortingAsc = () => {
    document.addEventListener("click", (e) => {
        if (e.target.closest(".js-btn-sort-asc")) {
            clearTodos();
            const sortedTodos = sortDifficultyAsc(todos);
            renderTodos(sortedTodos);
        }
    });
};

const sortingDesc = () => {
    document.addEventListener("click", (e) => {
        if (e.target.closest(".js-btn-sort-desc")) {
            clearTodos();
            const sortedTodos = sortDifficultyDesc(todos);
            renderTodos(sortedTodos);
        }
    });
};

export const sorting = () => {
    sortingAsc();
    sortingDesc();
};
