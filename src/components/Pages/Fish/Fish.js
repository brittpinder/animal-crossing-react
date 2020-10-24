import React from 'react';

import CritterUtil from '../../../scripts/critterUtil';
import CritterTable from '../../../containers/CritterTable/CritterTable';

const Fish = (props) => (
    <CritterTable critterData={CritterUtil.fishData} showLocation/>
);

export default Fish;