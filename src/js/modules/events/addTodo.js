import {
    CLASS_ADD_TODO_BTN,
    CLASS_NEW_TODO_NAME,
    CLASS_NEW_TODO_DIFFICULTY,
    CLASS_FROM_ERROR,
} from "/src/js/modules/constants/index.js";

import {
    validateTodoName,
    validateTodoDifficulty,
    renderErrMsg,
} from "/src/js/modules/data/todoValidation.js";

import { todos } from "/src/js/modules/data/todos.js";
import { renderTodo } from "/src/js/modules/ui/renderTodos.js";
import { renderCompletionRate } from "/src/js/modules/ui/renderCompletionRate.js";
import { renderMostDifficultTodo } from "/src/js/modules/ui/renderMostDifficultTodo.js";

export const addTodo = () => {
    const form = document.querySelector(".new-todo-form");

    form.querySelector(".js-add-todo").addEventListener("click", (e) => {
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
                    status: false,
                    difficulty: Number(todoDifficultyEl.value),
                };
                todos.push(newTodo);

                renderTodo(newTodo, todos.length + 1);
                todoNameEl.value = "";
                todoDifficultyEl.value = "";
                renderCompletionRate();
                renderMostDifficultTodo();
            }
        }
    });
};
