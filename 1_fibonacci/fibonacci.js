function fibsRec(n) {
    console.log(`This was printed recursively: ${n}`);

    let fibonacciArr = []
    if(n === 0) return fibonacciArr;
    if(n === 1) {
        fibonacciArr.push(0);
        return fibonacciArr;
    }
    if(n === 2){ 
        fibonacciArr = fibsRec(1);
        fibonacciArr.push(1);
        return fibonacciArr;
    }
    fibonacciArr = fibsRec(n-1);  
    let last = fibonacciArr.length - 1;
    let secLast = fibonacciArr.length - 2;
    fibonacciArr.push(fibonacciArr[last] + fibonacciArr[secLast]);
    return fibonacciArr;
}

console.log(fibsRec(8));
// fibsRec(8);

// function fibs(n) {
//     let fibonacciArr = [];
//     if(n === 0) return fibonacciArr;
//     if(n === 1) {
//         fibonacciArr.push(0);
//         return fibonacciArr
//     }
//     if(n === 2){ 
//         fibonacciArr.push(0, 1);
//         return fibonacciArr;
//     }
//     fibonacciArr.push(0, 1);
//     for(let i = 3; i <= n; i++){
//         let last = fibonacciArr.length - 1;
//         let secLast = fibonacciArr.length - 2;
//         fibonacciArr.push(fibonacciArr[last] + fibonacciArr[secLast]);
//     }
//     return fibonacciArr
// }