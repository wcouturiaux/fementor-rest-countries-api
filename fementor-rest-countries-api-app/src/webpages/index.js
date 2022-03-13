import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";

import Nav from "./nav";
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
