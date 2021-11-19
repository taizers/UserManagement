import './RedactionContainer.css';
import Redaction from './Redaction/Redaction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actionCreators from '../../reducer/actionCreators';
import ErrorPage from '../ErrorPage/ErrorPage';
import { getActivePopup } from '../../reducer/setActivPopup/selectors';

const RedactionContainer = ({ currentActivePupup, updateServerData }) => {
    if (currentActivePupup) {
        return <Redaction currentActivePupup={currentActivePupup} updateServerData={updateServerData} />
    } else {
        return <ErrorPage error="Page not found" />
    }
};

RedactionContainer.propTypes = {
    currentActivePupup: PropTypes.object,
    updateServerData: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps, {
        currentActivePupup: getActivePopup(state),
    });
};

const mapDispathToProps = (dispath) => {
    return {
        updateServerData: (formData, popup) => dispath(actionCreators['PUSHED_DATA'](formData, popup)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(RedactionContainer);
