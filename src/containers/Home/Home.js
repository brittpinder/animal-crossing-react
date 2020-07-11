import React, { Component } from 'react';

import _ from 'lodash/array';

import TimeUtil from '../../scripts/timeUtil';
import CritterUtil from '../../scripts/critterUtil';
import CritterCard from '../../components/Cards/CritterCard/CritterCard';

import { Container, Jumbotron, Row, Col } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1>New in {TimeUtil.getCurrentMonthName()}!</h1>
                    <p>These critters are now available</p>
                </Jumbotron>
                {_.chunk(CritterUtil.getCrittersNewThisMonth(), 3).map(critterGroup => (
                    <Row>
                        {critterGroup.map(critter => (
                            <Col md>
                                <CritterCard critter={critter} />
                            </Col>
                        ))}
                    </Row>
                ))}
            </Container>
        );
    }
}

export default Home;