export function IncrementString() {

    function incrementString(strng) {
        let point = -1
        for (let i = 0; i < strng.length; i++) {
            if (parseInt(strng[i], 10) || parseInt(strng[i], 10) === 0) {
                point = i
                break
            }
        }
        if(point === -1){
            return strng + '1'
        }
        const strSlice = strng.slice(point)
        let numSlice = (Number(strng.slice(point)) + 1).toString()
        while (numSlice.length < strSlice.length) {
            numSlice = '0' + numSlice
        }
        return (strng.slice(0, point) + numSlice)

    }


    return (
        <>
            {incrementString("foobar00000056565")}
            {/*{incrementString("foo")}*/}
        </>
    )
}


// Best solutions
//
// // №1
// function incrementString(input) {
//     if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
//     return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
//         var up = parseInt(p2) + 1;
//         return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
//     });
// }
// // №2
//

// function incrementString(input) {
//     return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
//         return +d + 1 + ns.replace(/9/g, '0');
//     });
// }
// №3
//
// function incrementString(str){
//     var c = str[str.length-1];
//     switch(c){
//         case '0':
//         case '1':
//         case '2':
//         case '3':
//         case '4':
//         case '5':
//         case '6':
//         case '7':
//         case '8': return str.substring(0, str.length-1) + (parseInt(c)+1);
//         case '9': return incrementString(str.substring(0, str.length-1)) + 0;
//         default: return str+"1";
//     }
// }

// №4
//
