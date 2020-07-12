import React from 'react'

import styles from './CritterCard.module.css';

import BellPrice from '../../BellPrice/BellPrice';

import { Card, Row, Col } from 'react-bootstrap';

const critterCard = (props) => (
    <Card bg="light" className={styles.CritterCard}>
        <Card.Img variant="top" src={require("../../../" + props.critter.image)} />
        <Card.Body>
            <Card.Title>{props.critter.name}</Card.Title>
        </Card.Body>
        <Card.Footer className={styles.Footer}>
            <Row>
                <Col>
                    <Card.Text>{props.critter.location}</Card.Text>
                </Col>
                <Col>
                    <BellPrice price={props.critter.price} />
                </Col>
                <Col>
                    <Card.Text>{props.critter.timeText}</Card.Text>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);

export default critterCard;