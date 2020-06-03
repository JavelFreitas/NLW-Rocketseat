import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

const CreatePoint = () => {
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta"/>
            </header>
        </div>
    );
};

export default CreatePoint; 