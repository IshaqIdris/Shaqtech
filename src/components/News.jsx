import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Notifications from './newsComp/notifications';
import NewsSing from './newsComp/newsSing';
import './News.css';

class News extends Component {
    render() {
        return (
            <div className="news">
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <NewsSing />
                        </Col>
                        <Col sm={12} md={{span:5, offset:1}}>
                            <Notifications />
                        </Col>
                    </Row>
                </Container>               
            </div>
        );
    }
}

export default News;