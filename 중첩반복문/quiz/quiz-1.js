// 구구단을 출력하되, 결과에 짝수가 하나도 나오지 않게 해보세요. continue문을 사용하세요
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        let result = i * j;
        if (result % 2 === 0) continue;
        console.log(`${i} X ${j} = ${result}`);
    }
}
