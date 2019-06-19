import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <div className="rectangle">
                    <Image src="assets/weblogo.png" className="web-header"/>
                </div>
                <div className="navigation" >
                    <ul>
                        <li><a href="default.asp">Home</a></li>
                        <li><a href="news.asp">News</a></li>
                        <li><a href="contact.asp">Contact</a></li>
                        <li><a href="about.asp">About</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
