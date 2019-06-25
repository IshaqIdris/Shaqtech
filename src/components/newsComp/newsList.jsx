import React from 'react';
import {Container} from 'react-bootstrap';
import NewsSing from './newsSing';
import {Link} from 'react-router-dom';
import './newsList.css';

const NewsList = ({projects}) => {
    return (
        <div className="news-list">
            <Container>
                {projects && projects.map(project => {
                    return (
                        <Link to={'/newsPage/' + project.id} >
                            <NewsSing project={project} key={project.id} />
                        </Link>
                    )
                })}
            </Container>
        </div>
    )
}

export default NewsList;
