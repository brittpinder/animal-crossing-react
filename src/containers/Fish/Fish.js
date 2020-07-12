import React from 'react';

import CritterUtil from '../../scripts/critterUtil';
import CritterTable from '../../components/Tables/CritterTable/CritterTable';

const Fish = (props) => (
    <React.Fragment>
        <CritterTable critterData={CritterUtil.fishData}/>
    </React.Fragment>
);

export default Fish;