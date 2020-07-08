import React from 'react';

import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const topBar = () => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">Animal Crossing</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/fish" >Fish</Nav.Link>
                <Nav.Link as={Link} to="/bugs" >Bugs</Nav.Link>
            </Nav>
    </Navbar>
);

export default topBar;