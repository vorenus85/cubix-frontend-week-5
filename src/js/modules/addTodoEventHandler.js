import {
    CLASS_ADD_TODO_BTN,
    CLASS_NEW_TODO_NAME,
    CLASS_NEW_TODO_DIFFICULTY,
    CLASS_FROM_ERROR,
    CLASS_JS_TODO_ITEM,
} from "/src/js/modules/constants.js";

import {
    validateTodoName,
    validateTodoDifficulty,
    renderErrMsg,
} from "/src/js/modules/todoValidation.js";

import { renderTodo } from "/src/js/modules/renderTodos.js";
import { renderCompletionRate } from "/src/js/modules/renderCompletionRate.js";

export const addTodoEventHandler = () => {
    document.querySelector(".new-todo-form").addEventListener("click", (e) => {
        e.preventDefault();

        const erorrs = document.querySelector("." + CLASS_FROM_ERROR);
        erorrs.innerHTML = "";

        const todoNameEl = document.querySelector("." + CLASS_NEW_TODO_NAME);
        const todoDifficultyEl = document.querySelector(
            "." + CLASS_NEW_TODO_DIFFICULTY
        );
        const validateResultTodoName = validateTodoName(todoNameEl.value);
        const validateResultTodoDifficulty = validateTodoDifficulty(
            todoDifficultyEl.value
        );

        const todos = document.querySelectorAll("." + CLASS_JS_TODO_ITEM);

        if (e.target.classList.contains(CLASS_ADD_TODO_BTN)) {
            if (validateResultTodoName) {
                renderErrMsg(validateResultTodoName);
            }
            if (validateResultTodoDifficulty) {
                renderErrMsg(validateResultTodoDifficulty);
            }

            if (!validateResultTodoName && !validateResultTodoDifficulty) {
                const newTodo = {
                    name: todoNameEl.value,
                    status: 0,
                    difficulty: Number(todoDifficultyEl.value),
                };

                renderTodo(newTodo, todos.length + 1);
                todoNameEl.value = "";
                todoDifficultyEl.value = "";
                renderCompletionRate();
            }
        }
    });
};
