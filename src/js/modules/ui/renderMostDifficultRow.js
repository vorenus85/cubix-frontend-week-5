import { appEl } from "/src/js/modules/constants/appEl.js";

export const renderMostDifficultRow = () => {
    const el = document.createElement("div");
    el.classList.add("most-difficult-row");

    const text = document.createElement("strong");
    text.innerHTML = "Most difficult item:";

    const span = document.createElement("span");
    span.classList.add("js-most-difficulty-item");

    el.append(text);
    el.append(span);

    appEl.append(el);
};
