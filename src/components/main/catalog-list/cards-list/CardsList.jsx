import Card from './card/Card';
import './CardsList.css';

const CardsList = (props) => {
    const { cardsData } = props;
    return (
        <ul className="results__list">
            {
                cardsData.map(item => (
                    <Card key = {item.id} userData = {item}/>
                ))
            }
        </ul>
    );
};

export default CardsList;