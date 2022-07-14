let firstNumber = '';
let secondNumber = '';
let operator = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

const onClickNumber = (event) => {
    if (!operator) {
        // 비어있다
        firstNumber += event.target.textContent;
        $result.value += event.target.textContent;
        return;
    }
    // 비어있지 않다
    if (!secondNumber) {
        // secondNumber를 눌렀을 때 화면을 지워라
        $result.value = '';
    }
    secondNumber += event.target.textContent; // 클릭한 버튼에 글자를 가져옴
    $result.value += event.target.textContent;
};

document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);

const onClickOperator = (event) => {
    if (firstNumber) {
        operator = event.target.textContent;
        $operator.value = event.target.textContent;
    } else {
        alert('숫자를 먼저 입력하세요.');
    }
};
document.querySelector('#plus').addEventListener('click', onClickOperator);
document.querySelector('#minus').addEventListener('click', onClickOperator);
document.querySelector('#divide').addEventListener('click', onClickOperator);
document.querySelector('#multiply').addEventListener('click', onClickOperator);

document.querySelector('#calculate').addEventListener('click', () => {
    if (secondNumber) {
        switch (operator) {
            case '+':
                $result.value = parseInt(firstNumber) + parseInt(secondNumber);
                break;
            case '-':
                $result.value = parseInt(firstNumber) - parseInt(secondNumber);
                break;
            case '*':
                $result.value = parseInt(firstNumber) * parseInt(secondNumber);
                break;
            case '/':
                $result.value = parseInt(firstNumber) / parseInt(secondNumber);
                break;
        }
    } else {
        alert('숫자를 먼저 입력하세요.');
    }
});
document.querySelector('#clear').addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    $operator.value = '';
    $result.value = '';
});
