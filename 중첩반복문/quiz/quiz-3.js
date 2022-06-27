// 별찍기 - 2

// 문제
/* ===================
 *****
 ****
 ***
 **
 *
 =================== */
let star = '';
for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        star = star + '*';
    }
    star = star + '\n';
}
console.log(star);

// 함수 사용
for (let i = 5; i >= 0; i--) {
    console.log('*'.repeat(i));
}

// i가 0일 때
let star2 = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5 - i; j++) {
        star2 = star2 + '*';
    }
    star2 = star2 + '\n';
}
console.log(star2);

for (let i = 0; i < 5; i++) {
    console.log('*'.repeat(5 - i));
}
