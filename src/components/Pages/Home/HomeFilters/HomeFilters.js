import React from 'react';

import CritterUtil from '../../../../scripts/critterUtil.js';
import CritterButton from '../../../CritterButton/CritterButton.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import styles from './HomeFilters.module.css';
import { Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';

let getDropdownTextForAvailabilityType = (availabilityType) => {
    switch (availabilityType) {
        case CritterUtil.AvailabilityType.ALL:
            return "This month";
        case CritterUtil.AvailabilityType.NEW:
            return "New this month";
        case CritterUtil.AvailabilityType.LEAVING:
            return "Leaving next month";
        default:
            return "";
    }
}

const homeFilters = (props) => {
    const dropdownInfo = [
        {
            availabilityType: CritterUtil.AvailabilityType.ALL
        },
        {
            availabilityType: CritterUtil.AvailabilityType.NEW
        },
        {
            availabilityType: CritterUtil.AvailabilityType.LEAVING
        }
    ];

    const buttonInfo = [
        {
            type: CritterUtil.CritterType.FISH,
            active: props.showFish
        },
        {
            type: CritterUtil.CritterType.BUGS,
            active: props.showBugs
        },
        {
            type: CritterUtil.CritterType.SEA_CREATURES,
            active: props.showSeaCreatures
        }
    ];

    const dropdownTitle = <span><FontAwesomeIcon icon={faCalendarAlt} className={styles.CalendarIcon}/>{getDropdownTextForAvailabilityType(props.availabilityType)}</span>;

    return (
        <div className={styles.HomeFilters}>
            <Row>
                <Col>
                    {buttonInfo.map((critterInfo, index) => (
                        <span key={index} className={styles.CritterButton}>
                            <CritterButton
                                className={styles.CritterButton}
                                active={critterInfo.active ? true : undefined}
                                critterType={critterInfo.type}
                                handleCritterButtonClicked={props.handleCritterButtonClicked}
                            />
                        </span>
                    ))}
                </Col>
                <Col className={styles.DropdownContainer}>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title={dropdownTitle}
                        onSelect={props.handleAvailabilityTypeSelected}
                        variant="light"
                        size="lg"
                    >
                        {dropdownInfo.map((info, index) => (
                            <Dropdown.Item key={index} eventKey={info.availabilityType}>{getDropdownTextForAvailabilityType(info.availabilityType)}</Dropdown.Item>
                        ))}
                    </DropdownButton>
                </Col>
            </Row>
        </div>
    );
}

export default homeFilters;