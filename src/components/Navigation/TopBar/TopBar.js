import React from 'react';

import styles from './TopBar.module.css';

import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

const topBar = () => (
    <Navbar variant="dark" className={styles.TopBar}>
        <Navbar.Brand as={Link} to="/"><FontAwesomeIcon icon={faLeaf}/> Animal Crossing</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/fish" >Fish</Nav.Link>
                <Nav.Link as={Link} to="/bugs" >Bugs</Nav.Link>
            </Nav>
    </Navbar>
);

export default topBar;