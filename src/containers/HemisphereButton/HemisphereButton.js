import React, { Component } from 'react'

import Button from 'react-bootstrap/Button'

class HemisphereButton extends Component {
    state = {
        hemisphere: 'North'
    }

    onClick = () => {
        const newHemisphere = this.state.hemisphere === 'North' ? 'South' : 'North';
        this.setState({hemisphere: newHemisphere});
    }

    render() {
        return (
            <Button onClick={this.onClick}>{this.state.hemisphere}</Button>
        );
    }
}

export default HemisphereButton;

