import './Main.css';
import CatalogList from './catalog-list/CatalogList';

const Main = (props) => {
    return (
        <div className="social-network__wrapper">
            <CatalogList data ={props.data} onChangePopup = {props.onChangePopup} onSetUrl ={props.onSetUrl}/>
        </div>
    );
};

export default Main;