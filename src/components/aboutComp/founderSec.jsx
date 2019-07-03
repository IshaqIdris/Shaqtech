import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './founderSec.css'

const FounderSec = () => {
    return (
            <Container>
                <Row>
                    <Col xs={12} md={5}>
                        <Image className="profile-pic" src="assets/shaq.jpg" roundedCircle/>
                    </Col>
                    <Col xs={12} md={7}>
                        <div className="blurb">
                            <h2>Ishaq Idris</h2>
                            <p><strong>Founder</strong></p>
                            <p>Since my childhood, I have been creating things to provide solutions or for the sake of innovation and exploring things has always been a major passion of mine. From an early age, I have always pushed my curiosity to grapple onto newfound knowledge to use in my creations. Throughout my school times I have self-taught myself, python programming, Autocad, SketchUP and the Adobe creative suite to make my own creations. 
                            </p>
                            <p>Software Engineering combined with my passions together, technology and creating is my chosen path. A major attractive point with Software Engineering is the excitement of new technologies and tools constantly being developed. The idea of being able to create a complex solution from just the console on a PC still astounds me to this very day. I am excited to be part of the Software Engineering ecosystem and am looking forward to pushing my own boundaries further to make some amazing creations of my very own!
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            );
}

export default FounderSec;