import './AboutUserItem.css';
import PropTypes from 'prop-types';
import React from 'react';

const AboutUserItem = ({ name, value }) => {
    return (
        <li className="about-user__item item-user">
            {name === "Фотография"? 
                <img  src={value} alt={name} width="100" height="100" /> :
                <>
                    <h3 className="item-user__title">{name}</h3>
                    <p className="item-user__text">{value}</p>
                </>
            }
            

        </li>
    );
};

AboutUserItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default AboutUserItem;