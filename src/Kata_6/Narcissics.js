//  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

export function Narcissics() {
    function narcissistic(value) {
        let stringNum = value.toString()
        let raicere = stringNum.length
        let resaut = 0
        for (let i = 0; i < raicere; i++) {
            let dig = +stringNum[i]
            resaut += Math.pow(dig, raicere)
        }
        return value === resaut ? true : false
    }

    return (
        <>
            {narcissistic(371)}
        </>
    )
}


// Best solutions
//
// // №1
// function narcissistic( value ) {
//     return ('' + value).split('').reduce(function(p, c){
//         return p + Math.pow(c, ('' + value).length)
//     }, 0) == value;
// }
//
// // №2
// function narcissistic(value) {
//     return value.toString()
//             .split('')
//             .map( (x,i,arr) => x ** arr.length)
//             .reduce( (a,b)=> +a + +b)
//         === value
// }
