let displayValue = '';
let memoryValue = '';

function appendToDisplay(value) {
  if (!isNaN(value) || value === '.' || ['+', '-', '*', '/', '%'].includes(value)) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
  } else {
    alert('Only numbers and arithmetic symbols (+, -, *, /, %) are allowed');
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
  } catch (error) {
    alert('Invalid expression');
  }
}

function clearMemory() {
  memoryValue = '';
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

window.addEventListener('keydown', function (e) {
  const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '%', 'Enter', 'Backspace', 'Delete'];
  const key = e.key;
  if (allowedKeys.includes(key)) {
    if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace' || key === 'Delete') {
      clearDisplay();
    } else {
      appendToDisplay(key);
    }
  } else {
    alert('Only numbers and arithmetic symbols (+, -, *, /, %) are allowed');
  }
});
