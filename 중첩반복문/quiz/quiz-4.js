// 별찍기 - 3

// 문제
/* ===================
 *
 ***
 *****
 *******
 *********
 =================== */

for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log('*'.repeat(i));
}

let star = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i * 2; j++) {
        star = star + '*';
    }
    star = star + '\n';
}
console.log(star);
