import './RedactionContainer.css';
import Redaction from './Redaction/Redaction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actionCreators from '../../reducer/actionCreators';
import ErrorPage from '../ErrorPage/ErrorPage';
import { getActivePopup } from '../../selectors/loadData';
import { getCurrentPage } from '../../selectors/setActivPopup';

const RedactionContainer = ({ currentActivePupup, updateServerData, currentPage }) => {
    if (currentActivePupup) {
        return <Redaction currentActivePupup={currentActivePupup} updateServerData={updateServerData} currentPage={currentPage} />
    } else {
        return <ErrorPage error="Page not found" />
    }
};

RedactionContainer.propTypes = {
    currentActivePupup: PropTypes.object,
    updateServerData: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps, {
        currentActivePupup: getActivePopup(state),
        currentPage: getCurrentPage(state),
    });
};

const mapDispathToProps = (dispath) => {
    return {
        updateServerData: (formData, id, currentPage) => dispath(actionCreators['PUSHED_DATA'](formData, id, currentPage)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(RedactionContainer);
