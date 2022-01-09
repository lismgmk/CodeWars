export function MaxSequence() {


    function orderWeight(strng) {
        let arr = strng.trim().split(' ').filter(i => i !== '')

        //1)
        let arrNum = []
        for (let i = 0; i < arr.length; i++) {
            let miniArr = arr[i].split('').map(i => Number.parseInt(i)).reduce((prev, cur) => {
                return cur + prev
            })
            arrNum.push(miniArr)
        }
//2)
        const helperMap = new Map()
        for (let i = 0; i < arr.length; i++) {
            const c = helperMap.get(arrNum[i]) || []
            helperMap.set(arrNum[i], [...c, arr[i]])
        }


        let finARR = Array
            .from(helperMap)
            .sort((a, b) => {
                return a[0] - b[0];
            })

        let g = finARR.map(i => {
            if (i[1].length > 1) {
                return i[1].sort()
            } else {
                return i[1]
            }
        })
        let k = g.map(i => {
            return [...i].join(' ')
        })
        return k.join(' ')
    }
    return (
        <>
            {orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")}

        </>
    )
}


// Best solutions
//
// // №1
function orderWeight(strng) {
    const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
    function comp(a,b){
        let sumA = sum(a);
        let sumB = sum(b);
        return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
    };
    return strng.split(' ').sort(comp).join(' ');
}
// // №2
//
// function orderWeight(strng) {
//     let array = strng.split(' ');
//     let map = new Map();
//     for (let elem of array) {
//         let sum = 0;
//         for (let digit of elem) {
//             sum+= +digit;
//         }
//         map.set(elem, sum);
//     }
//
//     array.sort(function(weight1, weight2) {
//         if (map.get(weight1) === map.get(weight2)) {
//             return weight1 > weight2 ? 1 : -1;
//         }
//
//         return map.get(weight1) - map.get(weight2);
//     })
//
//     return array.join(' ');
//
// }

// №3
//
//
// function orderWeight(strng) {
//     return strng
//         .split(" ")
//         .map(function(v) {
//             return {
//                 val: v,
//                 key: v.split("").reduce(function(prev, curr) {
//                     return parseInt(prev) + parseInt(curr);
//                 }, 0)
//             };
//         })
//         .sort(function(a, b) {
//             return a.key == b.key
//                 ? a.val.localeCompare(b.val)
//                 : (a.key - b.key);
//         })
//         .map(function(v) {
//             return v.val;
//         })
//         .join(" ");
// }