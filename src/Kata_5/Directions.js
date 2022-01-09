//  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

export function Directions() {
    function dirReduc(arr) {
        var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
        while (pattern.test(str)) str = str.replace(pattern,'');
        return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
    }

    return (
        <>
            {dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])}

        </>
    )
}


// Best solutions
//
// // №1

// add variable those rerender func (at start variable  = 0)
//
// function dirReduc(arr){
//     var count = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === "WEST" && arr[i+1] === "EAST" ||
//             arr[i] === "EAST" && arr[i+1] === "WEST" ||
//             arr[i] === "NORTH" && arr[i+1] === "SOUTH" ||
//             arr[i] === "SOUTH" && arr[i+1] === "NORTH") {
//             arr.splice(i, 2);
//             count++;
//             i--;
//         }
//     }
//     return count === 0 ? arr : dirReduc(arr);
// }
//
// // №2

// reduce => first previosly value we create and return anything
// compare current value with obj Template

//  function dirReduc(plan) {
//         var opposite = {
//             'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
//         return plan.reduce(function(dirs, dir){
//             if (dirs[dirs.length - 1] === opposite[dir])
//                 dirs.pop();
//             else
//                 dirs.push(dir);
//             return dirs;
//         }, []);
//     }


// №3
//
//
//
// function dirReduc(arr) {
//     var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
//     //search coincidence pattern in str and replace on ''
//     while (pattern.test(str)) str = str.replace(pattern,'');
// //search remaining str and transform to array
//     return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
// }