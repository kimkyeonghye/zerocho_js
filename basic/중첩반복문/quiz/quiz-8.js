// 별찍기 - 7

// 문제
/* ===================
    *
   ***
  *****
   ***
    *
 =================== */
for (let i = 1; i < 6; i++) {
    console.log(' '.repeat(2 - (5 % i)) + '*'.repeat((5 % i) * 2 + 1));
}
