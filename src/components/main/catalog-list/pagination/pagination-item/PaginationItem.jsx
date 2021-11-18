import './PaginationItem.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Operation } from '../../../../../reducer';
import PropTypes from 'prop-types';

const PaginationItem = ({ currentPage, number, onChangePage }) => {

    const onPaginationItemClick = () =>{
        onChangePage(number);
    };

    return (
          <li> <Link to="" className = {currentPage === number? "active" :""} onClick = {onPaginationItemClick}> {number}</Link> </li>
    );
};

PaginationItem.propTypes = {
    onChangePage: PropTypes.func.isRequired,
    number : PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
};


const mapStateToProps = (state,ownProps) => {
    return Object.assign({}, ownProps, {
        currentPage : state.currentPage 
    });
};

const mapDispathToProps = (dispath) => {
    return { 
        onChangePage: (currentPage) => dispath(Operation.loadData(currentPage)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(PaginationItem);
