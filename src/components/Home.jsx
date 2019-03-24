import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import Typing from 'react-typing-animation';
import ImageParallax from 'react-image-parallax2';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Container>
                    <div className="blocks-wrapper">
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <div className="title-block">
                            <h3 className="header-intro">Welcome to</h3>
                            <Typing cursorClassName="cursor-header" speed={50} loop={true}>
                                <span className="header-banner">Shaqtech</span>
                                <Typing.Delay ms={5000} />
                                <Typing.Backspace count={20} />
                                <span className="header-banner">Creativity</span>
                                <Typing.Delay ms={5000} />
                                <Typing.Backspace count={20} />
                                <span className="header-banner">Innovation</span>
                                <Typing.Delay ms={5000} />
                                <Typing.Backspace count={20} />
                                <span className="header-banner">Technology</span>
                                <Typing.Delay ms={5000} />
                                <Typing.Backspace count={20} />
                            </Typing>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <div className="blurbs-block">
                        <Row>
                            <Col xs={12} md={4}>
                                <h3>Creativity</h3>
                                <p>Shaqtech was founded on the key value of Creativity. At Shaqtech we attempt to approach any problem with a creative approach. Also we offer creative services for clients such as graphic design, architectural design, web/app design, and photography, cinematography.</p>
                            </Col>
                            <Col xs={12} md={4}>
                                <h3>Innovation</h3>
                                <p>Here at Shaqtech we always are on the lookout for new areas to innovate. Shaqtech create's applications for missing niches or tools to make life easier. We have worked in areas of marketing, IOT, architecture, and property.  </p>
                            </Col>
                            <Col xs={12} md={4}>
                                <h3>Technology</h3>
                                <p>Technology plays a major part in the Shaqtech brand. Here at Shaqtech we try to always be in touch with the newest and latest technologies. You can see this through our product reviews, social media's, and the products we produce. </p>
                            </Col>
                        </Row>
                    </div>
                    </ScrollAnimation>
                    </div>
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <ImageParallax reduceHeight={3/4} src={'/assets/LRG_DSC03663.jpeg'}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wACr6L5fvT4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <div className="quote-block">
                            <h3 className="quote">Hover over the Shaqtech logo to view the navigation!</h3>
                        </div>
                    </ScrollAnimation>
                </Container>
            </div>
        );
    }
}

export default Home;