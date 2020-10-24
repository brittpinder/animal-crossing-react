import React from 'react'

import styles from './BlathersMessage.module.css';

import { Container, Row, Col } from 'react-bootstrap';
import BlathersImage from '../../assets/images/blathers.png';
import SpeechBubble from '../../assets/images/speech-bubble.svg';
import CritterUtil from '../../scripts/critterUtil';

const blathersMessage = (props) => {
    let message = "Hoo hoo! Look at all the critters you can catch in " + props.month + "!";
    if (props.availabilityType === CritterUtil.AvailabilityType.NEW) {
        message = "These critters are new in " + props.month + "!";
    } else if (props.availabilityType === CritterUtil.AvailabilityType.LEAVING) {
        message = "Last chance! These critters are leaving next month!";
    }
    return (
        <Container className={styles.BlathersMessage}>
            <Row>
                <Col sm={3}>
                    <img id={styles.blathers} src={BlathersImage} alt="blathers"/>
                </Col>
                <Col sm={9}>
                    <img id={styles.bubble} src={SpeechBubble} alt="speech-bubble"/>
                    <div id={styles.bubbletext}>{message}</div>
                    <div id={styles.name}>Blathers</div>
                </Col>
            </Row>
        </Container>
    );
}

export default blathersMessage;