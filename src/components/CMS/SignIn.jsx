import React, { Component } from 'react';
import {Form, Button, Container} from 'react-bootstrap';
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
        console.log(this.state)
    }
    render() {
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
                </Container>
            </div>
        )
    }
}

export default SignIn
