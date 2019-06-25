import React from 'react';
import {Container} from 'react-bootstrap';
import NewsSing from './newsSing';
import './newsList.css';

const NewsList = ({projects}) => {
    return (
        <div className="news-list">
            <Container>
                {projects && projects.map(project => {
                    return (
                        <NewsSing project={project} key={project.id} />
                    )
                })}
            </Container>
        </div>
    )
}

export default NewsList;
