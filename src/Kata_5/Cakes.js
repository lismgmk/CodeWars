import {useEffect, useState} from "react";
import {nanoid} from "nanoid";
import {logDOM} from "@testing-library/react";

export function Cakes() {
    let rowCount = 3
    let culCount = 2
    const allTable = new Map()

    const column = new Array(culCount).fill(undefined).map((i, index) => {
        return index
    })
    const row = new Array(rowCount).fill(undefined).map((i, index) => {
        return index
    })

    function TablesMatrix(cul, row) {
        let arr = []
        for (let i = 0; i < cul; i++) {
            for (let j = 0; j < row; j++) {
                let arr1 = []
                arr1.push(i)
                arr1.push(j)
                arr.push(arr1.join(''))
            }
        }
        arr.map(i => {
            // let k = Math.floor(Math.random() * 1000)
            let k = 1

            allTable.set(i, [k, nanoid()])
        })
    }


    const countSum = (column, allTable, i) => {
        let sum = 0
        column.map(c => {
            return sum += +allTable.get('' + c + i)[0]
        })
        return <div>{sum}</div>
    }

    const drowTable = (column, row, allTable) => {
        return (row.map((i, index) => {
            return <>
                <tr scope="row" key={nanoid()}>

                    {column.map((j, index) => {


                        return <th scope="col" key={nanoid()}>{
                            <>
                                {allTable.get('' + j + i)[0]}
                                <p>{j} - {i}</p>
                            </>


                        }</th>
                    })}
                    <p>{countSum(column, allTable, i)}</p>
                </tr>
            </>

        }))
    }

    // const countColumn = (second) => {
    //
    //     let sum = 0
    //     row.map(first => {
    //         debugger
    //         sum += +allTable.get(''+first+second)[0]
    //         return sum
    //     })
    //     return <div>{sum}</div>
    // }
    const countColumn = () => {
        let arr = []
        let sum = 0
        row.map(second => {
            console.log(sum)

            return (

                column.map(first => {
                    sum += +allTable.get('' + first + second)[0]
                    console.log(allTable)
                    console.log(allTable.keys(''+second + first ))

                    return <>{sum}</>

                })

            )

        })
        console.log(sum)
    }
        //     const countColumn = (second) => {
        //     let sum = 0
        //     console.log(column, 'COLUMN-DR')
        //
        //
        //
        //         console.log(row, "ROW")
        //        return (
        //
        //            column.map(first => {
        //
        //                console.log(first, second)
        //                sum += +allTable.get('' + first + second)[0]
        //                console.log(sum, 'SUM')
        //                return sum
        //            })
        //
        //        )
        //
        //
        //
        //
        //     console.log(sum)
        //     return <>{sum}</>
        // }


        return (
            <>
                {TablesMatrix(culCount, rowCount)}

                <table className="table">

                    {drowTable(column, row, allTable)}

                    <tr>
                        <th key={nanoid()} scope="col">{countColumn()}</th>
                        {/*<th key={nanoid()} scope="col">{*/}

                        {/*    row.map(second => {*/}
                        {/*        console.log(row, 555)*/}
                        {/*      return   countColumn(second)*/}
                        {/*    })*/}


                        {/*}</th>*/}
                        {/*{*/}
                        {/*    column.map(i => {*/}
                        {/*        return <th key={nanoid()} scope="col">{countColumn(i)}</th>*/}
                        {/*    })*/}

                        {/*}*/}
                    </tr>


                    {/*<thead>*/}
                    {/*<tr>*/}
                    {/*    <th scope="col">#</th>*/}
                    {/*    <th scope="col">First</th>*/}
                    {/*    <th scope="col">Last</th>*/}
                    {/*    <th scope="col">Handle</th>*/}
                    {/*</tr>*/}
                    {/*</thead>*/}
                    {/*<tbody>*/}
                    {/*<tr>*/}
                    {/*    <th scope="row">1</th>*/}
                    {/*    <td>Mark</td>*/}
                    {/*    <td>Otto</td>*/}
                    {/*    <td>@mdo</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <th scope="row">2</th>*/}
                    {/*    <td>Jacob</td>*/}
                    {/*    <td>Thornton</td>*/}
                    {/*    <td>@fat</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <th scope="row">3</th>*/}
                    {/*    <td colSpan="2">Larry the Bird</td>*/}
                    {/*    <td>@twitter</td>*/}
                    {/*</tr>*/}
                    {/*</tbody>*/}
                </table>
                {/*{cakes({"chocolate":100,"cocoa":35,"cream":65}, {"milk":4000,"pears":400,"chocolate":5300,"butter":400,"nuts":9800,"apples":6300,"cocoa":6500,"eggs":5100,"crumbles":3300,"sugar":2700,"cream":8300,"oil":8100,"flour":6600})}*/}
            </>
        )
    }

//
// //№1
// const cakes = (needs, has) => Math.min(
//     ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
// )
// //№2
// function cakes(recipe, available) {
//     var numCakes = [];
//
//     for(var key in recipe){
//         if(recipe.hasOwnProperty(key)){
//             if(key in available){
//                 numCakes.push(Math.floor(available[key] / recipe[key]));
//             }else{
//                 return 0;
//             }
//         }
//     }
//
//     return Math.min.apply(null, numCakes);
//
// }
// //№3
// function cakes(recipe, available) {
//     return Math.min(...Object.keys(recipe).map(e => available[e]/recipe[e]>>0));
// }
//№4
// function cakes(recipe, available) {
//     const mapReciepts = new Map(Object.entries(recipe))
//     const mapAvailibless = new Map(Object.entries(available))
//     const keyAv = mapReciepts.keys()
//     let arr = []
//     for (let fruit of keyAv) {
//         if (mapAvailibless.has(fruit)) {
//             arr.push(mapAvailibless.get(fruit) / mapReciepts.get(fruit))
//         } else {
//             console.log(fruit)
//             arr = []
//             arr.push(0)
//             break
//         }
//     }
//     return Math.floor(arr.sort()[0])
// }