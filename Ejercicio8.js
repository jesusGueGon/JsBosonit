function fromBytesToFormattedSizeUnits(num, decimales = 3)
{

    const unidades = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    let parseo = parseInt(Math.floor(Math.log(Math.abs(num)) / Math.log(1000)), 10);
    
    //el doble ** significa que un numero eleva a otro, 1000 elevado a parseo
    let conversion = `${(num / (1000 ** parseo)).toPrecision(decimales)} ${unidades[parseo]}`;

    return conversion;

}

//const result = fromBytesToFormattedSizeUnits(1000);
//console.log(result); // 1KB


//const result = fromBytesToFormattedSizeUnits(123456789);
//console.log(result); // 123MB


const result = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result); // -12.145GB
