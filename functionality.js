
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

async function fetchMessages() {
    try {
        const response = await fetch("http://localhost:5000/get_messages");
        const messages = await response.json();
        const chatBox = document.getElementById("chatBox");

        chatBox.innerHTML = "<h3>Discord Chat</h3>";
        messages.forEach(msg => {
            const div = document.createElement("div");
            div.className = "message";
            div.innerHTML = `<strong>${msg.author}:</strong> ${msg.content}`;
            chatBox.appendChild(div);
        });
    } catch (error) {
        console.error("Error fetching messages:", error);
    }
}

// Refresh messages every 20 seconds
setInterval(fetchMessages, 20000);

// Load messages when the page loads
window.onload = fetchMessages;