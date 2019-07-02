import React, { Component } from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
import {Redirect, Link} from 'react-router-dom';
import './newNews.css';

class NewNews extends Component {
    state = {
        title: '',
        content: '',
        featureImage: '',
        youtube:'',
        github:'',
        behance:''
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
        const {auth} = this.props;
        if (!auth.uid) return <Redirect to='/signin'/>

        return (
            <div className="new-news">
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <h5 className="signin-header">Create New News </h5>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" id='title' placeholder="Enter title" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Content (Markdown)</Form.Label>
                            <Form.Control as="textarea" id='content' onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formFeatureImage">
                            <Form.Label>Feature Image</Form.Label>
                            <Form.Control id='featureImage' placeholder="https://firebasestorage.googleapis.com/....png" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formYoutube">
                            <Form.Label>YouTube Video</Form.Label>
                            <Form.Control id='youtube' placeholder="https://www.youtube.com/..." onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formGithub">
                            <Form.Label>GitHub Link</Form.Label>
                            <Form.Control id='github' onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBehance">
                            <Form.Label>Behance Link</Form.Label>
                            <Form.Control id='behance' onChange={this.handleChange} />
                        </Form.Group>

                        <Link to='/news'>
                            <Button variant="primary" type="submit">
                                Create
                            </Button>
                        </Link>
                    </Form>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDisapatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps,mapDisapatchToProps)(NewNews);
