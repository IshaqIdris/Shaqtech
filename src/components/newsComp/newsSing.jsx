import React from 'react';
import {Container, Card} from 'react-bootstrap';

const NewsSing = ({project}) => {
    return (
        <Card bg="primary" className="news-sum">
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                    News Text
                    Posted By ShaqTech
                    4th February
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default NewsSing;