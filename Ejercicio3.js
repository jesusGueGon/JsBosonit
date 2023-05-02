function noCapitales()
{
    const arrCities = [
        {city: 'Logroño', country: 'Spain', capital: false},
        {city: 'Paris', country: 'France', capital: true},
        {city: 'Madrid', country: 'Spain', capital: true},
        {city: 'Rome', country: 'Italy', capital: true},
        {city: 'Oslo', country: 'Norway', capital: true},
        {city: 'Jaén', country: 'Spain', capital: false}
    ];

    let newArr = [];

    for(let i = 0; i < arrCities.length; i++)
    {

        if((arrCities[i].country == 'Spain') && (arrCities[i].capital == false))
        {
            newArr.push(arrCities[i]);
        }

    }

    console.log(newArr);

    return newArr;

}

noCapitales();