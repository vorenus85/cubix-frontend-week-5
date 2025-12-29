import { CLASS_FROM_ERROR } from "/src/js/modules/constants/index.js";

export const validateTodoName = (name) => {
    let msg = "";

    if (!name || name === "" || !name.length) {
        msg = "Todo name is required!";
        return msg;
    }
    return false;
};

export const validateTodoDifficulty = (el) => {
    let msg = "";

    let difficulty = Number(el);

    if (isNaN(difficulty)) {
        msg = "Todo difficulty must be number!";
        return msg;
    }

    if (difficulty < 1 || difficulty > 5) {
        msg = "Todo difficulty must be between 1 and 5!";
        return msg;
    }
    return false;
};

export const renderErrMsg = (msg) => {
    const errosUl = document.querySelector("." + CLASS_FROM_ERROR);
    const liEl = document.createElement("li");
    liEl.innerHTML = msg;
    errosUl.append(liEl);
};
