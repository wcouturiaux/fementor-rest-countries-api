import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
    const location = useLocation();
    const country = location.state;
    return(
        <>
        <button className='back-button'>Back</button>
        <div>
            <h1>{country.name.common}</h1>
            <img 
                src={country.flags.svg}
                alt={'Flag of ' + country.name.common}
            >
            </img>
            <div className='country-details'>
                <h2>{country.name.common}</h2>
                <p>Native Name: {country.name.official}</p>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Sub Region: {country.subregion}</p>
                <p>Capital: {country.capital}</p>
                <p>Top Level Domain: {country.tld}</p>
                <p>Currency: {Object.keys(country.currencies).map(key=>(country.currencies[key].name+", "))}</p>
            </div>
            <div className='country-details' id='border-countries'>
                <p>Border Countries: {country.borders.map(border=>(border + "\t"))}</p>
            </div>
        </div>
        </>
    );
}

export default Details;