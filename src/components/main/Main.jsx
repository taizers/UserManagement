import './Main.css';
import CatalogContainer from './CatalogContainer/CatalogContainer';
import React from 'react';
import Header from '../Header/Header';

const Main = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="social-network__wrapper">
                <CatalogContainer />
            </div>
        </React.Fragment>
    );
};

export default Main;
