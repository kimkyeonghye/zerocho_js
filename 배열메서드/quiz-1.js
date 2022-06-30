// 다음 배열에서 '라'를 모두 제거하세요. indexOf 와 splice를 사용하세요.

// for문
const arr = ['가', '라', '다', '라', '마', '라'];
for (let i = 0; i < arr.length; i++) {
    let index = arr.indexOf('라');
    arr.splice(index, 1);
}
console.log(arr);

// while문
const arr1 = ['가', '라', '다', '라', '마', '라'];
let index1 = arr1.indexOf('라');
while (index1 > -1) {
    arr1.splice(index1, 1);
    index1 = arr1.indexOf('라');
}
console.log(arr1);
