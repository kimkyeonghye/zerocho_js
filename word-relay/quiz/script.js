/*********************************************************************************************************
 * 끝말잇기 게임을 응용해 쿵쿵따 게임 만들기
 * - 입력할 수 있는 단어를 세 글자로 고정하고 세 글자가 아니라면 다시 입력하라고 표시하세요.
 * - prompt 함수를 사용해 몇 명이 참가할지를 선택할 때 사용자가 취소를 누르면 다음 코드가 실행되지 않게 해주세요.
 * *******************************************************************************************************/

const number = parseInt(prompt('몇 명이 참가하나요?'));

if (number) {
    const $button = document.querySelector('button');
    const $input = document.querySelector('input');
    const $word = document.querySelector('#word');
    const $order = document.querySelector('#order');

    let word; // 제시어
    let newWord; // 새로 입력한 단어

    const onClickButton = () => {
        if (!word || (word[word.length - 1] === newWord[0] && newWord.length === 3)) {
            // 제시어가 비어있는가?
            // 비어있다
            word = newWord; // 입력한 단어가 제시어가 된다.
            $word.textContent = word;
            const order = parseInt($order.textContent);
            if (order + 1 > number) {
                $order.textContent = 1;
            } else {
                $order.textContent = order + 1;
            }
        } else {
            // 올바르지 않은가
            alert('올바르지 않은 단어이거나 3글자가 아닙니다.');
        }
        $input.value = '';
        $input.focus();
    };

    const onInput = (event) => {
        newWord = event.target.value;
    };
    $button.addEventListener('click', onClickButton);
    $input.addEventListener('input', onInput);
}
