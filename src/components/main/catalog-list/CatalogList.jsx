import './CatalogList.css';
import CardsList from './cards-list/CardsList';
import Pagination from './pagination/Pagination';

const CatalogList = () => {
    return (
        <div className="social-network-app__results results">
            <CardsList />
            <Pagination />
        </div>
    );
};

export default CatalogList;
