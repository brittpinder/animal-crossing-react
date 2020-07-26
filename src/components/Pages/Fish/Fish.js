import React from 'react';

import CritterUtil from '../../../scripts/critterUtil';
import CritterTable from '../../../containers/CritterTable/CritterTable';

const Fish = (props) => (
    <React.Fragment>
        <CritterTable critterData={CritterUtil.fishData} showLocation/>
    </React.Fragment>
);

export default Fish;