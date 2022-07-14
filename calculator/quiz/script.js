/*********************************************************************************************************
 * '=' 누른 후 연이어 계산하기
 * '-' 구현하기
 * *******************************************************************************************************/

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
    if (event.target.textContent === '-' && !firstNumber) {
        firstNumber += event.target.textContent;
        $result.value = event.target.textContent;
        return;
    }
    if (secondNumber) {
        onCalculate();
        firstNumber = $result.value;
        secondNumber = '';
    }
    if (firstNumber) {
        operator = event.target.textContent;
        $operator.value = event.target.textContent;
    } else {
        alert('숫자를 먼저 입력하세요.');
    }
};

const onCalculate = () => {
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
};

document.querySelector('#plus').addEventListener('click', onClickOperator);
document.querySelector('#minus').addEventListener('click', onClickOperator);
document.querySelector('#divide').addEventListener('click', onClickOperator);
document.querySelector('#multiply').addEventListener('click', onClickOperator);

document.querySelector('#calculate').addEventListener('click', () => {
    if (!secondNumber) {
        alert('숫자를 먼저 입력하세요.');
        return;
    }
    onCalculate();
    $operator.value = '';
    firstNumber = $result.value;
    operator = '';
    secondNumber = '';
});

document.querySelector('#clear').addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    $operator.value = '';
    $result.value = '';
});
