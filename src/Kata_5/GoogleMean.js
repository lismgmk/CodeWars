//Livenstain algorithm

export function GoogleMean() {


    // class Dictionary {
    //     constructor(words) {
    //         this.words = words
    //     }
    //     // irregular, currect
    //     getDifference(wordA, wordB) {
    //         const distances = new Array(wordA.length + 1)
    //
    //         for (let index = 0, length = wordA.length; index <= length; index += 1) {
    //             debugger
    //             distances[index] = new Array(wordB.length + 1).fill(0)
    //         }
    //
    //         for (let index = 1, length = wordA.length; index <= length; index += 1) {
    //             debugger
    //             distances[index][0] = index
    //         }
    //
    //         for (let index = 1, length = wordB.length; index <= length; index += 1) {
    //             distances[0][index] = index
    //         }
    //
    //         for (let indexA = 1, lengthA = wordA.length; indexA <= lengthA; indexA += 1) {
    //             debugger
    //             for (let indexB = 1, lengthB = wordB.length; indexB <= lengthB; indexB += 1) {
    //                 let substitutionCost
    //
    //                 if (wordA[indexA] === wordB[indexB]) {
    //                     substitutionCost = 0
    //                 } else {
    //                     substitutionCost = 1
    //                 }
    //
    //                 distances[indexA][indexB] = Math.min(
    //                     distances[indexA - 1][indexB] + 1,
    //                     distances[indexA][indexB - 1] + 1,
    //                     distances[indexA - 1][indexB - 1] + substitutionCost,
    //                 )
    //             }
    //         }
    //
    //         return distances[wordA.length][wordB.length]
    //     }
    //     // irregulare word
    //     findMostSimilar(word) {
    //         let mostSimilarWord
    //         let minimalDifference
    //
    //         for (const otherWord of this.words) {
    //             const difference = this.getDifference(word, otherWord)
    //
    //             if (minimalDifference === undefined ||
    //                 (minimalDifference !== undefined && minimalDifference > difference)) {
    //                 minimalDifference = difference
    //                 mostSimilarWord = otherWord
    //             }
    //         }
    //
    //         return mostSimilarWord
    //     }
    // }

    // const languages = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);

    function levDist(irregular, regular) {
        let arr = []
        for (let i = 0; i <= irregular.length + 1; i++) {
            let row = []
            for (let j = 0; j <= regular.length + 1; j++) {
                row.push(j)
            }
            row[0] = i
            arr.push(row)
        }
        for (let i = 1; i <= irregular.length + 1; i++) {
            for (let j = 1; j <= regular.length + 1; j++) {
                if (irregular[i - 1] === regular[j - 1]) {
                    arr[i][j] = arr[i - 1][j - 1]
                } else {
                    arr[i][j] = 1 + Math.min(arr[i - 1][j - 1], arr[i - 1][j], arr[i][j - 1])
                }
            }

        }
        console.log(arr)
        return arr[irregular.length][regular.length]


    }


    return (
        <>
            {levDist('5jro5', 'trek')}
            {/*{languages.findMostSimilar('herry')}*/}
        </>
    )
}


// Best solutions
//
// №1

//
// // №2

// // №3
