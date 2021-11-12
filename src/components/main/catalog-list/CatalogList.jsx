import './CatalogList.css';
import CardsList from './cards-list/CardsList';
import Pagination from './pagination/Pagination';

const CatalogList = (props) => {
    return (
        <div className="social-network-app__results results">
            <CardsList 
                cardsData = {props.data.data} 
                setPopupActiv = {props.setPopupActiv} 
                isPopupActiv ={props.isPopupActiv} 
                onChangePopup = {props.onChangePopup} 
            />
            <Pagination 
                page = {props.data.page}
                total = {props.data.total}
                totalPages = {props.data.total_pages}
                onSetUrl ={props.onSetUrl}
            />
        </div>
    );
};

export default CatalogList;