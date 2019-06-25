import React from 'react'
import {Container, Card} from 'react-bootstrap';
import './newsPage.css';

const newsPage = (props) => {

    const id = props.match.params.id

    return (
        <div className="news-page">
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>News Title - {id}</Card.Title>
                        <Card.Text>loremfgsnfglsdfgksl;dgfks fd gsf</Card.Text>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}

export default newsPage
