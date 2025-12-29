import { todos } from "/src/js/modules/data/todos.js";
import { sortDifficultyDesc } from "/src/js/modules/data/sortTodo.js";

export const renderMostDifficultTodo = () => {
    const sortedTodos = sortDifficultyDesc(todos);

    document.querySelector(".js-most-difficulty-item").innerHTML =
        sortedTodos[0]?.name;
};
