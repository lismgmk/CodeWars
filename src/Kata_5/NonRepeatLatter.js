// export function NonRepeatLatter() {
//     let arrHelp = []
//
//
//     function firstNonRepeatingLetter(s) {
//
//         // let arr = s.split('')
//         // arr.map((i, index, array) => {
//         //     arrHelp = arr.splice(index, 1)
//         //     if (arr.indexOf(i) === -1) {
//         //         k = i
//         //     }
//         //
//         //
//         // })
//
//         let k = ''
//         let arr = s.toLowerCase().split('')
//         let arr2 = [...arr]
//
//         for(let i = 0; i < arr.length; i++){
//             arr2=[...arr]
//             arr2.splice(i, 1)
//             if(arr2.indexOf(arr[i]) === -1){
//                 k = i
//                 break
//             }
//
//         }
//
//
//         console.log(k, 'finish')
//         return s[k]
//     }
//
//     return (
//         <>
//             {firstNonRepeatingLetter('moonmen')}
//             {firstNonRepeatingLetter('sTress')}
//             {firstNonRepeatingLetter('a')}
//             {firstNonRepeatingLetter('')}
//         </>
//     )
// }
//
//
// // Best solutions
// //
// // // №1
// function firstNonRepeatingLetter(s) {
//     for(var i in s) {
//         if(s.match(new RegExp(s[i],"gi")).length === 1) {
//             return s[i];
//         }
//     }
//     return '';
// }
// //
//
//
// //
// // // №2
// //
// function firstNonRepeatingLetter(s) {
//     var t=s.toLowerCase();
//     for (var x=0;x<t.length;x++)
//         if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
//             return s[x];
//     return "";
// }
//
// // №3
// //
// function firstNonRepeatingLetter(str){
//     return str.split('').find(e => str.match(new RegExp(`${e}`, 'gi')).length === 1) || ''
// }
//
// №4
//
// function firstNonRepeatingLetter(s) {
//     let str = s.toLowerCase();
//     for(let i = 0; i < str.length; i++) {
//         if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//             return s[i];
//         }
//     }
//     return "";
// }