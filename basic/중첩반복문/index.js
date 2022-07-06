for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) continue;
    for (let j = 0; j < 5; j++) {
        if (j % 2 === 0) continue;
        for (let k = 0; k < 5; k++) {
            if (k % 2 === 0) continue;
            console.log(i, j, k);
        }
    }
}

// i==0 continue
// i==1 j==0 continue
// i==1 j==1 k==0 continue
// i==1 j==1 k==1 console.log(1,1,1);
// i==1 j==1 k==2 continue
// i==1 j==1 k==3 condole.log(1,1,3);
// i==1 j==1 k==4 continue
// i==1 j==1 k==5 false
// i==1 j==2 continue
// i==1 j==3 k==0 continue
// i==1 j==3 k==1 console.log(1,3,1);
// i==1 j==3 k==2 continue
// i==1 j==3 k==3 console.log(1,3,3);
// i==1 j==3 k==4 continue
// i==1 j==3 k==5 false
// i==1 j==4 continue
// i==1 j==5 false
// i==2 continue
// i==3 j==0 continue
// i==3 j==1 k==0 continue
// i==3 j==1 k==1 console.log(3,1,1);
// i==3 j==1 k==2 continue
// i==3 j==1 k==3 console.log(3,1,3);
// i==3 j==1 k==4 continue
// i==3 j==1 k==5 false
// i==3 j==2 continue
// i==3 j==3 k==0 continue
// i==3 j==3 k==1 console.log(3,3,1);
// i==3 j==3 k==2 continue
// i==3 j==3 k==3 console.log(3,3,3);
// i==3 j==3 k==4 continue;
// i==3 j==3 k==5 false
// i==3 j==4 continue
// i==3 j==5 false
// i==4 continue
// i==5 false

// 결과
/* ***********************
1 1 1
1 1 3
1 3 1
1 3 3
3 1 1
3 1 3
3 3 1
3 3 3
 *********************** */
