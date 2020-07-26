import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from 'react-bootstrap/Table';
import styles from './CritterTable.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import _ from 'lodash/lang';

import TimeUtil from '../../scripts/timeUtil';
import SortDirection from '../../components/Tables/SortDirection/SortDirection';
import Search from '../../components/Tables/Search/Search';

const sortType = {
    NAME: 'name',
    PRICE: 'price'
}

class CritterTable extends Component {
    state = {
        filteredCritters: this.props.critterData,
        sortingType: sortType.NAME,
        ascending: true
    }

    sortArray = (array, ascending, sortingType) => {
        if (ascending) {
            array.sort((a, b) => (a[sortingType] > b[sortingType]) ? 1 : -1);
        } else {
            array.sort((a, b) => (a[sortingType] < b[sortingType]) ? 1 : -1);
        }
    }

    sort = (sortingType) => {
        let sortedCritters = _.cloneDeep(this.state.filteredCritters);
        let ascending = true;
        if (this.state.sortingType === sortingType && this.state.ascending) {
            ascending = false;
        }
        this.sortArray(sortedCritters, ascending, sortingType);
        this.setState({filteredCritters: sortedCritters, sortingType: sortingType, ascending: ascending});
    }

    filterAndSort = (text) => {
        let filteredCritters = [];
        const filterText = text.toLowerCase();
        for (const critter of this.props.critterData) {
            if (critter.name.toLowerCase().includes(filterText)) {
                filteredCritters.push(critter);
            }
        }
        this.sortArray(filteredCritters, this.state.ascending, this.state.sortingType);
        this.setState({filteredCritters: filteredCritters});
    }

    onNameClicked = () => {
        this.sort(sortType.NAME);
    }

    onPriceClicked = () => {
        this.sort(sortType.PRICE);
    }

    onSearchTextChanged = (event) => {
        this.filterAndSort(event.target.value);
    }

    getSortDirection = (sortingType) => {
        if (this.state.sortingType === sortingType) {
            return this.state.ascending ? "up" : "down";
        }
        return "none";
    }

    getSeasonClass = (month, dark) => {
        let seasonClass = null;
        let season = this.props.isNorthernHemisphere ? month.northSeason : month.southSeason;
        switch (season) {
            case "Winter": seasonClass = dark ? styles.WinterDark : styles.Winter; break;
            case "Spring": seasonClass = dark ? styles.SpringDark : styles.Spring; break;
            case "Summer": seasonClass = dark ? styles.SummerDark : styles.Summer; break;
            case "Fall": seasonClass = dark ? styles.FallDark : styles.Fall; break;
            default:
        }
        return seasonClass;
    }

    getMonthsForCritter = (critter) => {
        return this.props.isNorthernHemisphere ? critter.months : critter.southMonths;
    }

    render() {
        const monthHeaders = [];
        for (const month of TimeUtil.months) {
            monthHeaders.push(<th key={month.shortName}>{month.shortName}</th>);
        }
        let priceClasses = [styles.PriceColumn, styles.SortableColumn];

        return (
            <React.Fragment>
                <Search onTextChanged={this.onSearchTextChanged.bind(this)}/>
                <Table bordered striped responsive size="sm" className={styles.Table}>
                    <thead>
                        <tr>
                            <th onClick={this.onNameClicked} className={styles.SortableColumn}>
                                Name
                                <SortDirection direction={this.getSortDirection(sortType.NAME)}/>
                            </th>
                            <th>Image</th>
                            <th onClick={this.onPriceClicked} className={priceClasses.join(' ')}>
                                Price
                                <SortDirection direction={this.getSortDirection(sortType.PRICE)}/>
                            </th>
                            {this.props.showLocation ? <th>Location</th> : null}
                            <th>Time</th>
                            {monthHeaders}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filteredCritters.map((critter, index) => (
                            <tr key={critter.name}>
                                <td>{critter.name}</td>
                                <td><img src={require("../../" + critter.image)} alt={critter.name}/></td>
                                <td>{critter.price}</td>
                                {this.props.showLocation ? <td>{critter.location}</td> : null}
                                <td>{critter.timeText}</td>
                                {TimeUtil.months.map((month) => (
                                    <td key={month.shortName} className={this.getSeasonClass(month, index % 2 === 0)}>
                                        {this.getMonthsForCritter(critter).includes(month.id) ? <FontAwesomeIcon icon={faCheck} /> : null}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isNorthernHemisphere: state.isNorthernHemisphere
    }
}

export default connect(mapStateToProps)(CritterTable);