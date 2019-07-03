import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <div className="footer-quote">
                                <p className="footer-quote-text">Creativity</p>
                                <p className="footer-quote-text">Innovation</p>
                                <p className="footer-quote-text">Technology</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <Row>
                                <p className="footer-follow">Get in Touch</p> 
                            </Row>
                            <Row>
                                <a className="footer-social" href='https://www.facebook.com/shaqtech1/'><FontAwesomeIcon icon={faFacebook} /></a>
                                <a className="footer-social" href='https://www.youtube.com/channel/UCaJFTXfacdFnqGkv3lhxpQw?view_as=subscriber'><FontAwesomeIcon icon={faYoutube} /></a>
                                <a className="footer-social" href='https://twitter.com/sharkyferrari'><FontAwesomeIcon icon={faTwitter} /></a>
                                <a className="footer-social" href='https://www.linkedin.com/in/ishaq-idris/'><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a className="footer-social" href='https://www.instagram.com/ishaq_idris1/'><FontAwesomeIcon icon={faInstagram} /></a>
                            </Row>   
                            <Row>
                                <a className="footer-social" href='mailto:ishaqidris123@gmail.com?subject=Request CMS Access&body=I would like access to the CMS'><Button variant="outline-light" size="sm">Request CMS access</Button></a>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <p className="footer-attri">Proudly made by Shaqtech 2019</p>
                    </Row>
                </Container>
                
            </div>
        );
    }
}

export default Footer;