// Load items from localStorage
let items = JSON.parse(localStorage.getItem("items")) || [];

// First-time demo data (so dashboard is not empty)
if (items.length === 0) {
    items = [
        {
            name: "Black Wallet",
            place: "Library",
            type: "Found"
        },
        {
            name: "iPhone 13",
            place: "Cafeteria",
            type: "Lost"
        },
        {
            name: "Car Keys",
            place: "Parking Area",
            type: "Found"
        }
    ];

    saveItems();
}

// Save items to localStorage
function saveItems() {
    localStorage.setItem("items", JSON.stringify(items));
}

// Get all items
function getItems() {
    return items;
}

// Add new item
function addNewItem(name, place, type) {
    let newItem = {
        name: name,
        place: place,
        type: type
    };

    items.push(newItem);
    saveItems();
}

// Delete item (optional future feature)
function deleteItem(index) {
    items.splice(index, 1);
    saveItems();
}

// Clear all data (for testing)
function clearAllItems() {
    localStorage.removeItem("items");
    items = [];
}

// Search utility (can be reused)
function filterItems(query) {
    return items.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
    );
}