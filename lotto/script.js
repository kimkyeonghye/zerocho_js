const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

// 1 ~ 45 까지 들어있는 배열 만듦
const candidate = Array(45)
    .fill()
    .map((element, index) => index + 1);

// 랜덤으로 공 뽑기
const shuffle = [];
while (candidate.length > 0) {
    const random = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(random, 1);
    const value = spliceArray[0];
    shuffle.push(value);
}

// 공 색칠
const paintingBalls = (number, $tag) => {
    if (number < 10) {
        $tag.classList.add('red');
    } else if (number < 20) {
        $tag.classList.add('orange');
    } else if (number < 30) {
        $tag.classList.add('yellow');
    } else if (number < 40) {
        $tag.classList.add('blue');
    } else {
        $tag.classList.add('green');
    }
};

// 공 정렬
const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];
console.log(winBalls, bonus);

// 초 마다 공 나타내기
const showBalls = (number, $target) => {
    const $ball = document.createElement('div');
    $ball.className = 'ball';
    paintingBalls(number, $ball);
    $ball.textContent = number;
    $target.appendChild($ball);
};

for (let i = 0; i < winBalls.length; i++) {
    setTimeout(() => {
        showBalls(winBalls[i], $result);
    }, (i + 1) * 1000);
}
setTimeout(() => {
    showBalls(bonus, $bonus);
}, 7000);
