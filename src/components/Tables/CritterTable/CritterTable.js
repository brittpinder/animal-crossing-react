import React from 'react';
import Table from 'react-bootstrap/Table';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import TimeUtil from '../../../scripts/timeUtil';

const critterTable = (props) => {
    const monthHeaders = [];
    for (const month of TimeUtil.months) {
        monthHeaders.push(<th>{month.shortName}</th>)
    }

    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Location</th>
                    {monthHeaders}
                </tr>
            </thead>
            <tbody>
                {props.critterData.map(critter => (
                    <tr key={critter.name}>
                        <td>{critter.name}</td>
                        <td><img src={require("../../../" + critter.image)} /></td>
                        <td>{critter.price}</td>
                        <td>{critter.location}</td>
                        {TimeUtil.months.map((month) => (
                            <td>{critter.months.includes(month.id) ? <FontAwesomeIcon icon={faCheck} /> : null}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default critterTable;