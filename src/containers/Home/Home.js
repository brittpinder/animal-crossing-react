import React, { Component } from 'react';

import TimeUtil from '../../scripts/timeUtil';
import CritterUtil from '../../scripts/critterUtil';
import CritterCard from '../../components/Cards/CritterCard/CritterCard';

import { Container, Jumbotron } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1>New in {TimeUtil.getCurrentMonthName()}!</h1>
                    <p>These critters are now available</p>
                </Jumbotron>
                {CritterUtil.getCrittersNewThisMonth().map(critter => (
                    <CritterCard critter={critter} />
                ))}
            </Container>
        );
    }
}

export default Home;