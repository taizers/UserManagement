import Card from './card/Card';
import './CardsList.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CardsList = (props) => {
    const { carsData } = props;
    if (carsData != undefined) {
        return (
            <ul className="results__list">
                {
                    carsData.map(item => (
                        <Card key = {item.id} userData = {item}/>
                    ))
                }
            </ul>
        );
    }else
    return null;
    
};
CardsList.propTypes = {
    carsData: PropTypes.arrayOf(Object),
};

const mapStateToProps = (state,ownProps) => {
    return Object.assign({}, ownProps, {
        carsData : state.currentCarsData
    });
};
  
export default connect(mapStateToProps)(CardsList);