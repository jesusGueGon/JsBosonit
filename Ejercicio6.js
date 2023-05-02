function roundTo(num, decimales)
{

   var s = num.toString()
   var l = s.length
   var decimalLength = s.indexOf('.') + 1
   var numStr = s.substr(0, decimalLength + decimales)
   return Number(numStr)

}

//const roundedResult = roundTo(2.123, 2);
//console.log(roundedResult); // 2.12


const roundedResult = roundTo(1.123456789, 6);
console.log(roundedResult); // 1.123457