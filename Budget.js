
console.log("JS is working!");


let BudgetInput = document.querySelector(".BudgetInput input");
let ItemInput = document.querySelector(".ItemInput input");
let CostInput = document.querySelector(".CostInput input");
let ExpenseButton = document.querySelector(".ExpenseButton button");
let SpentNumber = document.querySelector(".SpentNumber");
let ExpenseList = document.querySelector(".ExpenseList");

// Keep track of total spent
let totalSpent = 0;

// Add click event to button
ExpenseButton.addEventListener("click", function() {
    // Get values from inputs
    let budgetValue = Number(BudgetInput.value);
    let itemName = ItemInput.value;
    let costValue = Number(CostInput.value);

    // Basic validation
    if (!itemName || !costValue) {
        alert("Please enter an item name and cost!");
        return;
    }

    // Update total spent
    totalSpent += costValue;
    SpentNumber.textContent = totalSpent;

    // Add the expense to the list
    let li = document.createElement("li");
    li.textContent = `${itemName}: ¥${costValue}`;
    ExpenseList.appendChild(li);

    // Clear item and cost inputs
    ItemInput.value = "";
    CostInput.value = "";
});