import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
    const location = useLocation();
    const country = location.state;
    return(
        <div>
            <h1>{country.name.common}</h1>
            <img 
                src={country.flags.svg}
                alt={'Flag of ' + country.name.common}
            >
            </img>
        </div>
    );
}

export default Details;