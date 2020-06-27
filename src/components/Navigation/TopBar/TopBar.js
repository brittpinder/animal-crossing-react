import React from 'react';

import { Link } from 'react-router-dom';

const topBar = () => (
    <ul>
        <Link to='/'>Home</Link>
        <Link to='/fish'>Fish</Link>
        <Link to='/bugs'>Bugs</Link>
    </ul>
);

export default topBar;