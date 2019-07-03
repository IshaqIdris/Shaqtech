import React from 'react';
import {Card} from 'react-bootstrap';
import moment from 'moment';
import TextTruncate from 'react-text-truncate';
import './newsSing.css';

const NewsSing = ({project}) => {
    const featureImage = project.featureImage ? <Card.Img variant="top" src={project.featureImage} /> : <div></div>
    return (
        <div>
            <Card bg="light" text="dark" className="news-sum">
                {featureImage}
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                        <TextTruncate
                        line={2}
                        truncateText="…"
                        text={project.content}
                        />
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{moment(project.createdAt.toDate()).calendar()}</small>
                </Card.Footer>
            </Card>
            <br />
        </div>
    );
}

export default NewsSing;