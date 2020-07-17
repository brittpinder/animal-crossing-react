import React from 'react'

import styles from './BlathersMessage.module.css';

import { Container, Row, Col } from 'react-bootstrap';
import BlathersImage from '../../assets/images/blathers.png';
import SpeechBubble from '../../assets/images/speech-bubble.svg';

const blathersMessage = (props) => (
    <Container className={styles.BlathersMessage}>
        <Row>
            <Col sm={3}>
                <img id={styles.blathers} src={BlathersImage} />
            </Col>
            <Col sm={9}>
                <img id={styles.bubble} src={SpeechBubble} />
                <div id={styles.bubbletext}>Hoo hoo! Look at all the critters you can find in {props.month}!</div>
                <div id={styles.name}>Blathers</div>
            </Col>
        </Row>
    </Container>
);

export default blathersMessage;