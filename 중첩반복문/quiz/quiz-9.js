// 별찍기 - 7

// 문제
/* ===================
     *
    ***
   *****
  *******
 *********
 =================== */
let star = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4 - i; j++) {
        star += ' ';
    }
    for (let k = 0; k <= i * 2; k++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);

for (let i = 0; i < 5; i++) {
    console.log(' '.repeat(4 - i) + '*'.repeat(2 * i + 1));
}
