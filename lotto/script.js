const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

// 45개의 빈 배열을 만든 후, 그 안에 undefined로 45개를 가득 채운 다음 index에 1 더하기
const candidate = Array(45)
    .fill()
    .map((element, index) => index + 1);

const shuffle = [];
while (candidate.length > 0) {
    const random = Math.floor(Math.random() * candidate.length);
    shuffle.push(candidate[random]);
    candidate.splice(random, 1);
}
console.log(candidate);
console.log(shuffle);

const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];
console.log(winBalls, bonus);
