import {
    CLASS_JS_TODO_ITEM,
    CLASS_COMPLETION_RATE,
} from "/src/js/modules/constants.js";
import { calcCompletionRate } from "/src/js/modules/calcCompletionRate.js";
import { renderCompletionRate } from "/src/js/modules/renderCompletionRate.js";

export const todoEventHandler = () => {
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains(CLASS_JS_TODO_ITEM)) {
            const parentEl = e.target.parentElement;
            parentEl.classList.toggle("active");
        }
        const rate = calcCompletionRate();
        renderCompletionRate(rate);
    });
};
