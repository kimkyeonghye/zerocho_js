const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

// 45개의 빈 배열을 만든 후, 그 안에 undefined로 45개를 가득 채운 다음 index에 1 더하기
const candidate = Array(45)
    .fill()
    .map((element, index) => index + 1);

const shuffle = [];
while (candidate.length > 0) {
    const random = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(random, 1);
    const value = spliceArray[0];
    shuffle.push(value);
}

const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];
console.log(winBalls, bonus);

const showBalls = (number, $target) => {
    const $ball = document.createElement('div');
    $ball.className = 'ball';
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
