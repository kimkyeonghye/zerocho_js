// 별찍기 - 6

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
    for (let j = 0; j < 5; j++) {
        if (j < 4 - i) {
            star += ' ';
        } else {
            star += '*';
        }
    }
    star += '\n';
}
console.log(star);

for (let i = 0; i < 5; i++) {
    console.log(' '.repeat(4 - i) + '*'.repeat(i + 1));
}
