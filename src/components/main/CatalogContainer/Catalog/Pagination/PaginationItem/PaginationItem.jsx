import './PaginationItem.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestForData } from '../../../../../../reducer/actionCreators';
import { getCurrentPage } from '../../../../../../selectors/loadData';
import PropTypes from 'prop-types';

const PaginationItem = ({ currentPage, number, onChangePage }) => {
    const onPaginationItemClick = () => {
        onChangePage(number);
    };

    return (
        <li> <Link to="" className={currentPage === number ? "active" : ""} onClick={onPaginationItemClick}> {number}</Link> </li>
    );
};

PaginationItem.propTypes = {
    onChangePage: PropTypes.func.isRequired,
    number: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        currentPage: getCurrentPage(state),
    };
};

const mapDispathToProps = (dispath) => {
    return {
        onChangePage: (currentPage) => dispath(requestForData(currentPage)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(PaginationItem);
