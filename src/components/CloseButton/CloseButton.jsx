import './CloseButton.css';
import PropTypes from 'prop-types';
import React from 'react';

const CloseButton = ({ onClick }) => {
    const onCloseButtonClick = () => {
        onClick();
    };

    return (
        <button className="close-button" type="button" aria-label="Закрыть" onClick={onCloseButtonClick}>
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L9.41421 8L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L8 9.41421L1.70711 15.7071C1.31658 16.0976 0.683418 16.0976 0.292893 15.7071C-0.0976311 15.3166 -0.0976311 14.6834 0.292893 14.2929L6.58579 8L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z" />
            </svg>
        </button>
    );
};

CloseButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default CloseButton;
