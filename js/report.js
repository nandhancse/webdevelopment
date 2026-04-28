function submitItem() {
    let name = document.getElementById("name").value;
    let place = document.getElementById("place").value;
    let type = document.getElementById("type").value;

    if (!name || !place) {
        alert("Fill all fields");
        return;
    }

    items.push({ name, place, type });
    saveItems();

    alert("Item Added!");
    window.location.href = "index.html";
}