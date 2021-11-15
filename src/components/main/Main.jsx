import './Main.css';
import CatalogList from './catalog-list/CatalogList';
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';

const Main = (props) => {
    const { data } = props;
    return ( 
        <React.Fragment>
            <Header />
            <div className="social-network__wrapper">
                <CatalogList data ={data}/>
            </div>
        </React.Fragment>
    );
};

Main.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

export default Main;