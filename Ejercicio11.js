// function splitArrayIntoChunks(arr, num)
// {

//     let auxArr = [];

//     for(let i = 0; i < num; i++)
//     {
//         auxArr.push(arr.splice(0, num));
//     }

//     return auxArr;

// }

// Otra forma de hacer el ejercicio seria utilizando un bucle while para recorrer el array mientras este tenga numeros,
// y usando un splice coger su posicion hasta el num, y posteriormente agregar esa porcion del array a un array auxiliar

function splitArrayIntoChunks(arr, num) {
    let auxArr = [];

    while (arr.length > 0) {
        auxArr.push(arr.splice(0, num));
    }

    return auxArr;
}

const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]