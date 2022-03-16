import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/home.css"

const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [countries, setCountries] = useState([]);

    //Call API to get countries data
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setCountries(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []) //Pass empty array to not rerun effect on rerender.

    //check states to determine page content to display
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return(
            <section className='countries'>
                <div className='countries-container'>
                    {countries.map(country =>(
                        <div key={country.name.common} className='country-container country-card'>
                            <Link to={'/details/' + country.name.common}
                                state= {country}
                            >
                                <img 
                                    src={country.flags.svg}
                                    alt={'Flag of ' + country.name.common}
                                    className='flag-home'
                                />
                                <h3 className='country-name'>{country.name.common}</h3>
                                <p className='country-detail'>Population: {country.population}</p>
                                <p className='country-detail'>Region: {country.region}</p>
                                <p className='country-detail'>Capital: {country.capital}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Home;