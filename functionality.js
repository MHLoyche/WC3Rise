
/* Search function for the table, searching through the 2nd column of item names*/
function searchTable() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let table = document.querySelector("table");
    let rows = table.getElementsByTagName("tr");
    let itemNameColumnIndex = 1; // Index for "Item Name" column

    for (let i = 1; i < rows.length; i++) { // Skip header row
        let cells = rows[i].getElementsByTagName("td");
        if (cells.length > itemNameColumnIndex) { // Ensure column exists
            let itemName = cells[itemNameColumnIndex].innerText.toLowerCase();
            rows[i].style.display = itemName.includes(input) ? "" : "none"; // Show or hide row
        }
    }
}

