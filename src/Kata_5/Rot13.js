export function Rot13() {


    function rot13(message) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        const big = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


        let str = ''
        for (let i = 0; i < message.length; i++) {
            console.log(alphabet.indexOf(message[i]))
            if (alphabet.indexOf(message[i]) !== -1 || big.indexOf(message[i]) !== -1) {
                let Up = ''
                if (message[i] === message[i].toUpperCase()) {
                    Up = 'up'
                }
                if (message[i] === message[i].toLowerCase()) {
                    Up = 'low'
                }
                let num = message[i].toLowerCase()
                let inndexLetter = alphabet.indexOf(num)
                if (inndexLetter + 13 < alphabet.length) {
                    if (Up === 'up') {
                        str += alphabet[inndexLetter + 13].toUpperCase()
                    } else {
                        str += alphabet[inndexLetter + 13].toLowerCase()
                    }

                } else {
                    let index = 13 - (alphabet.length - inndexLetter)
                    if (Up === 'low') {
                        str += alphabet[index].toLowerCase()
                    } else {
                        str += alphabet[index].toUpperCase()
                    }
                }

            } else {
                str += message[i]
            }


        }
        return  str
    }

    return (
        <>
            {rot13("Test")}

        </>
    )
}


// Best solutions
//
// // №1
// function rot13(message) {
//     var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
//     return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
// }
//
// // №2
//
//
// var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ";
// var cipher   = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXWZABCDEFGHIJKLM";
//
// function rot13(message){
//     return message.split('').map(function(c) {
//         var i = alphabet.indexOf(c);
//         if (i < 0) {
//             // not in alphabet, return char
//             return c;
//         }
//
//         return cipher[i];
//     }).join('');
// }
// №3
//
//
