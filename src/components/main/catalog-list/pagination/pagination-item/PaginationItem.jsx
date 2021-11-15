import './PaginationItem.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionCreators } from '../../../../../reducer';
import PropTypes from 'prop-types';

const PaginationItem = (props) => {
    const { currentPage, number, onChangePage } = props;
    const onPaginationItemClick = () =>{
        onChangePage(number);
    };
    return (
          <li onClick = {onPaginationItemClick}> <Link to="" className = {currentPage === number? "active" :""}> {number}</Link> </li>
    );
};

PaginationItem.propTypes = {
    onChangePage: PropTypes.func.isRequired,
    number : PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired
};


const mapStateToProps = (state,ownProps) => {
    return Object.assign({}, ownProps, {
        currentPage : state.currentPage 
    });
};

const mapDispathToProps = (dispath) => {
    return { 
        onChangePage: (currentPage) => dispath(ActionCreators['CHANGE_ACTIVE_PAGE'](currentPage))
    }
};

export default connect(mapStateToProps, mapDispathToProps)(PaginationItem);
