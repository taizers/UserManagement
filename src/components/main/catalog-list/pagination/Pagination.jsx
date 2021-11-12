import './Pagination.css';
import PaginationItem from './pagination-item/PaginationItem';
import { useState } from 'react';

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
    return (
        <ul className="pagination">
            <li><a href="#" className="prev">&laquo;</a></li>
            {
                getPaginationList(props.totalPages).map(item => (
                    <PaginationItem 
                        key = {item} 
                        number = {item} 
                        page = {props.page}
                        onSetUrl = {props.onSetUrl}

                    />
                ))
            }   
            <li><a href="#" className="next">&raquo;</a></li>
        </ul>
    );
};

export default Pagination;