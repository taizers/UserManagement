import './Pagination.css';
import PaginationItem from './pagination-item/PaginationItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Pagination = (props) => {
    const { pages } = props;

    return (
        <ul className="pagination">
            {
                pages.map(item => (
                    <PaginationItem 
                        key = {"pagination-item-"+item} 
                        number = {item} 
                    />
                ))
            }   
        </ul>
    );
};

Pagination.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.number).isRequired
};

const mapStateToProps = (state,ownProps) => {
    return Object.assign({}, ownProps, {
        pages : state.pages,
    });
};
  
export default connect(mapStateToProps)(Pagination);
