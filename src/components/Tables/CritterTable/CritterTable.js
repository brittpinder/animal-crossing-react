import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

import styles from './CritterTable.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import TimeUtil from '../../../scripts/timeUtil';

const sortType = {
    NAME: 'name',
    PRICE: 'price'
}

class CritterTable extends Component {
    state = {
        critters: this.props.critterData,
        sortedBy: sortType.NAME,
        ascending: true
    }

    sortBy = (sortingType, ascendingFn, descendingFn) => {
        let sortedCritters = [...this.state.critters];
        let ascending = true;
        if (this.state.sortedBy === sortingType && this.state.ascending) {
            ascending = false;
        }
        sortedCritters.sort(ascending ? ascendingFn : descendingFn);
        this.setState({critters: sortedCritters, sortedBy: sortingType, ascending: ascending});
    }

    onNameClicked = () => {
        this.sortBy(sortType.NAME,
            (a, b) => (a.name > b.name) ? 1 : -1,
            (a, b) => (a.name < b.name) ? 1 : -1);
    }

    onPriceClicked = () => {
        this.sortBy(sortType.PRICE,
            (a, b) => (a.price > b.price) ? 1 : -1,
            (a, b) => (a.price < b.price) ? 1 : -1);
    }

    getSeasonClass = (season, dark) => {
        let seasonClass = null;
        switch (season) {
            case "Winter": seasonClass = dark ? styles.WinterDark : styles.Winter; break;
            case "Spring": seasonClass = dark ? styles.SpringDark : styles.Spring; break;
            case "Summer": seasonClass = dark ? styles.SummerDark : styles.Summer; break;
            case "Fall": seasonClass = dark ? styles.FallDark : styles.Fall; break;
            default:
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
                        <th onClick={this.onNameClicked}>Name</th>
                        <th>Image</th>
                        <th onClick={this.onPriceClicked}>Price</th>
                        <th>Location</th>
                        <th>Time</th>
                        {monthHeaders}
                    </tr>
                </thead>
                <tbody>
                    {this.state.critters.map((critter, index) => (
                        <tr key={critter.name}>
                            <td>{critter.name}</td>
                            <td><img src={require("../../../" + critter.image)} alt={critter.name}/></td>
                            <td>{critter.price}</td>
                            <td>{critter.location}</td>
                            <td>{critter.timeText}</td>
                            {TimeUtil.months.map((month) => (
                                <td key={month.shortName} className={this.getSeasonClass(month.season, index % 2 === 0)}>
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