import { appEl } from "/src/js/modules/constants/appEl.js";

export const renderOrderRow = () => {
    const row = document.createElement("div");
    row.classList.add("order-row");
    row.innerHTML = "Order:";

    const btnAsc = document.createElement("button");
    btnAsc.classList.add("btn", "btn-sort", "js-btn-sort-asc");
    btnAsc.innerHTML = "Ascending";
    row.append(btnAsc);

    const btnDesc = document.createElement("button");
    btnDesc.classList.add("btn", "btn-sort", "js-btn-sort-desc");
    btnDesc.innerHTML = "Descending";
    row.append(btnDesc);

    appEl.append(row);
};
