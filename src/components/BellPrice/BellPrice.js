import React from 'react';

import styles from './BellPrice.module.css';

import coin from '../../assets/images/icons/coin.png';

const bellPrice = (props) => (
    <div className={styles.BellPrice}>
        <img src={coin} alt="coin" />
        <span>{props.price}</span>
    </div>
);

export default bellPrice;