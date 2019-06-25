import React, { Component } from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
import './newNews.css'

class NewNews extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state)
    }
    render() {
        return (
            <div className="new-news">
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <h5 className="signin-header">Sign In </h5>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" id='title' placeholder="Enter title" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" id='content' onChange={this.handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Create
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

const mapDisapatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null,mapDisapatchToProps)(NewNews);
