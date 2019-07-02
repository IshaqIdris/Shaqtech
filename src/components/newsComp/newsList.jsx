import React from 'react';
import {Container, CardColumns} from 'react-bootstrap';
import NewsSing from './newsSing';
import {Link} from 'react-router-dom';
import './newsList.css';

const NewsList = ({projects}) => {
    return (
        <div className="news-list">
            <Container>
                <CardColumns>
                    {projects && projects.map(project => {
                        return (
                                <Link to={'/newsPage/' + project.id} key={project.id}>
                                    <NewsSing project={project}  />
                                </Link>
                        )
                    })}
                </CardColumns>
            </Container>
        </div>
    )
}

export default NewsList;
