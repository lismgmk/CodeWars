export function Scramble() {
    function scramble(str1, str2) {
        let mapStr1 = new Map()
        let k = str1.length
        for (let i = 0; i < k; i++) {
            if( Array.isArray(mapStr1.get(str1[i]))){
                mapStr1.get(str1[i]).push(str1[i])
            } else {
                mapStr1.set(str1[i], [])
            }
        }

        let k2 = str2.length
        let num = 0
        for (let i = 0; i <= k2; i++) {
            if (mapStr1.has(str2[i])) {
                if(mapStr1.get(str2[i]).length === 0){
                    mapStr1.delete(str2[i])

                } else{
                    mapStr1.get(str2[i]).pop()
                }
                num++
            }
        }
        return str2.length === num
    }


    return (
        <>
            {/*{scramble('sscriptjava', 'javascript')}*/}
            {scramble('rkqodlw', 'world')}
        </>
    )
}


// Best solutions
//
// // №1
// function scramble(str1, str2) {
//     let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
//     return str2.split("").every((character) => --occurences[character] >= 0);
// }
//
// // №2
//
// function scramble(strToBeChecked, strToCheckFor) {
//     let numLetters = {}
//
//     for (const letter of strToCheckFor) {
//         if (numLetters[letter]) numLetters[letter]++
//         else numLetters[letter] = 1
//     }
//
//     for (const letter of strToBeChecked) {
//         if (numLetters[letter] && numLetters[letter] !== 0) numLetters[letter]--
//     }
//
//     for (const key in numLetters) {
//         if (numLetters[key] !== 0) return false
//     }
//
//     // Only reaches this far if all good
//     return true
// }

// №3
//
//
// function scramble(str1, str2) {
//     var hashtab = [...new Array(256)].map(x => 0);
//
//     str2.split('').forEach(ele => hashtab[ele.charCodeAt(0)]++);
//     str1.split('').forEach(ele => hashtab[ele.charCodeAt(0)]--);
//
//     hashtab = hashtab.filter (x=>x > 0);
//
//     return hashtab.length == 0;
// }


// №4
//
//
// const scramble = (str1, str2) =>
//     [...str2].every(val => str2.split(val).length <= str1.split(val).length);