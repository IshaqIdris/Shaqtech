import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import NewsSing from './newsSing';
import {Link} from 'react-router-dom';
import './newsList.css';

const NewsList = ({projects}) => {
    return (
        <div className="news-list">
            <Container>
                <Row>
                {projects && projects.map(project => {
                    return (
                        <Col sm={12} md={4} key={project.id}>
                            <Link to={'/newsPage/' + project.id} key={project.id}>
                                <NewsSing project={project}  />
                            </Link>
                        </Col>
                    )
                })}
                </Row>
            </Container>
        </div>
    )
}

export default NewsList;
