function splitArrayIntoChunks(arr, num)
{

    let auxArr = [];

    for(let i = 0; i < num; i++)
    {
        auxArr.push(arr.splice(0, num));
    }

    return auxArr;

}

const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]