function valoresNoNulos()
{
    const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test'];

    let newArr = [];

    newArr = arrDirty.filter(Boolean);

    console.log(newArr);

    return newArr;

}

valoresNoNulos();