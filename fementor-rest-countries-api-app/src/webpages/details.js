import React from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/details.css"

const Details = () => {
    const location = useLocation();
    const country = location.state;
    return(
        <>
        <button className='back-button'>Back</button>
        <div className='details-container'>
            <img 
                src={country.flags.svg}
                alt={'Flag of ' + country.name.common}
                className="flag-details"
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
            
                <div className='borders' id='border-countries'>
                    <p>Border Countries: {country.borders.map(border=>(border + "\t"))}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Details;