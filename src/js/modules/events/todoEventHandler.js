import { CLASS_JS_TODO_ITEM } from "/src/js/modules/constants/index.js";

import { renderCompletionRate } from "/src/js/modules/ui/renderCompletionRate.js";

export const todoEventHandler = () => {
    document.querySelector(".todo-list").addEventListener("click", (e) => {
        if (e.target.closest(`.${CLASS_JS_TODO_ITEM}`)) {
            const checkbox = e.target.closest(`.${CLASS_JS_TODO_ITEM}`);
            const parentEl = checkbox.parentElement;
            parentEl.classList.toggle("active");
        }

        renderCompletionRate();
    });
};
