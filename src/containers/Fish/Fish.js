import React, { Component } from 'react';

import CritterUtil from '../../scripts/critterUtil';
import CritterTable from '../../components/Tables/CritterTable/CritterTable';

const Fish = (props) => (
    <React.Fragment>
        <h1>Fish</h1>
        <CritterTable critterData={CritterUtil.fishData}/>
    </React.Fragment>
);

export default Fish;