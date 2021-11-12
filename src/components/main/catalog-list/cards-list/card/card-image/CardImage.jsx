import './CardImage.css'

const CardImage = (props) => {
    return (
        <div className="product__image">
            <img src={props.src}  width="200" height="200" alt={props.email} onClick ={props.onCardClick}/>
        </div>
    );
};

export default CardImage;