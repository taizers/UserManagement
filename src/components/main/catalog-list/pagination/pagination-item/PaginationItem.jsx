import './PaginationItem.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionCreators, Operation } from '../../../../../reducer';
import PropTypes from 'prop-types';

const PaginationItem = (props) => {
    const { currentPage, number, onChangePage, turnOverCards } = props;
    
    const onPaginationItemClick = () =>{
        onChangePage(number);
        turnOverCards(number);
    };

    return (
          <li> <Link to="" className = {currentPage === number? "active" :""} onClick = {onPaginationItemClick}> {number}</Link> </li>
    );
};

PaginationItem.propTypes = {
    onChangePage: PropTypes.func.isRequired,
    turnOverCards: PropTypes.func.isRequired,
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
        onChangePage: (currentPage) => dispath(ActionCreators['CHANGE_ACTIVE_PAGE'](currentPage)),
        turnOverCards: (currentPage) => dispath(Operation.changeData(currentPage)),
    }
};

export default connect(mapStateToProps, mapDispathToProps)(PaginationItem);
