import React, { useState, useEffect } from 'react';

const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [countries, setCountries] = useState([]);

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
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return(
            <div>
                <ul>
                    {countries.map(country =>(
                        <li key={country.cca3}>
                            {country.name.common}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Home;