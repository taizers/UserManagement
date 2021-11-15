import './Pagination.css';
import PaginationItem from './pagination-item/PaginationItem';
import PropTypes from 'prop-types';

const getPaginationList = (total) =>{
    let list = [];

    for (let index = 1; index <= total; index++) {
        list.push(index);
    }

    return list;
};

const Pagination = (props) => {
    //let [isActivPaginationnumber, setPaginationActivNumber] = useState(1);

/*     const onPaginationActiv = (number) => {
        //setPaginationActivNumber(isActivPaginationnumber = number);
        props.onSetUrl(number);
    }; */
    //           <li><a href="#" className="prev">&laquo;</a></li>
    //           <li><a href="#" className="next">&raquo;</a></li>
    const { totalPages } = props;
    return (
        <ul className="pagination">
            {
                getPaginationList(totalPages).map(item => (
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
    totalPages: PropTypes.number.isRequired
};

export default Pagination;