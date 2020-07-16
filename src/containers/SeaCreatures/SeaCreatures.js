import React from 'react';

import CritterUtil from '../../scripts/critterUtil';
import CritterTable from '../../components/Tables/CritterTable/CritterTable';

const SeaCreatures = (props) => (
    <React.Fragment>
        <CritterTable critterData={CritterUtil.seaCreatureData}/>
    </React.Fragment>
);

export default SeaCreatures;