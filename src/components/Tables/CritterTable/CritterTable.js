import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

import styles from './CritterTable.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import TimeUtil from '../../../scripts/timeUtil';

class CritterTable extends Component {
    getSeasonClass = (season, dark) => {
        let seasonClass = null;
        switch (season) {
            case "Winter": seasonClass = dark ? styles.WinterDark : styles.Winter; break;
            case "Spring": seasonClass = dark ? styles.SpringDark : styles.Spring; break;
            case "Summer": seasonClass = dark ? styles.SummerDark : styles.Summer; break;
            case "Fall": seasonClass = dark ? styles.FallDark : styles.Fall; break;
        }
        return seasonClass;
    }

    render() {
        const monthHeaders = [];
        for (const month of TimeUtil.months) {
            monthHeaders.push(<th key={month.shortName}>{month.shortName}</th>);
        }

        return (
            <Table bordered striped responsive size="sm" className={styles.Table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Location</th>
                        <th>Time</th>
                        {monthHeaders}
                    </tr>
                </thead>
                <tbody>
                    {this.props.critterData.map((critter, index) => (
                        <tr key={critter.name}>
                            <td>{critter.name}</td>
                            <td><img src={require("../../../" + critter.image)} /></td>
                            <td>{critter.price}</td>
                            <td>{critter.location}</td>
                            <td>{critter.timeText}</td>
                            {TimeUtil.months.map((month) => (
                                <td key={month.shortName} className={this.getSeasonClass(month.season, index % 2 == 0)}>
                                    {critter.months.includes(month.id) ? <FontAwesomeIcon icon={faCheck} /> : null
                                }</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}

export default CritterTable;