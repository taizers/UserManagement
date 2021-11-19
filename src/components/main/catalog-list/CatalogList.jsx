import './CatalogList.css';
import CardsList from './cards-list/CardsList';
import Pagination from './pagination/Pagination';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import Loading from '../../Loading/Loading';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Popup from '../../popup/Popup';
import { getUsersData, getPagesCount, getIsLoading, getError } from '../../../reducer/loadData/selectors';
import { getActivePopup } from '../../../reducer/setActivPopup/selectors';
import { Route } from 'react-router';
import { pathLinks } from '../../../consts';
//<Route path = {pathLinks.error} element={<ErrorPage error = {error} />} /> 
const CatalogList = ({ cardsData, totalPages, loading, error, currentActivePupup }) => {
    if (loading || error || currentActivePupup) {
        if (loading) {
            return <Loading />
        }
        if (error) {
            return  <ErrorPage error = {error} /> 
        }
        if (currentActivePupup) {
            return <Popup />
        }
    } else {
        return (
            <div className="social-network-app__results results">
                <CardsList cardsData = {cardsData}/>
                <Pagination pages = {totalPages}/>
            </div>
        );
    };

};

CatalogList.propTypes = {
    cardsData: PropTypes.arrayOf(PropTypes.object),
    totalPages: PropTypes.arrayOf(PropTypes.number),
    loading: PropTypes.bool.isRequired,
    currentActivePupup: PropTypes.object,
};

const mapStateToProps = (state,ownProps) => {
    return Object.assign({}, ownProps, {
        cardsData : getUsersData(state),
        totalPages : getPagesCount(state),
        loading: getIsLoading(state),
        error: getError(state),
        currentActivePupup: getActivePopup(state),
    });
};
  
export default connect(mapStateToProps)(CatalogList);
