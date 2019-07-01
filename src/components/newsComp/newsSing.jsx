import React from 'react';
import {Card, br} from 'react-bootstrap';
import moment from 'moment';

const NewsSing = ({project}) => {
    return (
        <Card bg="dark" text="white" className="news-sum text-center">
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{moment(project.createdAt.toDate()).calendar()}</small>
            </Card.Footer>
        </Card>
        <br />
    );
}

export default NewsSing;