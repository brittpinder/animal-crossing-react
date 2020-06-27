import React, { Component } from 'react';

import CritterUtil from '../../scripts/critterUtil';
import CritterTable from '../../components/Tables/CritterTable/CritterTable';

const Bugs = (props) => (
    <React.Fragment>
        <h1>Bugs</h1>
        <CritterTable critterData={CritterUtil.bugData}/>
    </React.Fragment>
);

export default Bugs;