import React, { Component } from 'react';

import CritterUtil from '../../scripts/critterUtil';
import CritterCard from '../../components/Cards/CritterCard/CritterCard';

import { Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Container>
                {CritterUtil.fishData.map(fish => (
                    <CritterCard critter={fish} />
                ))}
            </Container>
        );
    }
}

export default Home;