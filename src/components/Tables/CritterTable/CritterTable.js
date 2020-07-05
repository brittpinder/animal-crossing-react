import React from 'react';

const critterTable = (props) => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>
            {props.critterData.map(critter => (
                <tr key={critter.name}>
                    <td>{critter.name}</td>
                    <td><img src={require("../../../" + critter.image)} /></td>
                    <td>{critter.price}</td>
                    <td>{critter.location}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default critterTable;