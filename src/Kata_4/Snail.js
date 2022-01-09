import {nanoid} from "nanoid";

export function Snail() {



    // const snail = function(array) {
    //     var result;
    //     while (array.length) {
    //         debugger
    //         // Steal the first row.
    //         result = (result ? result.concat(array.shift()) : array.shift());
    //         // Steal the right items.
    //         for (var i = 0; i < array.length; i++)
    //             result.push(array[i].pop());
    //         // Steal the bottom row.
    //         result = result.concat((array.pop() || []).reverse());
    //         // Steal the left items.
    //         for (var i = array.length - 1; i >= 0; i--)
    //             result.push(array[i].shift());
    //     }
    //     return result;
    // }
    // function snail(array) {
    //     var vector = [];
    //     while (array.length) {
    //         debugger
    //         vector.push(...array.shift());
    //         array.map(row => vector.push(row.pop()));
    //         array.reverse().map(row => row.reverse());
    //     }
    //     return vector;
    // }
   // const snail = function(array) {
   //      var size = array.length;
   //
   //      if (size == 0)
   //          return [];
   //
   //      if (size == 1)
   //          return array[0];
   //
   //      var top    = array[0].slice(0, -1);
   //      var right  = array.slice(0, -1).map(a => a[size - 1]);
   //      var bottom = array[size -1].slice(1).reverse();
   //      var left   = array.slice(1).map(a => a[0]).reverse();
   //      var inner  = array.slice(1, -1).map(a => a.slice(1, -1));
   //
   //      return [].concat(top, right, bottom, left, snail(inner));
   //  }
    return (
        <>
            {/*{snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])}*/}
            {/*{[1, 2, 3, 6, 9, 8, 7, 4, 5]}*/}

            {/*{snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]])}*/}

        </>
    )
}


// Best solutions
//
// // №1
// create method in prototype for all stings
// String.prototype.sort = function() {
//     return this.split("").sort().join("");
// };
//
// function anagrams(word, words) {
//     return words.filter(function(x) {
//         return x.sort() === word.sort();
//     });
// }

//
// // №2
//
// function anagrams(word, words) {
//     word = word.split('').sort().join('');
//     return words.filter(function(v) {return word == v.split('').sort().join('');});
// }


// №3
//
//
// let anagrams = (word, words) => words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));