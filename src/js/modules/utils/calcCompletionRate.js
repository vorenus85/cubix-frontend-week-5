import { CLASS_JS_TODO_ITEM } from "/src/js/modules/constants/index.js";

export const calcCompletionRate = () => {
    let completedTask = 0;

    const tasks = document.querySelectorAll("." + CLASS_JS_TODO_ITEM);

    tasks.forEach((task) => {
        if (task?.checked) {
            completedTask++;
        }
    });

    const result = (completedTask / tasks.length) * 100;
    return result;
};
