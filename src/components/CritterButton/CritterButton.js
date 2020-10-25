import React from 'react'

import CritterUtil from '../../scripts/critterUtil.js';
import FishIcon from '../../assets/images/icons/fish.png';
import FishIconActive from '../../assets/images/icons/fish-active.png';
import BugIcon from '../../assets/images/icons/bugs.png';
import BugIconActive from '../../assets/images/icons/bugs-active.png';
import SeaCreaturesIcon from '../../assets/images/icons/seaCreatures.png';
import SeaCreaturesIconActive from '../../assets/images/icons/seaCreatures-active.png';

import styles from './CritterButton.module.css';

const critterButton = (props) => {
    let classes = [styles.CritterButton];
    if (props.active) {
        classes.push(styles.Active);
    }

    let image = props.active ? FishIconActive : FishIcon;
    let altText = "Fish";
    if (props.critterType === CritterUtil.CritterType.BUGS) {
        image = props.active ? BugIconActive : BugIcon;
        altText = "Bugs";
    } else if (props.critterType === CritterUtil.CritterType.SEA_CREATURES) {
        image = props.active ? SeaCreaturesIconActive : SeaCreaturesIcon;
        altText = "Sea Creatures"
    }

    return (
        <span className={classes.join(" ")} onClick={() => props.handleCritterButtonClicked(props.critterType)}>
            <img src={image} alt={altText}/>
        </span>
    );
}

export default critterButton;