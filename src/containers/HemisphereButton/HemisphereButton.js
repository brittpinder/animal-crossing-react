import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import styles from './HemisphereButton.module.css';
import NorthImg from '../../assets/images/icons/north.png';
import SouthImg from '../../assets/images/icons/south.png';

import Button from 'react-bootstrap/Button';

class HemisphereButton extends Component {
    render() {
        const hemisphere = this.props.isNorthernHemisphere ? 'Northern Hemisphere' : 'Southern Hemisphere';
        const image = this.props.isNorthernHemisphere ? NorthImg : SouthImg;
        return (
            <Button onClick={this.props.onToggleHemisphere} className={styles.HemisphereButton}>
                <img src={image} alt={hemisphere} title={hemisphere}/>
            </Button>
        );
    }
}

const mapStateToProps = state => {
    return {
        isNorthernHemisphere: state.isNorthernHemisphere
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleHemisphere: () => dispatch({type: actionTypes.TOGGLE_HEMISPHERE})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HemisphereButton);
