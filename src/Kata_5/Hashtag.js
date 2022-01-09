export function HashTag() {
    let s = []

    // function generateHashtag(str) {
    //     let arr = ''
    //     // debugger
    //     if (str === ' ' || str === '' || str.trim() === '') {
    //         return false
    //     }
    //     arr = str.trim().split(' ').reduce((prev, cur, index) => {
    //         console.log(prev, cur)
    //         // debugger
    //         if (index === 0) {
    //             return "#" + cur.replace(cur[0], cur[0].toUpperCase())
    //         }
    //         if (cur !== '' && prev === '') {
    //             return prev + cur.replace(cur[0], cur[0].toUpperCase())
    //         }
    //         if (cur === '' && prev !== '') {
    //             return prev + cur
    //         }
    //         if (cur === '' && prev === '') {
    //             return prev + cur
    //         }
    //         return prev + cur.replace(cur[0], cur[0].toUpperCase())
    //
    //     }, 0)
    //     if (arr.length > 140 || arr === '') {
    //         return false
    //     }
    //     return arr
    // }

    return (
        <>
            {/*{generateHashtag("  do     we have       a hashtag")}*/}
            {/*{generateHashtag("  ")}*/}
        </>
    )
}
//
//
// // Best solutions
// //
// // // №1
// function generateHashtag (str) {
//     return str.length > 140 || str === '' ? false :
//         '#' + str.split(' ').map(capitalize).join('');
// }
//
// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// //
//
//
// //
// // // №2
// //
// function generateHashtag (str) {
//     if(!str || str.length < 1) return false;
//
//     var r = '#' + str.split(' ').map(function(el) {
//         return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
//     }).join('');
//     return r.length > 140?false:r;
// }
//
// // №3
// //
// function generateHashtag (str) {
//
//     var hashtag = str.split(' ').reduce(function(tag, word) {
//         return tag + word.charAt(0).toUpperCase() + word.substring(1);
//     }, '#');
//
//     return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
// }