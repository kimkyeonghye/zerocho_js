// 별찍기 - 4

// 문제
/* ===================
 *********
 *******
 *****
 ***
 *
 =================== */
let star = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= 8 - i * 2; j++) {
        star = star + '*';
    }
    star = star + '\n';
}
console.log(star);

for (let i = 0; i < 5; i++) {
    console.log('*'.repeat(i * 2 + 1));
}
