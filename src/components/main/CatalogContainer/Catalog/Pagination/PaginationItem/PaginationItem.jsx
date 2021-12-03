import './PaginationItem.css';
import { connect } from 'react-redux';
import { changeCurrentPage } from '../../../../../../reducer/actionCreators';
import { getCurrentPage } from '../../../../../../selectors/loadData';
import PropTypes from 'prop-types';
import React from 'react';

const PaginationItem = ({ currentPage, number, onChangePage }) => {
    const onPaginationItemClick = () => {
        onChangePage(number);
    };

    return (
        <li className={currentPage === number ? "pagination-item active" : "pagination-item"} onClick={onPaginationItemClick}> {number} </li>
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
        onChangePage: (currentPage) => dispath(changeCurrentPage(currentPage)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(PaginationItem);
