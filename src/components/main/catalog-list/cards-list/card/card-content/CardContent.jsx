import './CardContent.css';
import { Link } from 'react-router-dom';

const CardContent = (props) => {
    return (
        <div className="card__content">
            <h3 className="card__title">
                <Link to="/popup" onClick ={props.onCardClick}>
                    {props.data.last_name} {props.data.first_name}
                </Link>
            </h3>
            <p className="card__email">{props.data.email}</p>
        </div>
    );
};

export default CardContent;