import React, { Component } from 'react';

import _ from 'lodash/array';

import TimeUtil from '../../scripts/timeUtil';
import CritterUtil from '../../scripts/critterUtil';
import CritterCard from '../../components/Cards/CritterCard/CritterCard';
import BlathersMessage from '../../components/BlathersMessage/BlathersMessage';

import { Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Container>
                <BlathersMessage month={TimeUtil.getCurrentMonthName()}/>
                {_.chunk(CritterUtil.getCrittersNewThisMonth(), 3).map((critterGroup, groupIndex) => (
                    <Row key={groupIndex}>
                        {critterGroup.map(critter => (
                            <Col md key={critter.name}>
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