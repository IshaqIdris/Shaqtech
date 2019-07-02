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
                    <NewsList projects={projects} />
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