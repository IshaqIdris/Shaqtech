import React from 'react';
import {Image} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../store/actions/authActions';
import './CustomNavbar.css';

const CustomNavbar = (props) => {
    const {auth} = props;
    const links = auth.uid ? <div><div className="newNewsNav"><li ><NavLink to="/create">Create News</NavLink></li></div>
    <div className="logoutNav"><li ><a onClick={props.signOut}>Logout</a></li></div></div> : <div className="signInNav"><li ><NavLink to="/signin">SignIn</NavLink></li></div>
    return (
        <div className="navigation__wrapper">
            <div className="rectangle">
                <Link to='/' className="logo"><Image src="assets/weblogo.png" className="web-header"/></Link>
            </div>
            <div className="table">
                <ul id="horizontal-list">
                    <div className="projectsNav"><li ><NavLink to="/">Home</NavLink></li></div>
                    <div className="newsNav"><li ><NavLink to="/news">News</NavLink></li></div>
                    <div className="aboutNav"><li ><NavLink to="/">About</NavLink></li></div>
                    {links}
                </ul>
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
