function displayMyReports() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    items.forEach(item => {
        let div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <strong>${item.name}</strong>
            <span class="badge ${item.type === 'Lost' ? 'lost' : 'found'}">${item.type}</span>
            <p>${item.place}</p>
        `;

        list.appendChild(div);
    });
}

displayMyReports();