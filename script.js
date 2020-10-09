// class Calculator {
//     constuctor () {

//     }
// }

document.addEventListener("DOMContentLoaded", () => {

    const previousOperand = document.querySelector('.previous-operand');
    const currentOperand = document.querySelector('.current-operand');
    const number = document.querySelectorAll('.number');

    document.querySelector('.calculator-grid').addEventListener('click', (e) => {
        console.log(e.target);
    })
});