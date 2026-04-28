function displayItems(filtered = items) {
    let list = document.getElementById("list");
    if (!list) return;

    list.innerHTML = "";

    filtered.forEach(item => {
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

function searchItem() {
    let q = document.getElementById("search").value.toLowerCase();

    let filtered = items.filter(item =>
        item.name.toLowerCase().includes(q)
    );

    displayItems(filtered);
}

displayItems();