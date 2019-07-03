import React from 'react';
import {Image, Navbar, Nav} from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../store/actions/authActions';
import './CustomNavbar.css';

const CustomNavbar = (props) => {
    const {auth} = props;
    const links = auth.uid ? <div><Nav><Nav.Link href="/create">Create News</Nav.Link>
    <Nav.Link href="/signin" onClick={props.signOut}>Logout</Nav.Link></Nav></div> : <div><Nav><Nav.Link href="/signin">Sign In</Nav.Link></Nav></div>
    return (
        <div className="navigation__wrapper">
            <div className="rectangle">
                <Link to='/' className="logo"><Image src="assets/weblogo.png" className="web-header"/></Link>
            </div>
            <div className="table">
                <Navbar expand="md">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/news">News</Nav.Link>
                            <Nav.Link href="/">About</Nav.Link>
                        </Nav>
                        {links}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
};



export default connect(mapStateToProps,mapDispatchToProps)(CustomNavbar)
