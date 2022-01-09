// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

export function PigLatin() {
        function pigIt(str){
            return str.split(' ').map((i) => {
                return  i.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/)  ? i : i.replace(i[0], '').concat(i[0]).concat('ay')
            }).join(' ')
        }

    return (
        <>
            {pigIt('Pig latin is cool !')}
        </>
    )
}


// Best solutions
//
// №1
// function pigIt(str){
//     return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }
//
// // №2
// function pigIt(str) {
//     return str.replace(/\w+/g, (w) => {
//         return w.slice(1) + w[0] + 'ay';
//     });
// }
// // №3
// function pigIt(str) {
//     var arrayWord = str.split(' ');
//     return arrayWord.map(function(word) {
//         var firstLetter = word.charAt(0);
//         return word.slice(1) + firstLetter + 'ay';
//     }).join(' ');
// }