function roundTo(num, decimales)
{

    let exp = Math.pow(10, decimales);
    let redondeo = parseInt(num * exp, 32) / exp;

    console.log(redondeo);
    return redondeo;
}

//const roundedResult = roundTo(2.123, 2);
//console.log(roundedResult); // 2.12


const roundedResult = roundTo(1.123456789, 6);
console.log(roundedResult); // 1.123457