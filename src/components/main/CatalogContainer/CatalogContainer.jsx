import './CatalogContainer.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../../Loading/Loading';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Popup from '../../Popup/Popup';
import { getUsersData, getPagesCount, getIsLoading, getError, getCurrentPage } from '../../../selectors/loadData';
import { getActivePopup } from '../../../selectors/setActivPopup';
import Catalog from './Catalog/Catalog';
import React from 'react';
import { changeActivePopup, requestForData } from '../../../reducer/actionCreators';
import { useEffect } from 'react';

const CatalogContainer = ({ cardsData, totalPages, loading, error, currentActivePupup, changePopup, loadUsers, currentPage }) => {    
    useEffect(() => {
        loadUsers(currentPage);
    },[loadUsers, currentPage]);

    if (loading || cardsData == null) {
        return <Loading />
    }

    if (error) {
        return <ErrorPage error={error} />
    }

    if (cardsData.length === 0) {
        return <p className="cards-empty">Сотрудники не найдены</p>
    }

    if (currentActivePupup) {
        return <React.Fragment>
            <Catalog cardsData={cardsData} totalPages={totalPages} changePopup={changePopup} />
            <Popup popup={currentActivePupup} />
        </React.Fragment>
    }
    
    return <Catalog cardsData={cardsData} totalPages={totalPages} changePopup={changePopup} />
};

CatalogContainer.propTypes = {
    cardsData: PropTypes.arrayOf(PropTypes.object),
    totalPages: PropTypes.arrayOf(PropTypes.number),
    loading: PropTypes.bool.isRequired,
    currentActivePupup: PropTypes.object,
    changePopup: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        cardsData: getUsersData(state),
        totalPages: getPagesCount(state),
        loading: getIsLoading(state),
        error: getError(state),
        currentActivePupup: getActivePopup(state),
        currentPage: getCurrentPage(state),
    };
};
const mapDispathToProps = (dispath) => {
    return {
        changePopup: (popupData) => dispath(changeActivePopup(popupData)),
        loadUsers: (currentPage) => dispath(requestForData(currentPage)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(CatalogContainer);
