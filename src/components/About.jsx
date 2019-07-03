import React, { Component } from 'react';
import FounderSec from './aboutComp/founderSec';
import Companies from './aboutComp/companies';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="about">
                <h1 className="display-3 about-head-main text-light">About</h1>
                <FounderSec />
                <Companies />
            </div>
        );
    }
}

export default About;