let operatorPressed = false; 

function displayValue(value) {
    let inputField = document.getElementById('input-field');
    let resultField = document.getElementById('result');

    if (['+', '-', '*', '/'].includes(value)) {
        inputField.value += ` ${value} `;
        resultField.value = ""; 
        operatorPressed = true;
    } else {
        inputField.value += value;

        if (operatorPressed) {
            resultField.value = value; 
            operatorPressed = false; 
        } else {
            resultField.value += value; 
        }
    }
}

function clearInput() {
    document.getElementById('input-field').value = "";
    document.getElementById('result').value = "";
    operatorPressed = false; 
}

function calculateResult() {
    let inputField = document.getElementById('input-field');
    let resultField = document.getElementById('result');
    let expression = inputField.value;

    let result = eval(expression);
    resultField.value = result;
}