function capitales()
{

    const arrCities2 = [
        {city: 'Logroño', country: 'Spain', capital: false},
        {city: 'Bordeaux', country: 'France', capital: false},
        {city: 'Madrid', country: 'Spain', capital: true},
        {city: 'Florence', country: 'Italy', capital: true},
        {city: 'Oslo', country: 'Norway', capital: true},
        {city: 'Jaén', country: 'Spain', capital: false}
    ];

    let newArr = [];

    for(let i = 0; i < arrCities2.length; i++)
    {

        if(arrCities2[i].capital == false)
        {
            if(arrCities2[i].country == 'Spain')
            {
                newArr.push({city: arrCities2[i].city, isSpain: "true"});
            }
            else
            {
                newArr.push({city: arrCities2[i].city, isSpain: "false"});
            }
        }

    }

    console.log(newArr);

    return newArr;

}

capitales();