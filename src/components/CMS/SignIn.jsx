import React, { Component } from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom';
import './SignIn.css'

class SignIn extends Component {
    state = {
        email:'',
        password:''

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        const { authError, auth} = this.props
        if (auth.uid) return <Redirect to='/create'/>
        return (
            <div className="SignIn">
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <h5 className="signin-header">Sign In </h5>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" id='email' placeholder="Enter email" onChange={this.handleChange} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" id='password' placeholder="Password" onChange={this.handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        
                    </Form>
                    <div className="error">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                </Container>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
