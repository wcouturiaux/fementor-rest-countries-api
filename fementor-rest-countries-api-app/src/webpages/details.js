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
                <p><span>Native Name: </span>{country.name.official}</p>
                <p><span>Population: </span>{country.population}</p>
                <p><span>Region: </span>{country.region}</p>
                <p><span>Sub Region: </span>{country.subregion}</p>
                <p><span>Capital: </span>{country.capital}</p>
                <p><span>Top Level Domain: </span>{country.tld}</p>
                <p><span>Currency: </span>{Object.keys(country.currencies).map(key=>(country.currencies[key].name+", "))}</p>
            
                <div className='borders' id='border-countries'>
                    <p><span>Border Countries: </span>{country.borders.map(border=>(border + "\t"))}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Details;