import React from 'react'
import {Container, Card} from 'react-bootstrap';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import './newsPage.css';

const newsPage = (props) => {
    const {project} = props;
    if (project) {
        return(
            <div className="news-page">
                <Container>
                    <Card>
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>{project.content}</Card.Text>
                            <Card.Footer>
                                <small className="text-muted">{project.author}</small>
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
