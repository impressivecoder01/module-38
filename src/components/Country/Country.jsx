import React from 'react';
import './country.css'
const Country = ({country}) => {
    // console.log(country)
    const {name,flags,population,area} = country
    const handleVisited = () => {
        console.log('btn ')
    }
    return (
        <div className='country'>
            <h1>Name: {name.common}</h1>
            <img src={flags.flags.png} alt={flags.flags.png} />
            <p>Population: {population.population}</p>
            <p>Area: {area.area} {area.area > 30000? 'Big country' : 'Small country'}</p>
            <button onClick={()=> handleVisited()}>Not Visited</button>
        </div>
    );
};

export default Country;