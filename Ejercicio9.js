function toLowercaseKeys(object)
{

    let newObj = {};

    for(let [key, value] of Object.entries(object))
    {
        let nombre = key.toLowerCase();

        newObj[nombre] = value;
        
    }

    return newObj;

}

const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }