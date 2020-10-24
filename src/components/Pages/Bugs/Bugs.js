import React from 'react';

import CritterUtil from '../../../scripts/critterUtil';
import CritterTable from '../../../containers/CritterTable/CritterTable';

const Bugs = (props) => (
    <CritterTable critterData={CritterUtil.bugData} showLocation/>
);

export default Bugs;