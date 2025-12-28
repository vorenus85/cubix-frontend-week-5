import { CLASS_COMPLETION_RATE } from "/src/js/modules/constants.js";
import { calcCompletionRate } from "/src/js/modules/calcCompletionRate.js";

export const renderCompletionRate = () => {
    const rate = calcCompletionRate();

    const completionRateEl = document.querySelector(
        "." + CLASS_COMPLETION_RATE
    );
    completionRateEl.innerHTML = Math.ceil(rate);
};
