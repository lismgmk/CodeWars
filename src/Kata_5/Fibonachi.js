// The Fibonacci numbers are the numbers in the following integer sequence (Fn):
//
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
//
// export function Fibonachi() {
//
//
//     function productFib(prod) {
//
//         let arr = [0,1]
//         for (let i = 0; i < prod; i++){
//             arr[i+2] = arr[i]+arr[i+1]
//             if(arr[i+2]>prod){
//                 break
//             }
//         }
//       let arr3 = []
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i] * arr[i+1] === prod){
//                 arr3 = [arr[i], arr[i+1], true]
//                 break
//             }
//             if(arr[i] * arr[i+1] > prod){
//                 arr3 = [arr[i], arr[i+1], false]
//                 break
//             }
//         }
//     }
//
//
//     return (
//         <>
//             {productFib(5895)}
//
//         </>
//     )
// }
//
//
// // Best solutions
// //
// // // №1
// function productFib(prod){
//     var n = 0;
//     var nPlus = 1;
//     while(n*nPlus < prod) {
//         nPlus = n + nPlus;
//         n = nPlus - n;
//     }
//     return [n, nPlus, n*nPlus===prod];
// }
//
// //
// // // №2
// //
// function productFib(prod){
//     let [a, b] = [0, 1];
//     while(a * b < prod) [a, b] = [b, a + b];
//      previos value like (cur value) current value like sum (prev, cur)
//     return [a, b, a * b === prod];
// }
//
// // №3
// //
// //
// function productFib(prod){
//     var a = 1
//     var b = 1;
//     while (a*b < prod) {
//         var next = a+b;
//         a = b;
//         b = next;
//     }
//     return [a, b, a*b===prod];
// }
//
// // №4
// //
// //
// function productFib( prod ) // mathy way
// {
//     const r = ( 1 + Math.sqrt(5) ) / 2;
//     let fib1 = Math.round( Math.sqrt( prod / r ) ),
//         fib2 = Math.round( fib1 * r );
//     if ( fib1 * fib2 === prod ) return [ fib1, fib2, true ];
//     for ( [fib1, fib2] = [0, 1]; fib1 * fib2 < prod; [fib1, fib2] = [fib2, fib1 + fib2] );
//     return [ fib1, fib2, false ];
// }
//
// // x = fib(m-1), y = fib(m), n = prod;
// // r = ( 1 + Math.sqrt(5) ) / 2; // r = golden ratio
// // r = 1 + 1 / r, x * r = y; // properties of golden ratio and fib
// // fib(m) * fib(m+1) = n;
// // y * ( x + y ) = n;
// // y * x + y**2 = n;
// // y * y / r + y**2 = n;
// // y**2 / r + y**2 = n;
// // y**2 * ( 1 + 1 / r ) = n;
// // y**2 * r = n;
// // y**2 = n / r;
// // y = Math.sqrt( n / r );