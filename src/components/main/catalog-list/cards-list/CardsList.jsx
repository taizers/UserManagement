import Card from './card/Card';
import './CardsList.css';

/*  */

const CardsList = (props) => {
    return (
        <ul className="results__list">
            {
                props.cardsData.map(item => (
                    <Card key = {item.id} data = {item} onChangePopup = {props.onChangePopup}/>
                ))
            }
        </ul>
    );
};

export default CardsList;