const $form = document.querySelector('#form');
const $input = document.querySelector('#input');
const $alert = document.querySelector('#alert');
const $logs = document.querySelector('#logs');
const $gameRestart = document.querySelector('#game-restart');

// const numbers = [];
const numbers = Array(9)
    .fill()
    .map((element, index) => {
        return index + 1;
    });

const answer = [];
for (let n = 0; n < 4; n++) {
    const index = Math.floor(Math.random() * numbers.length);
    answer.push(numbers[index]);
    numbers.splice(index, 1);
}

const tries = [];
const checkInput = (value) => {
    if (!parseInt(value)) {
        // 숫자인가
        return ($alert.textContent = '숫자를 입력해주세요.');
    }
    if (value.length !== 4) {
        // 길이가 4자리 인가
        return ($alert.textContent = '4자리 숫자를 입력해주세요.');
    }
    if (new Set(value).size !== 4) {
        // 중복된 숫자가 있는가
        return ($alert.textContent = '중복되지 않게 입력해주세요.');
    }
    if (tries.includes(value)) {
        // 이미 시도한 값인가
        return ($alert.textContent = '이미 시도한 값입니다.');
    }
    return true;
};

let out = 0;
const onCount = (value) => {
    let strike = 0;
    let ball = 0;
    answer.forEach((element, i) => {
        const index = value.indexOf(element);
        if (index > -1) {
            if (index === i) {
                strike++;
            } else {
                ball++;
            }
        }
    });

    if (strike === 0 && ball === 0) {
        out++;
    }
    console.log(strike, ball, out);
    $logs.append(
        `${value} - 스트라이크: ${strike} / 볼: ${ball} / 아웃: ${out}`,
        document.createElement('br'),
    );
};

const checkAnswer = (value) => {
    if (answer.join('') === value) {
        $logs.innerHTML = '<strong>🎉정답입니다!🎉</strong> <br><br> 게임을 새로 시작하시겠습니까?';
        $form.style.display = 'none';
        $gameRestart.classList.add('on');
    }
    if (tries.length >= 9 || out === 3) {
        $logs.innerHTML = `<strong>😢실패하셨습니다!😢</strong> <br> 정답은 <strong>${answer.join(
            '',
        )}</strong> 입니다. <br><br> 게임을 새로 시작하시겠습니까?`;
        $form.style.display = 'none';
        $gameRestart.classList.add('on');
    }
};

$form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = $input.value; // 사용자가 입력하면 변수에 저장
    $input.value = ''; // 입력한 글자 지워줌

    checkInput(value); // 입력한 숫자 검증
    if (checkInput(value) === true) {
        tries.push(value);
        $alert.textContent = '';
    } else {
        return;
    }
    onCount(value);
    checkAnswer(value);
});

$gameRestart.addEventListener('click', () => {
    location.reload();
});

console.log(answer);
