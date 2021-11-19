import './Main.css';
import CatalogList from './catalog-list/CatalogList';
import React from 'react';
import Header from '../Header/Header';

const Main = () => {
    return ( 
        <React.Fragment>
            <Header />
            <div className="social-network__wrapper">
                <CatalogList />
            </div>
        </React.Fragment>
    );
};

export default Main;
