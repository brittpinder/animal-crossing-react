import React, { Component } from 'react';
import { connect } from 'react-redux';

import _ from 'lodash/array';

import TimeUtil from '../../../scripts/timeUtil';
import CritterUtil from '../../../scripts/critterUtil';
import CritterCard from '../../CritterCard/CritterCard';
import BlathersMessage from '../../BlathersMessage/BlathersMessage';

import { Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Container>
                <BlathersMessage month={TimeUtil.getCurrentMonthName()}/>
                {_.chunk(CritterUtil.getAllCrittersNewThisMonth(this.props.isNorthernHemisphere), 3).map((critterGroup, groupIndex) => (
                    <Row key={groupIndex}>
                        {critterGroup.length === 1 ? <Col></Col> : null}
                        {critterGroup.map(critter => (
                            <Col md key={critter.name}>
                                <CritterCard critter={critter} />
                            </Col>
                        ))}
                        {critterGroup.length < 3 ? <Col></Col> : null}
                    </Row>
                ))}
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        isNorthernHemisphere: state.isNorthernHemisphere
    }
}

export default connect(mapStateToProps)(Home);