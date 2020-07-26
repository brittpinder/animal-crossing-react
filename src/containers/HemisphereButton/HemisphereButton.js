import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import Button from 'react-bootstrap/Button';

class HemisphereButton extends Component {
    render() {
        const hemisphere = this.props.isNorthernHemisphere ? 'North' : 'South';
        return (
            <Button onClick={this.props.onToggleHemisphere}>{hemisphere}</Button>
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
