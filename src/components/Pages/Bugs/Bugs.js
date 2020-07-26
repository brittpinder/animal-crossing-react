import React from 'react';

import CritterUtil from '../../../scripts/critterUtil';
import CritterTable from '../../../containers/CritterTable/CritterTable';

const Bugs = (props) => (
    <React.Fragment>
        <CritterTable critterData={CritterUtil.bugData} showLocation/>
    </React.Fragment>
);

export default Bugs;