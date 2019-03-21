import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <div class="rectangle">
                    <Image src="assets/weblogo.png" className="web-header"/>
                </div>
            </div>
        );
    }
}
