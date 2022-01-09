
function All_old_issues() {

    //   Kata 32 (-Done)
//   solution('abc') // should return ['ab', 'c_']
//   solution('abcdef') // should return ['ab', 'cd', 'ef']
//
// цикл через 2 элемента
//   function solution(str){
//     var i = 0;
//     var result = new Array();
//     if (str.length % 2 !== 0) {
//       str = str + '_';
//     }
//     while (i < str.length) {
//       result.push(str[i] + str[i+1]);
//       i += 2;
//     }
//     return result;
//   }
// возвращает совпадения
//   function solution(s){
//     return (s+"_").match(/.{2}/g)||[]
//   }
// second плавающая половинка в двойном цикле каждый раз подставляется, а количество циклов нужное
//   function solution(str){
//     arr = [];
//     for(var i = 0; i < str.length; i += 2){
//       second = str[i+1] || '_';
//       arr.push(str[i] + second);
//     }
//     return arr;
//   }

    // Kata 31 (Undo)
//
//     [
//         '     *     ',
//         '    ***    ',
//         '   *****   ',
//         '  *******  ',
//         ' ********* ',
//         '***********'
//     ]
    // ["  *  "," *** ","*****"]);
    // function towerBuilder(n) {
    //     return Array.from({length: n}, function(v, k) {
    //         repeat повторяет строки n раз
    //         const spaces = ' '.repeat(n - k - 1);
    //         return spaces + '*'.repeat(k + k + 1) + spaces;
    //     });
    // }
//     / Использование стрелочной функции в качестве функции отображения для
//
// // манипулирования элементами
//     Array.from([1, 2, 3], x => x + x);
// // [2, 4, 6]

    //
    // function towerBuilder(nFloors) {
    //     var tower = [];
    //     for (var i = 0; i < nFloors; i++) {
    //         tower.push(" ".repeat(nFloors - i - 1)
    //             + "*".repeat((i * 2)+ 1)
    //             + " ".repeat(nFloors - i - 1));
    //     }
    //     return tower;
    // }


// Генерирования последовательности чисел
//     Array.from({ length: 5 }, (v, k) => k);
// [0, 1, 2, 3, 4]

    // Kata 30 (Done)

//     list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
//
// в редусе можно прописывать условия для разных элемов массива
//     function list(names){
//         return names.reduce(function(prev, current, index, array){
//             if (index === 0){
//                 return current.name;
//             }
//             else if (index === array.length - 1){
//                 return prev + ' & ' + current.name;
//             }
//             else {
//                 return prev + ', ' + current.name;
//             }
//         }, '');
//     }
//
//     function list(names) {
//         var xs = names.map(p => p.name)
//         var x = xs.pop()
//         если длина масива 1 тот частица pop делает xs 0 и в первой части возвращается x
//         return xs.length ? xs.join(", ") + " & " + x : x || ""
//     }
// регулярки метод замены replace
//     var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")

    // Kata 29 (Undo)

    ////deleteNth ([1,1,1,1],2) // return [1,1]
    //
    //   deleteNth ([20,37,20,21],1) // return [20,37,21]

    // function deleteNth(arr,x) {
    //     var cache = {};
    //     return console.log( arr.filter(function(n) {
    //запихиваем в массив через фильтр экземпляры объекта со значением меньше т
    //         console.log(cache)
    //
    //         cache[n] = (cache[n]||0) + 1;
    //         console.log( cache[n])
    //         return cache[n] <= x;
    //     }))
    //
    // }
    //
    // const deleteNth = (a, x) => {
    //     let m = {};
    //     return a.filter( v => (m[v] = m[v]+1||1) <= x );
    // }


    // Kata 28 (Done)
    //
    // a = [121, 144, 19, 161, 19, 144, 19, 11]
    // b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]


    // function comp(array1, array2) {
    //     if(array1 == null || array2 == null) return false;
    //     array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    //     return array1.map(v => v * v).every((v, i) => v == array2[i]);
    // }
    //
    // function comp(a, b) {
    //     !! преобразует значение в boolean
    //     return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
    // }
    // const comp = (array1, array2) =>
    //     Array.isArray(array1) &&
    //     Array.isArray(array2) &&
    //     array1.every(item => {
    //         const index = array2.indexOf(Math.pow(item, 2))
    //         return index > -1 ? array2.splice(index, 1) : false
    //     })


    // Kata 27 (UnDo)

    //"(){}[]"   =>  True
    // "([{}])"   =>  True
    // "(}"       =>  False
    // "[(])"     =>  False
    // "[({})](]" =>  False


    // {validBraces( "(){}[](){}[]" )}
    // function validBraces(braces){
    //     while(braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1){
    //         braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
    //     }
    //     return braces.length == 0;
    // }
    //
    // function validBraces(braces){
    //     var matches = { '(':')', '{':'}', '[':']' };
    //     var stack = [];
    //     var currentChar;
    //
    //     for (var i=0; i<braces.length; i++) {
    //         currentChar = braces[i];
    //
    //         if (matches[currentChar]) { // opening braces
    //             stack.push(currentChar);
    //         } else { // closing braces
    //             if (currentChar !== matches[stack.pop()]) {
    //                 return false;
    //             }
    //         }
    //     }
    //
    //     return stack.length === 0; // any unclosed braces left?
    // }


    // Kata 26 (UnDo)
//     Test.assertEquals(queueTime([1,2,3,4], 1), 10);
//     Test.assertEquals(queueTime([2,2,3,3,4,4], 2), 9);
// //////////////
//
//     там где минимумм плюсуем
//
//     function queueTime(customers, n) {
//     сщздаем массив с n элементами
//         var w = new Array(n).fill(0);
//         for (let t of customers) {
// ичем индекс минмального значения в массиве чисел
//             let idx = w.indexOf(Math.min(...w));
// плюсуем туда значение
//             w[idx] += t;
//         }
//         максимальное значение возвращаем
//         return Math.max(...w);
//     }
//
//
//     function queueTime(customers, registers) {
//         let arr = [];
//
//         for(let i = 0; i < registers; i++)
//             arr[i] = 0;
//
//         for(let i = 0; i < customers.length; i++) {
//             всегда пушим в нулевой элемент а потом сортируем и нулевой становится минимальным
//             arr[0] += customers[i];
//             arr.sort((a, b) => a - b);
//         }
//
//         return arr[arr.length - 1];
//     }


    // Kata 25 (Done)

    // niqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    // uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    // uniqueInOrder([1,2,2,3,3])       == [1,2,3]
    //
    // function uniqueInOrder(it) {
    //     var result = []
    //     var last
    //
    //     for (var i = 0; i < it.length; i++) {
    //         if (it[i] !== last) {
    //             result.push(last = it[i])
    //         }
    //     }
    //
    //     return result
    // }
    //
    // var uniqueInOrder=function(iterable){
    //     return [...iterable].filter((a, i) => a !== iterable[i-1])
    // }
    //
    //
    // var uniqueInOrder = function (iterable)
    // {
    //     return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
    // }
    //
    // var uniqueInOrder=function(iterable){
    //     var res = [];
    //     for (var i = 0; i < iterable.length; i++) {
    //         if (iterable[i] != iterable[i+1]) res.push(iterable[i]);
    //     }
    //     return res;
    // }

    // Kata 24 (Done)
    // longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 2)}
    // отсортировать по числу и вывести слитую строку с большей длиной
//////////////
    // function longestConsec(strarr, k) {
    // поиск большего через 3е значение
    //     var longest = "";
    // прописываем в цикле 2 условия, делаем короткий цикл на кол-во эл-тов
    //     for(var i=0;k>0 && i<=strarr.length-k;i++){


    //         var tempArray = strarr.slice(i,i+k);
    //         var tempStr = tempArray.join("");
    //         if(tempStr.length > longest.length){
    //             longest = tempStr;
    //         }
    //     }
    //     return longest;
    // }

////////////
//     function longestConsec(strarr, k) {
//         if (k <= 0 || k > strarr.length) {
//             return '';
//         }
//
//         return strarr.reduce((long, item, i) => {
//             const currString = strarr.slice(i, i + k).join('');
//                     можно обращаться к аккумулятору в самом ретурне
//             return (currString.length > long.length)
//                 ? currString
//                 : long;
//         }, '');
//     }

    //////////////
    // function longestConsec(strarr, k) {
    //     if (k <= 0 || k > strarr.length) {
    //         return "";
    //     }
    //
    //     return strarr
    //         .map((value, index) => (
    //             strarr.slice(index, index+k).join('')
    //         ))
    //         .reduce((longest, current) => current.length > longest.length ? current : longest)
    //
    // }


    // Kata 23 (unDo)
    //    [1,2,3,4,3,2,1]),3
    //        [1,100,50,-51,1,1]),1,
    // сумма левой и правой стороны равны
    //
    // findIndex => если калбэк true то возвращает индекс
    // function findEvenIndex(arr)
    // {
    //     let left = 0;
    //     let right = arr.reduce((s,n) => s + n, 0);
    //     for (let i = 0; i < arr.length; i++) {
    //         right -= arr[i];
    //         if (left === right) return i;
    //         left += arr[i];
    //     }
    //     return -1;
    // }

    // замыкание массива уменьшение и увеличение

    // function findEvenIndex(arr)
    // {
    //     var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
    //     for(var i = 0; i < arr.length; i++) {
    //         if(i > 0) left += arr[i-1];
    //         right -= arr[i];
    //
    //         if(left == right) return i;
    //     }
    //
    //     return -1;
    // }

//Kata 22 (done)
//
//     [7, 1]  =>  [1, 7]
//         [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//         [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

    // метод shift() удаляет первый эл-т массива и возвращает его!!

    // function sortArray(array) {
    //     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    //     return array.map((x) => x % 2 ? odd.shift() : x);
    // }

    //
    // function sortArray(array) {
    //     var odds = [];
    //     //loop, if it's odd, push to odds array
    //     for (var i = 0; i < array.length; ++i) {
    //         if (array[i]%2 !== 0) {
    //             odds.push(array[i]);
    //         }
    //     }
    //     //sort odds from smallest to largest
    //     odds.sort(function(a,b){
    //         return a-b;
    //     });
    //
    //     //loop through array, replace any odd values with sorted odd values
    //     for (var j = 0; j < array.length; ++j) {
    //         if (array[j]%2 !== 0) {
    //             array[j] = odds.shift();
    //         }
    //     }
    //
    //     return array;
    // }

    //////////

    // function sortArray(array) {
    //     var odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
    //     return array.map(elem => elem % 2 === 0 ? elem : odd.shift());
    // }

    // Kata 21 (done)
    //
    //   "the-stealth-warrior" gets converted to "theStealthWarrior"
    //   "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
    //
    // function toCamelCase(str){
    //     return str.split(/\-|_/).reduce(function(previous, current, index){ return camelize(previous, current, index);});
    // }
    //
    // function camelize(previous, current, index){
    //     return previous + current.capitalizeFirstLetter();
    // }
    //
    // String.prototype.capitalizeFirstLetter = function() {
    //                                 slice можно плюсовать с куском массива
    //     return this.charAt(0).toUpperCase() + this.slice(1);
    // }
/////////////
//     function toCamelCase(str){
//     выделяем все -_и первые буквы
//         var regExp=/[-_]\w/ig;          match соответствующая подстрока
//         return str.replace(regExp,function(match){
//             return match.charAt(1).toUpperCase();
//         });
//     }
/////
//     function toCamelCase(str){
//         return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w)).join('');
//     }                                                выбрать элемент charAt                 оставшийся кусок массива slice

    // Kata 20 (undone)

    // function iqTest(numbers){
    //     var nums = numbers.split(" ").map(x => x % 2);
    //     var sum = nums.reduce((a,b) => a + b);
    //     var target = sum > 1 ? 0 : 1;
    //
    //     return nums.indexOf(target) + 1;
    // }
///////////
    // function iqTest(numbers){
    //     numbers = numbers.split(" ").map(function(el){return parseInt(el)});
    //
    //     var odd = numbers.filter(function(el){ return el % 2 === 1});
    //     var even = numbers.filter(function(el){ return el % 2 === 0});
    //
    //     return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
    // }

/////////////
    // закидываем индексы в массивы
    // function iqTest(numbers){
    //     numbers = numbers.split(' ')
    //
    //     var evens = []
    //     var odds = []
    //
    //     for (var i = 0; i < numbers.length; i++) {
    //         if (numbers[i] & 1) {
    //             odds.push(i + 1)
    //         } else {
    //             evens.push(i + 1)
    //         }
    //     }
    //
    //     return evens.length === 1 ? evens[0] : odds[0]
    // }

    // Kata 19 (done)
    // AWUBWUBWUBBWUBWUBWUBC => A B C

    // function songDecoder(song){
    //     return song.replace(/(WUB)+/g," ").trim()
    // }
    //
    // var songDecoder = (song) => song.split('WUB').filter(x => x !== '').join(' ')


// Kata 18 (done)
//
//     "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//     "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
//     ""  -->  ""
//
//     variant 1
//
//     var reg = /\d/;
//
//     function order(words){
//         return words.split(' ').sort(comparator).join(' ');
//     }
//
//     function comparator(word, nextWord) {
//         return +word.match(reg) - +nextWord.match(reg)
//     }
//     variant 2
//
//     function order(words){
//         var array = words.split(' ');
//         var sortedArray = [];
//         for(i = 0; i <= array.length; i++) {
//             for(j = 0; j < array.length; j++) {
//                 if(array[j].indexOf(i) >= 0) {
//                     sortedArray.push(array[j]);
//                 }
//             }
//         }
//         return sortedArray.join(' ');
//     }
    /////////////


// Kata 17 (undone)
    // Given an array of integers, find the one that appears an odd number of times.
    // There will always be only one integer that appears an odd number of times.

    // function findOdd(A) {
    //     var obj = {};
    //     A.forEach(function(el){
    //         obj[el] ? obj[el]++ : obj[el] = 1;
    //     });
    //
    //     for(prop in obj) {
    //         if(obj[prop] % 2 !== 0) return Number(prop);
    //     }
    // }
    //
    // function findOdd(arr) {
    //     var result, num = 0;
    //
    //     arr = arr.sort();
    //     for (var i = 0; i < arr.length; i++) {
    //         if (arr[i] === arr[i+1]) {
    //             num++;
    //         } else {
    //             num++;
    //             if (num % 2 != 0) {
    //                 result = arr[i];
    //                 break;
    //             }
    //         }
    //     }
    //     return result;
    // }
    ////////////////////////////////////


    // const  spinWords = (string)=>{
    //   return string.split(' ').map(i => i.length >= 5 ? i.split('').reverse().join('') : i ).join(' ')
    // }
    // function descendingOrder(n){
    //
    //   return console.log(String((String(n).split('').map(Number).sort((a, b)=> {return b-a})).join('')))
    // }

//
//   function learnSet (arr){
// let setArr = []
//     arr.map((i)=>{
//       setArr.push((i.toLowerCase().split('').sort()).join(''))
//     })
//     let a = new Set(setArr)
//     return [...a].join('-')
// //    ;
// // return JSON.stringify()
//   }
//
//
//   let map = new Map();
//
//   map.set("name", "John");
//
//   let keys = Array.from(map.keys());
// keys.push("more")
// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
//   console.log(keys)
//
//
//   function highestRank(arr) {
// let arr3 = []
//     let arr2 = Array.from(new Set(arr))
//     let count = 0
//     let map = new Map();
//     for (let j = 0; j < arr.length; j++) {
//       for (let i = 0; i < arr2.length; i++) {
//         if (arr2.indexOf(j)) {
//           // map.set(arr[j], count++)
//           arr3.push(arr[j])
//         }
//       }
//     }
//     console.log(arr3)
//     // console.log(map)
//
//   }
//
//   return (
//       <div className="App">
//         {/*{ descendingOrder(0)}*/}
//         {/*{ learnSet(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"])}*/}
//         {highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])}
//
//
//       </div>
//   )
//
//
//

    // const consol = new Promise((res) => {
    //     setTimeout(() => {
    //         console.log(1)
    //         res()
    //     }, 1000)
    //
    // })
    //     .then(data => {
    //             return setTimeout(() => {
    //                 console.log(2)
    //             }, 1000)
    //         }
    //     )
    //     .then(data => {
    //
    //             return setTimeout(() => {
    //                 console.log(3)
    //             }, 1000)
    //         }
    //     )

    // const consol = new Promise((res) => {
    //     setTimeout(() => {
    //         console.log(1)
    //         res()
    //     }, 1000)
    //
    // })
    //     .then(data => {
    //             return setTimeout(() => {
    //                 console.log(2)
    //             }, 1000)
    //         }
    //     )
    //     .then(data => {
    //
    //             return setTimeout(() => {
    //                 console.log(3)
    //             }, 1000)
    //         }
    //     )

//
//     function convert(s) {
//         let arr1 = (s.toLowerCase()).split('')
//         let arr2 = []
//         if (new Set(arr1).size < 10) {
//             arr1.map((ell, index, array) => {
//
//                 if (index == arr1.indexOf(array[index]) && index == arr1.lastIndexOf(array[index])) {
//
//                     arr2.push(index)
//
//                 } else {
//                     arr2.push(arr1.indexOf(array[index]))
//                 }
//             })
//         }
//
//        return  function swap(arr = arr2, start = arr2[0], end = arr2[1]) {
//             let result = new Map();
//             arr.map((el, index) => {
//                 switch (el) {
//                     case start:
//                         return result.set(index, arr[end]);
//                     case end:
//                         return result.set(index, arr[start]);
//
//                     default:
//                         return result.set(index, arr[index]);
//                 }
//             });
//             return console.log((Array.from(result.values())).join(''));
//         }();
//
//
//     }
//
//     function findOdd(A) {
//         var obj = {};
//         A.forEach(function(el){
//              obj[el] ?
//                 obj[el]++
//                 :
//              obj[el] = 1;
//         });
// console.log(obj)
    // for(let pop in obj) {
    //     if(obj[pop] % 2 !== 0) return console.log(Number(pop))
    // }
    // }


    // let k
    // // while(result.length % 2 != 0){
    //     A.forEach((i, index, arr) => {
    //         // result.push(i)
    //
    //         arr.reduce((prevVal, curentVal) => {
    //
    //             if (prevVal === i) {
    //                 result.push(i)
    //             }
    //         })
    //         console.log(result)
    //     })
    //
    // // }

    // function order(words) {
    //     let k
    //     let m=[]
    //     let arr2 = []
    //     let arr = words.split(' ')
    //     arr.map((i) => {
    //         k = i.split('').sort().join('')
    //         return arr2.push(k)
    //     })
    //     arr2.sort()
    //
    //     arr2.forEach((i)=>{
    //         arr.forEach((l)=>{
    //             if(l.split('').sort().join('') === i){
    //                 m.push(l)
    //             }
    //         })
    //
    //     })
    //     return m.join(' ')
    // }

    // function toCamelCase(str) {
    //     let w = []
    //     let k = []
    //     let e = []
    //     let p = []
    //
    //     str.split('_').length > 1 ? w = str.split('_') : w = str.split('-')
    //
    //     w.forEach((i, index, arr) => {
    //         if (index > 0) {
    //             i.split('')
    //             e = i.split('')
    //             e.forEach((j, jindex) => {
    //                     if (jindex == 0) {
    //                         p.push(j[0].toUpperCase())
    //                     } else {
    //                         p.push(j)
    //                     }
    //                     return p.join('')
    //                 }
    //             )
    //
    //         }
    //         else{
    //             k.push(i)
    //         }
    //         (k.concat(p.join(''))).join('')
    //     })
    //     return  (k.concat(p.join(''))).join('')
    // }
    // function sortArray(array) {
    //    let arr = []
    //    let arrIndex = []
    //    let arrRez = []
    //     let k
    //     let m = 0
    //     array.map((i, index)=>{
    //         if(Math.abs(i) % 2 ==! 0 ){
    //             arr.push(i)
    //             arrIndex.push(index)
    //         }
    //     })
    //     console.log(arr)
    //      k = arr.sort((a, b) =>{
    //         return a - b
    //     })
    //     console.log(arr.sort((a, b) =>{
    //         return a - b
    //     }))
    //     array.forEach((i, index)=>{
    //
    //             if(arrIndex.includes(index)) {
    //                i = k[m]
    //                 arrRez.push(i)
    //                m++
    //             } else{
    //                 arrRez.push(i)
    //             }
    //     })
    //     return console.log(arrRez)
    // }

    // function findEvenIndex(arr) {
    //     let arrSum5 = []
    //     let arrSum = []
    //     let arr3 = []
    //     let arrNum = [...arr]
    //     let k
    //     let num
    //     k = arr.length
    //
    //     for (let i = 0; i < k; i++) {
    //         arrSum.push(arrNum.reduce((a, b) => {
    //             return a + b
    //         }))
    //         arrNum.shift()
    //     }
    //   arrSum5= [...arrSum]
    //     console.log(arrSum5)
    //     arrSum.splice(0, 2)
    //     console.log(arrSum)
    //     arr3 = [...arrSum]
    //     arr3.reverse()
    //     console.log(arr3)
    //     if(arrSum5[1] == 0 | arrSum5[arrSum5.length-1] == 0){
    //         num = 0
    //         return
    //     } else{
    //         for (let i = 0; i < arrSum.length; i++) {
    //             debugger
    //             if (arr3[i] === arrSum[i]) {
    //                 num = i+1
    //                 break
    //             }else{
    //                 num = -1
    //
    //             }
    //         }
    //     }

    // if (arrSum[1] == 0){
    //     num = 0
    // } else{
    //     arrSum.splice(0, 2)
    // }
    //  console.log(arrSum.shift(0, 2))
    // for(let i = 0; i < k; i++){
    //     for(let j=0; j < k; k++){
    //
    //     }
    // }
    //     console.log(num)
    //     return num
    //
    //
    // }
    // function findEvenIndex(arr)
    // {
    //     debugger
    //     var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
    //     for(var i = 0; i < arr.length; i++) {
    //         debugger
    //         if(i > 0) left += arr[i-1];
    //         right -= arr[i];
    //
    //         if(left == right) return i;
    //     }
    //
    //     return -1;
    // }

    // function longestConsec(strarr, k) {
    //     if(k <= 0 || k > strarr.length) {return ''}
    //     else{
    //         let m
    //         let m2
    //         let arr1=[]
    //         let arr2=[]
    //         strarr.forEach((i, index, array)=> {
    //             m=array.slice(index, index+k).join('').length
    //             m2=array.slice(index, index+k).join('')
    //             arr1.push(m)
    //             arr2.push(m2)
    //         })
    //         return arr2[arr1.indexOf(Math.max(...arr1))]
    //     }
    //
    // }
    // let uniqueInOrder = function (iterable) {
    //     let arr = [];
    //
    //     (typeof iterable == 'string' ? Array.from(iterable) : iterable).reduce((acc, currrent, i, a) => {
    //             if (acc == currrent) {
    //                 return acc
    //             } else {
    //                 arr.push(currrent)
    //                 return currrent
    //             }
    //         }, ''
    //     )
    //     return arr
    // }

    //  Test task 1
    //выведет только a и d

    // var a = 50
    //
    // function f() {
    //     a = 100
    //     let b = 150
    // }
    //
    // if ( true ) {
    //     a = 175
    //     let c = 200
    //     var d = 300 //выведет так как блочная область видимости
    //     const e = 400
    // }
    // f()
    // console.log(a)
    // console.log(b)
    // // console.log(c)
    // console.log(d)
    // // console.log(e)
    // Task 2
    // let a = 5
    // {
    //     a = 10 // присвоит так как у объекта нет области видимости
    // }
    // console.log(a)
    //
    // function f2() {
    //     console.log(a)
    //     a = 20
    //     var b = 20 // не выведет функциональная область видимости у вар
    // }
    //
    // // console.log(b)
    // f2()
    // console.log(a)
    // Task 3
    /*{
	let c = 100 у объекта нет области видимости но let const не подымаются
	var family = 'it-incubator'

	function f() {
		console.log(c)
	}
}
let doc = false
if ( !doc ) {
	function c() {
		console.log(family)
	}
}
f()
c()
console.log(family)
console.log(c) // выведет литерал функции с так как фия подымается наверх*/

    // /Task 1
//
// let car1 = new Promise((_, reject) => setTimeout(reject, 2000, 'Car 1 crashed in'));
// let car2 = new Promise(resolve => setTimeout(resolve, 1500, 'Car 2 completed'));
// let car3 = new Promise(resolve => setTimeout(resolve, 3000, 'Car 3 completed'));
// race возвращает первый fullfield промис
// Promise.race([car1, car2, car3])
// 	.then(value => {
// 		let result = console.log(`${value} the race.`);
// 	})
// 	.catch(err => console.log('Race is cancelled.', err));

    //Task 2
// console.log('Start');
// Promise.resolve('Success').then(console.log); // выведется последний так как микротаска идет за кодом общим
// console.log('End');

    // Task 3
// setCurrentUrl();
// console.log('The current URL is: ' + url);
//
// function setCurrentUrl() {
// 	var url = window.location.href; определяется в начале компиляции
// }
//Task 4 (undo!!!!!!!!!!!1)
// Какие ключи будут заполнены у pet1
// function Animal(size, type) {
// 	this.type = type || 'Animal';
// 	this.canTalk = false;
// }
// Animal.prototype.speak = function() {
// 	if (this.canTalk) {
// 		console.log('It spoke!');
// 	}
// }
//
// let Pet = function(size, type, name, owner) {
// 	Animal.call(this, size, type);
// 	this.size = size;
// 	this.name = name;
// 	this.owner = owner;
// }
//
// Pet.prototype = Object.create(Animal.prototype);
// let pet1 = new Pet();

//Task 5
// let array = [1,2,3,4,4,5,4,4];
// for (let i = 0; i < array.length; i++) {
// 	if (array[i] === 4){
// 		array.splice(i,1); при слайсе уменьшается длина массива и ндекс перепрыгивает в цикле на новой длине на др значение
// 	}
// }
// console.log(array);

    //Task 5a
// function Monster(){};
// Monster.prototype.growl = () => console.log('Grr!');
//  true так ка прототип одинаковый
// console.log(new Monster().growl === new Monster().growl);

//Task 6
// let first = 'Who';
// let second = 'What';
// try {
// 	try {
// 		throw new Error('Sad trombone');
// 	} catch (err) {
// 		first = 'Why';
// 		throw err;
// 	} finally {
// 		second = 'When';
// 	}
// } catch (err) {
// 	second = 'Where';
// }
//
// console.log(first);Why
// console.log(second);Where

    //Task 7
// setTimeout(() => console.log(1), 0); этот выполнится первее чем timeout в промисе
// console.log(2);
// new Promise((resolve, reject) => {
// 	setTimeout(() => reject(console.log(3), 1000));
// }).catch(() => console.log(4));
// console.log(5);
//
// 2,5,1,3,4

    //Task 8
// let date = new Date(2020, 05, 10);
// let dateDusplayOptions = {
// 	year: 'numeric',
// 	month: 'long',
// 	day: 'numeric'
// };                     снизу представление даты в зависимости от региона 'en' его можно получить через local
// let formattedDate = date.toLocaleDateString('en', dateDusplayOptions);
// console.log(formattedDate);

    // //Task 9
// let objBook = { title: 'JavaScript', }; это в двух консолях
// Object.preventExtensions(objBook); запрещает расширение объекат
// let newObjBook = objBook;
// newObjBook.author = 'Robert';
//
// console.log(objBook);
// console.log(newObjBook);

    // //Task 10 (undo!!!!)
// function getAvaliabilityMessage(item) {
// 	if ( getAvailability(item) ) { функция передается в аргумент
// 		var msg = 'Username avaliable'; почему не всплывает??
// 	}
// 	return msg;
// }
//
// function getAvailability(name) {
// 	return name === 'Eugene';
// }
//
// console.log('getAvaliabilityMessage ', getAvaliabilityMessage('newUserName'));
//     getAvaliabilityMessage  undefined

    // Task 11
// const entries = [];
// entries.push('a');
// entries.push('b', 'c');
// console.log(entries.pop()); удаляет последний элемент и возвращает его

// Task 12
// const entries = ['a', 1, true];
// принадлежит ли объект к определенному типу
// console.log(entries instanceof Array);

// // Task 13
//     const priority = new Set(['High', 'Low']);
//     function logSetElements(key, value, set) {
//         console.log(`s[${key}] = ${value}`);
//     }
//      в Set объектах в переборах i=index
//     priority.forEach(logSetElements);

// Task 14
// const ids = new Set([1, '1']);
// console.log(ids.size);2

    // Task 15
// const entries = ['a', 'b', 'c'];
// entries.length = 10;
// console.log(entries.length);10

    // Task 16
// const priority = [1, 2, 3];
// const priority100 = Array.from(
// 	priority,
// 	function(p) {
// 		return p*10 + this.adjustment;
// 	},
// 	// context for function
// 	{ adjustment: 100 }
// );
// console.log(priority100);

    // Task 17
// const ratings = [1, 2, 3, 4, 5];
// const result = ratings.reduce((start, next, index, array) =>
// 	start * next );
// console.log(result);

    // Task 18
// const priority = [,,]; 2 empty
// for (const item of priority) {
// 	console.log(item);
// }

    // Task 19
// const entries = ['a', 'b', 'c'];
// const newEntries =
// 	entries.concat(['d', 'e', 'f'], 'g', 'h');
// console.log(newEntries.length);8

    // Task 20
// const priority = ['Low', 'Normal', 'High'];
// // … - rest operator
// const [low, ...remaining] = priority;
// console.log(remaining);

    // Task 21
// let task = { isDone: false };
//            обжук прототайп назначает протоип,проверяет входит ли таск в в цепочку прототипа
// console.log( Object.prototype.isPrototypeOf(task) );true

    // Task 22
// let task1 = { id: 1 };
// let task2 = { id: 2, priority: 100 };
// let target = {};
// копирует несколько объектов в один
// Object.assign(target, task1, task2);
// console.log(target);

    // Task 23
// 'use strict';
// let task = { id: 1 };
// // нельзя добавлять удалять свойства в объект
// Object.freeze(task);
// task.id = 2;
// task.action = 'Create';
// Object.defineProperty(task, 'priority':'4', {value: 'High'})
// console.log(task);

    // Task 24
// let task = {
// 	isDone: true,
// 	estHours: 16
// };
//
// let anotherTask = task;
// если нет в родителе то ищет в ребенке
// console.log(anotherTask.isDone);

    // Task 25
// class Task {
// 	constructor() {
// 	    new.target была ли ф-ия вызвана через new возвращает ссылку на объект
// 		console.log(new.target.name);
// 	}
// }
// class UrgentTask extends Task {
// }
// let task = new UrgentTask();


// Task 26
// class Task {
// 	constructor(id = 2) {
// 		console.log('Constructing Task');
// 		this.taskId = id;
// 	}
// 	showId() {
// 		console.log(this.taskId);
// 	}
// }
// let task = new Task();
//     console.log(task.showId()) 2

    // Task 27
// class Task {
// 	constructor() {
// 		console.log('Constructing Task');
// 	}
// }
// class UrgentTask extends Task {
// 	constructor() {
// 	    ошибка super всегда первое
// 		this.action = 'Urgent  Task'
// 		super();
// 		console.log(this.action);
// 	}
// }
// let task = new UrgentTask();


// Task 28
// let Task = function(action) {
// 	this.action = action;
// 	this.done = false;
// 	this.complete = function() {
// 		this.done = true;
// 	}
// };
// let task1 = new Task('create');
// let task2 = new Task('delete');
// console.log(task1.complete === task2.complete); false
// так как ссылка на функцию которая является свойством объекта

// Task 29
// let task1 = { action: 'Create…' };
// let task2 = { action: 'Delete…' };
// let project = new Map();
// set добавляет в Map ключ значение
// project.set(task1, 'High Priority');
// console.log(project.set(task2, 'Normal Priority')) ;
// // clear удаляет все элементы в Set
// project.clear();
// console.log(project.size);

// Task 30
// let sum = function() {
// 	let x = 0;
// 	[...arguments].forEach( (arg) => {
// 		x += arg;
// 	});
// 	return x;
// }
// console.log( sum(1, 2, 3) );

    // Task 31
// let squareFunc = function square(x, y) {
// 	console.log(x * y);
// };
// так нельзя вызывать
// square(2, 3);

    // Task 32
// function square(x, y) {
// 	console.log( x * y );
// }
// let v = square(2, 3);
// console.log(v); underfind так как финкция ничего не возвращает

    // Task 33
//     let person = {
//         firstName: 'Anna',
//         lastName: 'Vasilieva',
//     };
//
//     function showFullName() {
//         console.log(`${this.firstName}
// ${this.lastName}`);
//     }
// калл привязал контектст
//     showFullName.call(person);

    // Task 34
// uniqueInteger.count = 0;
// function uniqueInteger() {
// 	return uniqueInteger.count++;
// }
// console.log( uniqueInteger() );0 инициализация
// console.log( uniqueInteger() );1 новое значение
//


// Task 35
// var callback = function(x) { console.log(x); };
// var callAClosure = function(closure) {
// 	closure(10);
// };
// callAClosure(callback);10  функция передалась в аргумент и вызвалась внутри

    // Task 36
// var x = 10;
// var capturedClosure = function() {
// 	console.log(x);
// };
// (function() {
// 	x = x * x;
// })();
// capturedClosure();100

    // Task 37
// (function() {
// // 'use strict'; this=underfined
// 	document.addEventListener('click', () => console.log(this) );
// })();


// Task 38
// let getTaskId = () => {
// 	id: return 1
// };
// console.log(getTaskId());1

//     // Task 39
// let task = {
// 	id: 123,
// 	done: function() {
// 		return () => console.log(this.id);
// 	}
// };
// let anotherTask = {
// 	id: 987
// };
// task.done().bind( anotherTask )();123????


// function p(str){
//     console.log(str.slice(0, 10).split('-').reverse().join('-'))
//     return str
// }

    // Kata 33(done)
    //
    // n^3 + (n-1)^3 + ... + 1^3 = m
    // найти сколько таких элементов в числе
    //
    //
    // function findNb(m) {
    //     var n = 0
    //     отнимаем от первого числа и гоним к нулю
    //     while (m > 0) m -= ++n**3
    //     return m ? -1 : n
    // }
    //
    // function findNb(m) {
    //     let n = 0;
    //     let sum = 0;
    //     while (sum < m) {
    //         n++;
    //         параллельно гоним второе число до первого равенства
    //         sum += Math.pow(n, 3);
    //     }
    //     return sum === m ? n : -1;
    // }

    // kata 34(done)
    //
    // Проверить является ли строка панаграмой(все буквы алфавита)
    //
    // function isPangram(string){
    //     return 'abcdefghijklmnopqrstuvwxyz'
    //         .split('')
    //         пробегает алфавит и проверяет есть ли буква из стринг
    //         .every((x) => string.toLowerCase().includes(x));
    // }
    //
    // function isPangram(string){
    //     match возвращает массив со всеми буквами и символами
    //     return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
    // }
    //
    // function isPangram(str) {
    //     var s = str.toLowerCase();
    //     var letters = "zqxjkvbpygfwmucldrhsnioate";
    //     for (var i = 0; i < 26; i++)
    //
    //       индекс оф ищет индекс по значению(charAt возвращает символ из строки по индексу)
    //         if (s.indexOf(letters.charAt(i)) == -1)
    //             return false;
    //     return true;
    // }
    // var input = document.getElementById('input');
    //
    // input.oninput = function() {
    //     document.getElementById('result').innerHTML = input.value;
    // };
//
//     Kata 35(done)
// у буков в слове номера вывести самое крупнте слово
//
//     !!!Разобрать
//     function high(words) {
//
//         const alpha = ' abcdefghijklmnopqrstuvwxyz';
//         const score = word => word.split('').reduce((a, b) => a + alpha.indexOf(b), 0);
//
//         return words
//             .split(' ')
//             .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
//             .sort((a, b) => a.score - b.score || b.pos - a.pos)
//             .pop()
//             .word;
//
//     }
//
//
//     function high(s){
//                                             charCodeAt возвращает Юникод значения
//         let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//         return s.split(' ')[as.indexOf(Math.max(...as))];
//     }
//
//     function high(string) {
//         let alf = 'abcdefghijklmnopqrstuvwxyz'
//         let arr = string.split(' ')
//         let arr2 = []
//         let val = 1
//         arr.map(i => {
//             for (let key of i) {
//
//
//                     val += +alf.indexOf(key)
//
//             }
//             arr2.push(val)
//             val = 0
//         })
//         return arr[arr2.indexOf(Math.max(...arr2))]
//     }
    function med (){
        let arr1 = [[1, 5], [6, 8], [10, 15]]
        let arr2 = [[1, 2], [4, 5], [10, 15]]
        let arr3 = [[1, 5], [7, 8]]
        for(let i = 0; i<15; i++){

        }
        //
        // from: "2021-03-04 23:30:54",
        //     to: "2021-03-04 23:50:01"
        console.log(Date.parse("2021-03-04 23:30:54"))
        console.log(Date.parse("2021-03-04 23:50:54"))

    }
    return (
        <div>
            {med()}
            {/*{high('man i need a taxi up to ubud')}*/}
            {/*<input*/}
            {/*    type="text"*/}
            {/*    name="name"*/}
            {/*    id="name_input"*/}
            {/*    onchange={(e)=>{alert(this.value)}}*/}

            {/*style={{color: 'red'}}*/}
            {/*/>*/}
            {/*<input  id="input" type="text"/> oninput: <span id="result"></span>*/}

            {/*{isPangram("The quick brown fox jumps over the lazy dog.")}*/}
            {/*2022*/}
            {/*{findNb(4183059834009)}*/}
            {/*{findNb(24723578342962)}*/}
            {/*{p('2021-08-21T00:00:00')}*/}
            {/*{order("is2 Thi1s T4est 3a")}*/}
            {/*{songDecoder("AWUBWUBWUBBWUBWUBWUBC")}*/}
            {/*{iqTest("88 96 66 51 14 88 2 92 18 72 18 88 20 30 4 82 90 100 24 46")}*/}
            {/*{toCamelCase("")}*/}
            {/*{sortArray( [ 2, 22, 37, 11, 4, -11, -5, 0 ])}*/}
            {/*{findEvenIndex([10,-80,10,10,15,35,20])}*/}
            {/*{longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 2)}*/}
            {/*/!*"abigailtheta"*!/*/}
            {/*{uniqueInOrder('ABBCcAD')}*/}
            {/*{queueTime([2,2,3,3,4,4], 2)}*/}
            {/*{validBraces( "(){}[](){}[]" )}*/}
            {/*{comp([8, 8, 7, 0, 3, 7, 1, 6, 3, 9, 5, 5, 4, 9, 1, 3, 9, 8, 2, 8, 10, 0],  [25, 49, 81, 0, 64, 64, 9, 36, 100, 0, 1, 4, 1, 16, 9, 49, 25, 9, 81, 64, 64, 81])}*/}
            {/*{deleteNth([20,37,20,21], 1)}*/}
            {/*{list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])}*/}
            {/*{towerBuilder(3)}*/}
        </div>
    )

}


export default All_old_issues
