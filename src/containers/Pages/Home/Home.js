import React, { Component } from 'react';
import { connect } from 'react-redux';

import _ from 'lodash/array';

import TimeUtil from '../../../scripts/timeUtil';
import CritterUtil from '../../../scripts/critterUtil';
import CritterCard from '../../../components/CritterCard/CritterCard';
import BlathersMessage from '../../../components/BlathersMessage/BlathersMessage';
import HomeFilters from '../../../components/Pages/Home/HomeFilters/HomeFilters';

import styles from './Home.module.css';
import { Container, Row, Col } from 'react-bootstrap';

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

class Home extends Component {
    state = {
        availabilityType: CritterUtil.AvailabilityType.ALL,
        showFish: true,
        showBugs: true,
        showSeaCreatures: true
    }

    handleAvailabilityTypeSelected = (availabilitySelection) => {
        if (availabilitySelection != this.state.availabilityType) {
            this.setState({availabilityType: availabilitySelection});
        }
    }

    handleCritterButtonClicked = (critterType) => {
        switch (critterType) {
            case CritterUtil.CritterType.FISH:
                this.setState((prevState) => {
                    return {
                        showFish: !prevState.showFish
                    };
                });
                break;
            case CritterUtil.CritterType.BUGS:
                this.setState((prevState) => {
                    return {
                        showBugs: !prevState.showBugs
                    };
                });
                break;
            case CritterUtil.CritterType.SEA_CREATURES:
                this.setState((prevState) => {
                    return {
                        showSeaCreatures: !prevState.showSeaCreatures
                    };
                });
                break;
            default:
                break;
        }
    }

    getCrittersToDisplay = () => {
        let crittersToDisplay = [];
        if (this.state.showFish) {
            crittersToDisplay = [...crittersToDisplay, ...CritterUtil.getCrittersForAvailabilityType(CritterUtil.CritterType.FISH, this.state.availabilityType, this.props.isNorthernHemisphere)];
        }
        if (this.state.showBugs) {
            crittersToDisplay = [...crittersToDisplay, ...CritterUtil.getCrittersForAvailabilityType(CritterUtil.CritterType.BUGS, this.state.availabilityType, this.props.isNorthernHemisphere)];
        }
        if (this.state.showSeaCreatures) {
            crittersToDisplay = [...crittersToDisplay, ...CritterUtil.getCrittersForAvailabilityType(CritterUtil.CritterType.SEA_CREATURES, this.state.availabilityType, this.props.isNorthernHemisphere)];
        }
        return shuffle(crittersToDisplay);
    }

    render() {
        const crittersToDisplay = this.getCrittersToDisplay();
        return (
            <Container>
                <BlathersMessage
                    month={TimeUtil.getCurrentMonthName()}
                    availabilityType={this.state.availabilityType}
                />

                <HomeFilters
                    handleAvailabilityTypeSelected={this.handleAvailabilityTypeSelected}
                    handleCritterButtonClicked={this.handleCritterButtonClicked}
                    showFish={this.state.showFish}
                    showBugs={this.state.showBugs}
                    showSeaCreatures={this.state.showSeaCreatures}
                    availabilityType={this.state.availabilityType}
                />
                <div className={styles.Content}>
                    {_.chunk(crittersToDisplay, 3).map((critterGroup, groupIndex) => (
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
                </div>
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