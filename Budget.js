
console.log("JS is working!");


// Grab elements using their classes
let BudgetInput = document.querySelector(".BudgetInput input");
let ItemInput = document.querySelector(".ItemInput input");
let CostInput = document.querySelector(".CostInput input");
let ExpenseButton = document.querySelector(".ExpenseButton button");
let SpentNumber = document.querySelector(".SpentNumber");
let ExpenseList = document.querySelector(".ExpenseList");

// Create warning paragraph dynamically if not in HTML
let WarningMessage = document.querySelector(".WarningMessage");
if (!WarningMessage) {
    WarningMessage = document.createElement("p");
    WarningMessage.className = "WarningMessage";
    WarningMessage.style.color = "#ff4d4d";
    WarningMessage.style.display = "none";
    WarningMessage.textContent = "⚠️ Budget exceeded!";
    document.querySelector(".TotalSpent").appendChild(WarningMessage);
}

// Track total spent
let totalSpent = 0;

// Button click event
ExpenseButton.addEventListener("click", function() {
    // Get values
    let budgetValue = Number(BudgetInput.value);
    let itemName = ItemInput.value.trim();
    let costValue = Number(CostInput.value);

    // Validate inputs
    if (!budgetValue || !itemName || !costValue) {
        alert("Please enter a budget, item name, and cost!");
        return;
    }

    // Update total spent
    totalSpent += costValue;
    SpentNumber.textContent = totalSpent;

    // Add expense to list
    let li = document.createElement("li");
    li.textContent = `${itemName}: ¥${costValue}`;
    ExpenseList.appendChild(li);

    // Clear item and cost inputs
    ItemInput.value = "";
    CostInput.value = "";

    // Budget warning & dynamic color
    if (totalSpent > budgetValue) {
        SpentNumber.style.color = "#ff4d4d"; // red
        WarningMessage.style.display = "block";
        ExpenseButton.disabled = true;        // stop adding more
    } else if (totalSpent >= budgetValue * 0.8) {
        SpentNumber.style.color = "#ffa500"; // orange
        WarningMessage.style.display = "none";
        ExpenseButton.disabled = false;
    } else {
        SpentNumber.style.color = "#28a745"; // green
        WarningMessage.style.display = "none";
        ExpenseButton.disabled = false;
    }
});