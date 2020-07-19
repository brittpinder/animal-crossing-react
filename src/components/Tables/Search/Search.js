import React from 'react';

import { InputGroup, FormControl } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.css';

const search = (props) => (
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
            <InputGroup.Text className={styles.SearchIcon} id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
            className={styles.TextBox}
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
            onChange={props.onTextChanged}
        />
    </InputGroup>
);

export default search;