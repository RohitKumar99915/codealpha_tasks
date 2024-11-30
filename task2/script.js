const display = document.getElementById('display');
const history = document.getElementById('history');

// Toggle the history display
function toggleHistory() {
    if (history.style.display === 'none' || history.style.display === '') {
        history.style.display = 'block';  // Show history
    } else {
        history.style.display = 'none';   // Hide history
    }
}

// Input value into the display
function input(value) {
    if (display.innerText === "0" && value !== '.') {
        display.innerText = value;  // Replace 0 with the new value
    } else {
        display.innerText += value;  // Append the value to the current display
    }
}

// Clear the display and history
function clearDisplay() {
    display.innerText = "0";
    history.innerHTML = "";  // Clear history as well
}

// Delete the last character in the display
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || "0";  // Remove last character or reset to "0" if empty
}

// Perform the calculation
function calculate() {
    try {
        let expression = display.innerText
            .replace('×', '*')   // Handle multiplication symbol
            .replace('÷', '/')   // Handle division symbol
            .replace('−', '-')   // Handle subtraction symbol
            .replace('^', '**'); // Handle exponentiation symbol (x^y)

        // Check for division by zero
        if (expression.includes('/') && expression.includes('0')) {
            display.innerText = "Cannot divide by zero";
            return;
        }

        // Calculate the result using the Function constructor
        const result = Function('"use strict";return (' + expression + ')')();
        display.innerText = result;  // Display the result
        addToHistory(`${expression} = ${result}`);  // Add calculation to history
    } catch (error) {
        display.innerText = "Error";  // Display error if invalid expression
    }
}

// Add the calculation to history
function addToHistory(entry) {
    const historyItem = document.createElement("div");
    historyItem.innerText = entry;  // Set the entry text
    history.appendChild(historyItem);  // Append entry to history
}

// Initialize display and hide history on page load
window.onload = () => {
    display.innerText = "0";
    history.style.display = "none";  // Hide history on page load
};
