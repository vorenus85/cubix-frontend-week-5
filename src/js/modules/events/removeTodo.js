import { renderMostDifficultTodo } from "/src/js/modules/ui/renderMostDifficultTodo.js";
import { CLASS_JS_TODO_LIST } from "/src/js/modules/constants/index.js";
import { todos } from "/src/js/modules/data/todos.js";
import { renderCompletionRate } from "/src/js/modules/ui/renderCompletionRate.js";

export const removeTodo = () => {
    const todoList = document.querySelector("." + CLASS_JS_TODO_LIST);

    todoList.addEventListener("click", (e) => {
        if (e.target.closest(".js-del-todo")) {
            const todoLi = e.target.closest(".todo-list-item");
            const todo = todoLi.querySelector(".js-todo-item");

            const actualTodoIndex = todos.findIndex((e) => {
                return e.name === todo.value;
            });

            todos.splice(actualTodoIndex, 1);
            todoLi.remove();
            renderCompletionRate();
            renderMostDifficultTodo();
        }
    });
};
