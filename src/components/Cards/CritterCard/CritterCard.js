import React from 'react'

import styles from './CritterCard.module.css';

import Card from 'react-bootstrap/Card';

const critterCard = (props) => (
    <Card bg="light" className={styles.CritterCard}>
        <Card.Img variant="top" src={require("../../../" + props.critter.image)} />
        <Card.Body>
            <Card.Title>{props.critter.name}</Card.Title>
            <Card.Text>{props.critter.price} Bells</Card.Text>
        </Card.Body>
    </Card>
);

export default critterCard;