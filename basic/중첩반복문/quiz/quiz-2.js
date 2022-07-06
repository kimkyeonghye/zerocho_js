// 별찍기 - 1

// 문제
/* ===================
 *
 **
 ***
 ****
 *****
 =================== */
let star = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i + 1; j++) {
        star = star + '*';
    }
    star = star + '\n';
}
console.log(star);

// 함수 사용
for (let i = 0; i < 5; i++) {
    console.log('*'.repeat(i + 1));
}
