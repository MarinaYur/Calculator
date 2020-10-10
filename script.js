// class Calculator {
//     constuctor () {

//     }
// }

document.addEventListener("DOMContentLoaded", () => {

    const previousOperand = document.querySelector('.previous-operand');
    const currentOperand = document.querySelector('.current-operand');
    const numbers = document.querySelectorAll('.number');
    const operations = document.querySelectorAll('.operation, .operation-equally');
    const currentOperandValue = currentOperand.innerText;
    const previousOperandValue = previousOperand.innerText;
    // mathCalculations ();


    numbers.forEach((number) => number.addEventListener('click', (e) => {
        currentOperand.innerText += e.target.innerText;
        console.log(typeof currentOperand.innerText);

    }))
    operations.forEach((operation) => operation.addEventListener('click', (e) => {
        if (currentOperand.innerText !== "") {
            if(previousOperand.innerText == "") {
        previousOperand.innerText += Number(currentOperand.innerText) + e.target.innerText;
            } else {
                // console.log(operation);
                // console.log(typeof operation);
                mathCalculations (operation, e);
            }
        } else return;
        currentOperand.innerText = '';

        
        // console.log(typeof currentOperand.innerText);
    }))

    function mathCalculations (a, e) {
        switch (a.innerText) {
            case '+': previousOperand.innerText = parseInt(previousOperand.innerText) + Number(currentOperand.innerText) + e.target.innerText;
            break;
        }
    }



});