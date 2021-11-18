import './CatalogList.css';
import CardsList from './cards-list/CardsList';
import Pagination from './pagination/Pagination';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import Loading from '../../Loading/Loading';
import ErrorPage from '../../error-page/ErrorPage';
import Popup from '../../popup/Popup';

const CatalogList = ({ cardsData, totalPages, loading, error, currentActivePupup }) => {
    if (loading || error || currentActivePupup) {
        if (loading) {
            return <Loading />
        }
        if (error) {
            return <ErrorPage />
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
    error: PropTypes.bool.isRequired,
    currentActivePupup: PropTypes.object,
};

const mapStateToProps = (state,ownProps) => {
    return Object.assign({}, ownProps, {
        cardsData : state.currentCardsData,
        totalPages : state.pages,
        loading: state.loading,
        error: state.error,
        currentActivePupup: state.currentActivePupup,
    });
};
  
export default connect(mapStateToProps)(CatalogList);
