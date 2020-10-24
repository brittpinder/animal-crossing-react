import React from 'react';

import CritterUtil from '../../../scripts/critterUtil';
import CritterTable from '../../../containers/CritterTable/CritterTable';

const SeaCreatures = (props) => (
    <CritterTable critterData={CritterUtil.seaCreatureData}/>
);

export default SeaCreatures;