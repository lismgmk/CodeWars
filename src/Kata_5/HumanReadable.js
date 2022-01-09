// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//
// You can find some examples in the test fixtures.

export function HumanReadable() {
    function humanReadable(seconds) {
        let hour = Math.floor(seconds / 3600)
        let minute = Math.floor((seconds - hour * 3600) / 60)
        let sec = Math.trunc(seconds - hour * 3600 - minute * 60)
        function addZerous(num) {
            if (num === 0) {
                return '00'
            }
            if (num.toString().length === 1) {
                return '0' + num
            } else {
                return '' + num
            }
        }
        return addZerous(hour) + ':' + addZerous(minute) + ':' + addZerous(sec)
    }

    return (
        <>
            {humanReadable(86400)}
        </>
    )
}


// Best solutions
//
// // №1
// function humanReadable(seconds) {
//     var pad = function(x) { return (x < 10) ? "0"+x : x; }
//     return pad(parseInt(seconds / (60*60))) + ":" +
//         pad(parseInt(seconds / 60 % 60)) + ":" +
//         pad(seconds % 60)
// }
// // // №2
// function humanReadable(seconds) {
//     return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
//         v = Math.floor(v).toString();
//         return v.length == 1 ? '0' + v : v;
//     }).join(':');
// }
// // // №3
// function humanReadable(seconds) {
//     var HH, MM, SS;
//     HH = "0" + Math.floor(seconds/3600);
//     seconds -= HH * 3600;
//     MM = "0" + Math.floor(seconds/60);
//     seconds -= MM * 60;
//     SS = "0" + seconds;
//     return HH.slice(-2) + ":" + MM.slice(-2) + ":" + SS.slice(-2);
// }