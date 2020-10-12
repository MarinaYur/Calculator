document.addEventListener("DOMContentLoaded", () => {

    const previousOperand = document.querySelector('.previous-operand');
    const currentOperand = document.querySelector('.current-operand');
    const numbers = document.querySelectorAll('.number');
    const operations = document.querySelectorAll('.operation, .operation-equally');
    const clearAll = document.querySelector('.clear-all');
    const deleteChar = document.querySelector('.delete-character');
    let ideAquals = 0;
    numbers.forEach((number) => number.addEventListener('click', (e) => {
        if (currentOperand.innerText.includes('.') && number.innerText == '.') return;
        if (ideAquals && currentOperand.innerText !== '-') {
            currentOperand.innerText = '';
            currentOperand.innerText += e.target.innerText;
            ideAquals = 0;
            return;
        }
        currentOperand.innerText += e.target.innerText;
    }))
    
    operations.forEach((operation) => operation.addEventListener('click', (e) => {   
        let mathSign = previousOperand.innerText[previousOperand.innerText.length - 1];  
        if (currentOperand.innerText !== "" && currentOperand.innerText !== "-") {
            if (previousOperand.innerText == "") {
                if (operation.innerText !== '=') {
                     previousOperand.innerText = Number(currentOperand.innerText) + e.target.innerText;
                     currentOperand.innerText = '';
                } else return;
            } else {                
                mathCalculations (mathSign, e);
            }              
        } else if (operation.innerText == '-' && !currentOperand.innerText.includes('-')) {
            currentOperand.innerText += '-';
        }
        
        
        else return;
    }))

    function mathCalculations (a, event) {
        let previousOperandValue = parseFloat(previousOperand.innerText)
        switch (a) {
            case '+': previousOperand.innerText = previousOperandValue + Number(currentOperand.innerText);
                break;
            case '-': previousOperand.innerText = previousOperandValue - Number(currentOperand.innerText);
                break;
            case '/': previousOperand.innerText = previousOperandValue / Number(currentOperand.innerText)
                break;
            case '*': previousOperand.innerText = previousOperandValue * Number(currentOperand.innerText);
                break;
        }
        if (event.target.innerText == '=') {
            ideAquals = 1;
            currentOperand.innerText = +(Number(previousOperand.innerText)).toFixed(2);
            previousOperand.innerText = '';
            return;                   
        } else if (event.target.innerText == '√'){
            currentOperand.innerText = currentOperand.innerText + '√';
        }
        
        else {
            previousOperand.innerText += event.target.innerText;
            currentOperand.innerText = '';
            }
    }
    // clear all digits using button AC
    clearAll.addEventListener ('click', () => {
        currentOperand.innerText = '';
        previousOperand.innerText = '';
    })

    //delete one or some characters
    deleteChar.addEventListener('click', () => {
        currentOperand.innerText = currentOperand.innerText.substr(0, currentOperand.innerText.length - 1);       
    })
});