import './Pagination.css';
import PaginationItem from './PaginationItem/PaginationItem';
import PropTypes from 'prop-types';

const Pagination = ({ pages }) => {
    return (
        <ul className="results__pagination pagination">
            {
                pages.map(item => (
                    <PaginationItem
                        key={"pagination-item-" + item}
                        number={item}
                    />
                ))
            }
        </ul>
    );
};

Pagination.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Pagination;
