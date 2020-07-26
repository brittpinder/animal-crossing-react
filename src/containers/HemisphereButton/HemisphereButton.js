import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import Button from 'react-bootstrap/Button';

class HemisphereButton extends Component {
    render() {
        return (
            <Button onClick={this.props.onToggleHemisphere}>{this.props.hemisphere}</Button>
        );
    }
}

const mapStateToProps = state => {
    return {
        hemisphere: state.hemisphere
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleHemisphere: () => dispatch({type: actionTypes.TOGGLE_HEMISPHERE})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HemisphereButton);
