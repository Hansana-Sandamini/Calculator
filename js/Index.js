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
    resultField.classList.remove('bold-and-large-text');
}

function clearInput() {
    document.getElementById('input-field').value = "";
    document.getElementById('result').value = "";
    operatorPressed = false; 

    document.getElementById('result').classList.remove('bold-and-large-text');
}

function calculateResult() {
    let inputField = document.getElementById('input-field');
    let resultField = document.getElementById('result');
    let expression = inputField.value;

    let result = eval(expression);
    resultField.value = result;
    resultField.classList.add('bold-and-large-text');
}