import './CatalogContainer.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../../Loading/Loading';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Popup from '../../Popup/Popup';
import { getUsersData, getPagesCount, getIsLoading, getError } from '../../../selectors/setActivPopup';
import { getActivePopup } from '../../../selectors/loadData';
import Catalog from './Catalog/Catalog';
import React from 'react';

const CatalogContainer = ({ cardsData, totalPages, loading, error, currentActivePupup }) => {
    if (loading) {
        return <Loading />
    }

    if (error) {
        return <ErrorPage error={error} />
    }

    if (currentActivePupup) {
        return <React.Fragment>
            <Catalog cardsData={cardsData} totalPages={totalPages} />
            <Popup />
        </React.Fragment>
    }

    return <Catalog cardsData={cardsData} totalPages={totalPages} />
};

CatalogContainer.propTypes = {
    cardsData: PropTypes.arrayOf(PropTypes.object),
    totalPages: PropTypes.arrayOf(PropTypes.number),
    loading: PropTypes.bool.isRequired,
    currentActivePupup: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps, {
        cardsData: getUsersData(state),
        totalPages: getPagesCount(state),
        loading: getIsLoading(state),
        error: getError(state),
        currentActivePupup: getActivePopup(state),
    });
};

export default connect(mapStateToProps)(CatalogContainer);
