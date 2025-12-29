import { CLASS_COMPLETION_RATE } from "/src/js/modules/constants/index.js";
import { appEl } from "/src/js/modules/constants/appEl.js";

export const createCompletionRow = () => {
    const completionRow = document.createElement("div");
    completionRow.innerHTML = "Completed:";
    completionRow.classList.add("completion-row");
    appEl.append(completionRow);

    const completionValue = document.createElement("span");
    completionValue.innerHTML = "0";
    completionValue.classList.add(CLASS_COMPLETION_RATE);

    const percentSign = document.createElement("span");
    percentSign.innerHTML = "%";
    percentSign.classList.add("completion-sign");

    completionRow.append(completionValue);
    completionRow.append(percentSign);
};
