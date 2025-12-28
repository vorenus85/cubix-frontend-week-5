import { CLASS_COMPLETION_RATE } from "/src/js/modules/constants.js";

export const renderCompletionRate = (rate) => {
    const completionRateEl = document.querySelector(
        "." + CLASS_COMPLETION_RATE
    );
    completionRateEl.innerHTML = rate;
};
