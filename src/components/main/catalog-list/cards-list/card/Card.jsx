import './Card.css';
import CardImage from './card-image/CardImage';
import CardContent from './card-content/CardContent';



const Card = (props) => {
    const onCardClick = () =>{
        const id = props.data.id;
        props.onChangePopup(id);
    };
    return (
        <li className="results__item product">
            <CardImage src = {props.data.avatar} email = {props.data.email} onCardClick = {onCardClick}/>
            <CardContent data = {props.data} onCardClick = {onCardClick}/>
        </li>
    );
};

export default Card;