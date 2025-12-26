import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'
const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    // console.log(countriesData.countries)
    const [visitedCountries, setVisitedCountries] = useState([])
    const handleVisitedCountries = (country)=> {
        console.log('coutries',country)
    }
    return (
        <div >
            <h1>Countries: {countries.length}</h1>
            <h1>Total country visited: </h1>
            <div className='countries'>
                {
                    countries.map(country => <Country handleVisitedCountries={handleVisitedCountries} key={country.cca3.cca3} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;