import React from 'react';

import styles from './SortDirection.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

const sortDirection = (props) => {
    let sortIcon = faSort;
    if (props.direction === "up") {
        sortIcon = faSortUp;
    } else if (props.direction === "down") {
        sortIcon = faSortDown;
    }
    return (
        <FontAwesomeIcon icon={sortIcon} className={styles.SortDirection} />
    );
};

export default sortDirection;