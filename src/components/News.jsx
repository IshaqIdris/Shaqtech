import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import NewsList from './newsComp/newsList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import './News.css';

class News extends Component {
    render() {
        const {projects} = this.props;
        return (
            <div className="news">
                <Container>
                    <Row>
                        <h1 className="display-3 news-head-main text-light">Shaq News</h1>
                    </Row>
                    <Row>
                        <p className="lead news-head  text-light">Look what we're up to!</p>
                    </Row>
                    <Row>
                        <Col sm={12} md={9}>
                            <NewsList projects={projects} />
                        </Col>
                        <Col sm={12} md={3}>
                            <div className="twitter">
                                <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="sharkyferrari"
                                options={{height: 800}}
                                />
                            </div>
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