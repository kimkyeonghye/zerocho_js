// 별찍기 - 5

// 문제
/* ===================
 *****
  ****
   ***
    **
     *
 =================== */
let star = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (j < i) {
            star += ' ';
        } else {
            star += '*';
        }
    }
    star += '\n';
}
console.log(star);

for (let i = 0; i < 5; i++) {
    console.log(' '.repeat(i) + '*'.repeat(5 - i));
}
