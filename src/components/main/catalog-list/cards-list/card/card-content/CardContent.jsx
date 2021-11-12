import './CardContent.css';

const CardContent = (props) => {
    return (
        <div className="card__content">
            <h3 className="card__title">
            <a href="#" onClick ={props.onCardClick}>{props.data.last_name} {props.data.first_name}</a>
            </h3>
            <div className="card__email"> {props.data.email}</div>
        </div>
    );
};

export default CardContent;