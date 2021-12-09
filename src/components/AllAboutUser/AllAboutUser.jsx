import './AllAboutUser.css';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getAllUserData } from '../../selectors/loadData';
import AboutUserItem from './AboutUserItem/AboutUserItem';
import Button from '../Button/Button';
import { useNavigate } from 'react-router';
import { pathLinks } from '../../consts';

const adapter = (object) => {
    return {
        "Фотография": object.avatar,
        "Фамилия": object.last_name,
        "Имя": object.first_name,
        "Адрес": object.adress,
        "Email": object.email,
        "Паспорт": object.passport,
        "Телефон": object.phone,
        "Пол": object.sex,
        "Возраст": object.age,

    }
}

const AllAboutUser = ({ allUserData }) => {
    const keysUserData = Object.entries(adapter(allUserData));

    const navigate = useNavigate();
    
    const onCloseButtonClick = () => {
        navigate(pathLinks.home);
    }

    return (
        <div className="about-user">
            <div className="about-user__inner">
                <ul className="about-user__list">
                    {
                        keysUserData.map(item => {
                            console.log(item);
                            return <AboutUserItem key={item[0] + item[1]} name={item[0]} value={item[1]} />
                        })
                    }
                </ul>
                <Button parentClassName="about-user" type="button" textButton="Назад" onClick={onCloseButtonClick}/>
            </div>
            
        </div>
    );
};

AllAboutUser.propTypes = {
    allUserData: PropTypes.object.isRequired,
};
const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        allUserData: getAllUserData(state),
    };
};

export default connect(mapStateToProps)(AllAboutUser);