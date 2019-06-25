import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Notifications from './newsComp/notifications';
import NewsList from './newsComp/newsList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import './News.css';

class News extends Component {
    render() {
        const {projects} = this.props;
        return (
            <div className="news">
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <NewsList projects={projects} />
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

const mapStateToProps = (state) => {
    console.log(state)
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
    )(News);