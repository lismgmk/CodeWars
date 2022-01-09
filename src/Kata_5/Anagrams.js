
export function Anagrams() {
    // function dirReduc(arr) {
    //     var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
    //     while (pattern.test(str)) str = str.replace(pattern,'');
    //     return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
    // }

    function anagrams(word, words) {
        let arr = []

        words.map(i=> i.split('').sort().join('')).forEach((i,index)=> {
            const newWord = word.split('').sort().join('')
           if(i === newWord){
               arr.push(words[index])
           }
        })


        return  arr
    }

    return (
        <>
            {anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])}
            {            anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
            }
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