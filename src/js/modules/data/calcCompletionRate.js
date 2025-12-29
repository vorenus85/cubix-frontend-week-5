import { todos } from "/src/js/modules/data/todos.js";

export const calcCompletionRate = () => {
    let completedTask = 0;
    todos.forEach((todo) => {
        if (todo?.status) {
            completedTask++;
        }
    });

    const result = todos.length ? (completedTask / todos.length) * 100 : "0";
    return result;
};
