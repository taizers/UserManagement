import './RedactionContainer.css';
import Redaction from './Redaction/Redaction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { pushedData, changeActivePopup } from '../../reducer/actionCreators';
import ErrorPage from '../ErrorPage/ErrorPage';
import { getActivePopup } from '../../selectors/setActivPopup';
import { getCurrentPage } from '../../selectors/loadData';
import { useParams } from 'react-router';
import React from 'react';

const RedactionContainer = ({ currentActivePupup, updateServerData, currentPage, changePopup }) => {
    const pathParams = useParams();

    if (currentActivePupup && +currentActivePupup.id === +pathParams.id) {
        return <Redaction currentActivePupup={currentActivePupup} updateServerData={updateServerData} currentPage={currentPage} changePopup={changePopup} />
    }

    return <ErrorPage error="Page not found" />
};

RedactionContainer.propTypes = {
    currentActivePupup: PropTypes.object,
    updateServerData: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    changePopup: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        currentActivePupup: getActivePopup(state),
        currentPage: getCurrentPage(state),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        updateServerData: (formData, id, currentPage) => dispath(pushedData(formData, id, currentPage)),
        changePopup: (popupData) => dispath(changeActivePopup(popupData)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(RedactionContainer);
