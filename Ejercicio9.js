// function toLowercaseKeys(object)
// {

//     let newObj = {};

//     for(let [key, value] of Object.entries(object))
//     {
//         let nombre = key.toLowerCase();

//         newObj[nombre] = value;
        
//     }

//     return newObj;

// }

// Otra forma de hacer dicha funcion seria iterar sobre el objeto haciendo un reduce en los parametros del objeto
// y por cada entrada poner la clave en lowerCase

function toLowercaseKeys(object) {
    return Object.entries(object).reduce((newObj, [key, value]) => {
        newObj[key.toLowerCase()] = value;
        return newObj;
    }, {});
}

const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }