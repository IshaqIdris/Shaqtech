import React from 'react'
import {Container, Card, ResponsiveEmbed } from 'react-bootstrap';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import moment from 'moment';
import MDReactComponent from 'markdown-react-js';
import './newsPage.css';

const newsPage = (props) => {
    const {project} = props;
    if (project) {
        const featureImage = project.featureImage ? <Card.Img src={project.featureImage} /> : <div></div>
        const youtube = project.youtube ? <div><ResponsiveEmbed aspectRatio="16by9"><iframe title="vid" src="https://www.youtube.com/embed/okSt1S7oamM" allowfullscreen></iframe></ResponsiveEmbed></div> : <div></div>
    
        return(
            <div className="news-page">
                <Container>
                    <Card border="success">
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            {featureImage}
                            <Card.Text><MDReactComponent text={project.content} /></Card.Text>
                            {youtube}
                            <Card.Text> <small className="text-muted">{project.author}</small></Card.Text>
                            <Card.Footer>
                                <small className="text-muted">{moment(project.createdAt.toDate()).calendar()}</small>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    } else {
        return (
            <div className="news-page">
                <p>Loading Projects....</p>
            </div>
        )
    } 
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(newsPage)
