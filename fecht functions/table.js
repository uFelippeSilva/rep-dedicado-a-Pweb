// table.js
function createTable(data) {
    if (!Array.isArray(data) || data.length === 0) {
        return "Nenhum dado disponível para exibir.";
    }

    const keys = Object.keys(data[0]);

    const table = document.createElement("table");
    table.classList.add("table");

    const thead = table.createTHead();
    const row = thead.insertRow();
    keys.forEach(key => {
        const th = document.createElement("th");
        th.textContent = key;
        row.appendChild(th);
    });

    const tbody = table.createTBody();
    data.forEach(item => {
        const row = tbody.insertRow();
        keys.forEach(key => {
            const cell = row.insertCell();
            cell.textContent = item[key];
        });
    });

    return table;
}
