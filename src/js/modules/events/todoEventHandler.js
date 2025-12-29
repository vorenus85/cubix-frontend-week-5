import { CLASS_JS_TODO_ITEM } from "/src/js/modules/constants/index.js";
import { renderCompletionRate } from "/src/js/modules/ui/renderCompletionRate.js";
import { todos } from "/src/js/modules/data/todos.js";

const toggleTodoStatus = (todo) => {
    todo.status = !todo.status;
};

export const todoEventHandler = () => {
    document.querySelector(".todo-list").addEventListener("click", (e) => {
        if (e.target.closest(`.${CLASS_JS_TODO_ITEM}`)) {
            const checkbox = e.target.closest(`.${CLASS_JS_TODO_ITEM}`);
            const parentEl = checkbox.parentElement;
            parentEl.classList.toggle("active");

            todos.find((todo) => {
                if (checkbox.value === todo.name) {
                    toggleTodoStatus(todo);
                }
            });
        }

        renderCompletionRate();
    });
};
