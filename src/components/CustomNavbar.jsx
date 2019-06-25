import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <div className="navigation__wrapper">
                <div className="rectangle">
                    <Link to='/' className="logo"><Image src="assets/weblogo.png" className="web-header"/></Link>
                </div>
                <div className="navigation">
                    <ul>
                        <div className="projectsNav"><li ><NavLink to="/">Home</NavLink></li></div>
                        <div className="newsNav"><li ><NavLink to="/news">News</NavLink></li></div>
                        <div className="contactNav"><li ><NavLink to="/signin">SignIn</NavLink></li></div>
                        <div className="aboutNav"><li ><NavLink to="/">About</NavLink></li></div>
                    </ul>
                </div>
            </div>
        );
    }
}
