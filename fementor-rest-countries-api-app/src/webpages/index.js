import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import Home from './home';
import Details from './details';

const Webpages = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element= {<Home />} />
                <Route path="/details" element = {<Details />} />
            </Routes>
        </Router>
    );
};

export default Webpages;
