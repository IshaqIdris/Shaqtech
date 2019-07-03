import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './companies.css'

const Companies = () => {
    return (
        <Container>
            <Row>
                <h2 className="companies-title">Companies worked with</h2>
            </Row>
            <Row>
                <Col xs={12} md={3}>
                    <Image className="logo-companies" src="assets/cardnologo.png" />
                </Col>
                <Col xs={12} md={3}>
                    <Image className="logo-companies" src="assets/silverstripe.png" />
                </Col>
                <Col xs={12} md={3}>
                    <Image className="logo-companies" src="assets/ray.jpg" />
                </Col>
                <Col xs={12} md={3}>
                    <Image className="logo-companies" src="assets/well.jpg" />
                </Col>
                <Col xs={12} md={3}>
                    <Image className="logo-companies" src="assets/medals.png" />
                </Col>
            </Row>
        </Container>
        );
}
    
export default Companies;