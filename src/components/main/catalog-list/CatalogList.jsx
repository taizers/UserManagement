import './CatalogList.css';
import CardsList from './cards-list/CardsList';
import Pagination from './pagination/Pagination';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CatalogList = (props) => {
    const { data, currentPage } = props;
    const countCardsOnPage = 6;
    const total = Math.ceil(data.length/countCardsOnPage);

    return (
        <div className="social-network-app__results results">
            <CardsList 
                cardsData = {data.slice(countCardsOnPage * (currentPage-1),countCardsOnPage * currentPage)}  
            />
            <Pagination 
                totalPages = {total}
            />
        </div>
    );
};

CatalogList.propTypes = {
    data: PropTypes.arrayOf(Object).isRequired,
    currentPage: PropTypes.number.isRequired
};

const mapStateToProps = (state,ownProps) => {
    return Object.assign({}, ownProps, {
        currentPage : state.currentPage 
    });
};
  
const mapDispathToProps = (dispath) => {
    return {}
};
  
export default connect(mapStateToProps, mapDispathToProps)(CatalogList);
