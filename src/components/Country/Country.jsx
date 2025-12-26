import React, { useState } from 'react';
import './country.css'
const Country = ({country,handleVisitedCountries}) => {
    // console.log(country)
    // console.log(handleVisitedCountries())
    const {name,flags,population,area} = country
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // setVisited(visited? false: true)

        setVisited(!visited)
        handleVisitedCountries(country)
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h1>Name: {name.common}</h1>
            <img src={flags.flags.png} alt={flags.flags.png} />
            <p>Population: {population.population}</p>
            <p>Area: {area.area} {area.area > 30000? 'Big country' : 'Small country'}</p>
            <button onClick={()=> handleVisited()}>{visited? 'Visited': 'Not Visited '}</button>
        </div>
    );
};

export default Country;