document.addEventListener("DOMContentLoaded", () => {
    const previousOperand = document.querySelector('.previous-operand');
    const currentOperand = document.querySelector('.current-operand');
    const numbers = document.querySelectorAll('.number');
    const operations = document.querySelectorAll('.operation, .operation-equally');
    const clearAll = document.querySelector('.clear-all');
    const deleteChar = document.querySelector('.delete-character');
    const squareRoot = document.querySelector('.square-root');
    const exponentiation = document.querySelector('.exponentiation');
    let idAquals = 0;
    numbers.forEach((number) => number.addEventListener('click', (e) => {
        if (currentOperand.innerText.includes('^')) {
            currentOperand.innerText = parseFloat(currentOperand.innerText) ** e.target.innerText;
            return;
        }
        if (currentOperand.innerText.includes('.') && number.innerText == '.') return;
        if (idAquals && currentOperand.innerText !== '-') {
            currentOperand.innerText = '';
            currentOperand.innerText += e.target.innerText;
            idAquals = 0;
            return;
        }
        currentOperand.innerText += e.target.innerText;
    }))
    // simple mathematical operations
    operations.forEach((operation) => operation.addEventListener('click', (e) => {   
        let mathSign = previousOperand.innerText[previousOperand.innerText.length - 1];  
        if (currentOperand.innerText !== "" && currentOperand.innerText !== ('-')) {
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
        } else return;
    }))
    //square root operation 
    squareRoot.addEventListener('click', () => {
        if (currentOperand.innerText !== '' && currentOperand.innerText !== '-') {
            if (currentOperand.innerText.includes('-')) {
                alert('Error: it is impossible to extract the square root of a negative number');
            } else {
            currentOperand.innerText = Math.sqrt(currentOperand.innerText)
            }
        }
    })
    // exponentiation operation
    exponentiation.addEventListener('click', () => {
        if (currentOperand.innerText !== '' && currentOperand.innerText !== '-' && !currentOperand.innerText.includes('^')) {
            currentOperand.innerText += '^';
        }
    })   
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
            idAquals = 1;
            currentOperand.innerText = +(Number(previousOperand.innerText)).toFixed(6);
            previousOperand.innerText = '';
            return;                   
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
        currentOperand.innerText = currentOperand.innerText.substring(0, currentOperand.innerText.length - 1);       
    })
});