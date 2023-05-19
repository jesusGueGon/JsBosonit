// function interseccion()
// {
//     const arrNumber1 = [1,2,3];
//     const arrNumber2 = [1,2,3,4,5];
//     const arrNumber3 = [1,4,7,2];

//     let interseccion = arrNumber2.filter(e =>
//         arrNumber1.length > 0 ? arrNumber1.includes(e) : true &&
//         arrNumber3.length > 0 ? arrNumber3.includes(e) : true
//     );

//     console.log(interseccion);

//     return interseccion;
// }

// Otra forma mas sencilla de hacerlo con filter e includes iterando sobre el array mas largo, en este caso el segundo

function interseccion() {
    const arrNumber1 = [1, 2, 3];
    const arrNumber2 = [1, 2, 3, 4, 5];
    const arrNumber3 = [1, 4, 7, 2];

    let interseccion = arrNumber2.filter(e =>
        arrNumber1.includes(e) && arrNumber3.includes(e)
    );

    console.log(interseccion);

    return interseccion;
}

interseccion();