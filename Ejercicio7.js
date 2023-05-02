function returnFalsyValues(object, type)
{

    let newObj = {};

    console.log(type);


    for(let [key, value] of Object.entries(object))
    {
        console.log(typeof value)
        if(!type(value))
        {
            newObj[key] = value;
        }
    }

    return newObj;

}

const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string');
console.log(result); // {a: 1, c: 3}