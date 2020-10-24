import React from 'react';

import CritterUtil from '../../../../scripts/critterUtil.js';
import TimeUtil from '../../../../scripts/timeUtil.js';

import styles from './HomeFilters.module.css';
import { Row, Col, ButtonGroup, Button, Form } from 'react-bootstrap';

const HomeFilters = (props) => {
    const currentMonth = TimeUtil.getCurrentMonthName();
    const buttonInfo = [
        {
            availabilityType: CritterUtil.AvailabilityType.ALL,
            text: "All in " + currentMonth
        },
        {
            availabilityType: CritterUtil.AvailabilityType.NEW,
            text: "New in " + currentMonth
        },
        {
            availabilityType: CritterUtil.AvailabilityType.LEAVING,
            text: "Leaving after " + currentMonth
        }
    ];
    const checkboxInfo = [
        {
            name: "showFish",
            checked: props.showFish,
            label: "Fish"
        },
        {
            name: "showBugs",
            checked: props.showBugs,
            label: "Bugs"
        },
        {
            name: "showSeaCreatures",
            checked: props.showSeaCreatures,
            label: "Sea Creatures"
        }
    ];

    return (
        <div className={styles.HomeFilters}>
            <Row>
                <Col align="center" className={styles.MonthButtonGroup}>
                    <ButtonGroup className="d-flex">
                        {buttonInfo.map((info, index) => (
                            <Button
                                key={index}
                                active={props.availabilityType === info.availabilityType ? true : undefined}
                                onClick={() => props.handleAvailabilityTypeSelected(info.availabilityType)}
                            >
                                {info.text}
                            </Button>
                        ))}
                    </ButtonGroup>
                </Col>
            </Row>
            <Row>
                <Col align="center">
                    <span key={`inline-checkbox`}>
                        {checkboxInfo.map((info, index) => (
                            <Form.Check
                                inline
                                key={index}
                                label={info.label}
                                type="checkbox"
                                checked={info.checked}
                                name={info.name}
                                onChange={props.handleCheckboxChanged}
                                className={styles.Checkbox}
                            />
                        ))}
                    </span>
                </Col>
            </Row>
        </div>
    );
}

export default HomeFilters;