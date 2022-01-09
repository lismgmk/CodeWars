// Some numbers have funny properties. For example:
//
//     89 --> 8¹ + 9² = 89 * 1
//
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
//
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51


export function DigPow() {
    function digPow(n, p) {
        const arr = Array.from(String(n), Number)
        let k = 0
        let c = 0

        arr.forEach((i, index) => {
            k += Math.pow(i, index + p)
        })

        function findC(k) {
            c = k / n
            if(k % n === 0 ){
                return c
            } else {
                return -1
            }
        }
        return findC(k)
    }

    return (
        <>
            {digPow(46288, 3)}
        </>
    )
}


// Best solutions
//
// №1
// function digPow(n, p) {
//     var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
//     return x % n ? -1 : x / n
// }

// №2
// function digPow(n, p){
//     var ans = (''+n).split('')
//         .map(function(d,i){return Math.pow(+d,i+p) })
//         .reduce(function(s,v){return s+v}) / n
//     return ans%1 ? -1 : ans
// }//z.
