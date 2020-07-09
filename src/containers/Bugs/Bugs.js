import React, { Component } from 'react';

import CritterUtil from '../../scripts/critterUtil';
import CritterTable from '../../components/Tables/CritterTable/CritterTable';

const Bugs = (props) => (
    <React.Fragment>
        <CritterTable critterData={CritterUtil.bugData}/>
    </React.Fragment>
);

export default Bugs;