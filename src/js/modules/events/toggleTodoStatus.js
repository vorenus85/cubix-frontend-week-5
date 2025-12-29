import {
    CLASS_JS_TODO_ITEM,
    CLASS_JS_TODO_LIST,
} from "/src/js/modules/constants/index.js";
import { renderCompletionRate } from "/src/js/modules/ui/renderCompletionRate.js";
import { todos } from "/src/js/modules/data/todos.js";

export const toggleTodoStatus = () => {
    const todoList = document.querySelector("." + CLASS_JS_TODO_LIST);

    todoList.addEventListener("click", (e) => {
        if (e.target.closest(`.${CLASS_JS_TODO_ITEM}`)) {
            const checkbox = e.target.closest(`.${CLASS_JS_TODO_ITEM}`);
            const parentEl = checkbox.parentElement;
            parentEl.classList.toggle("active");

            todos.find((todo) => {
                if (checkbox.value === todo.name) {
                    todo.status = !todo.status;
                }
            });
        }

        renderCompletionRate();
    });
};
