import React from 'react';

const Country = ({country}) => {
    // console.log(country)
    const {name,flags,population} = country
    return (
        <div>
            <h1>Name: {name.common}</h1>
            <img src={flags.flags.png} alt={flags.flags.png} />
            <p>Population: {population.population}</p>
        </div>
    );
};

export default Country;