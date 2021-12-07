import './AddEmployee.css';
import React from 'react';
import Button from '../Button/Button'
import Input from '../LoginContainer/Login/Input/Input';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { pathLinks } from '../../consts';
import { connect } from 'react-redux';
import { createUser } from '../../reducer/actionCreators'

const AddEmployee = ({ createUser }) => {
    let [firstName, setFirstName] = useState();
    let [lastName, setLastName] = useState();
    let [email, setEmail] = useState();
    let [photoLink, setPhotoLink] = useState();

    const navigate = useNavigate();

    const changeFirstName = (e) => {
        setFirstName(firstName = e.target.value);
    }

    const changeLastName = (e) => {
        setLastName(lastName = e.target.value);
    }

    const changeEmail = (e) => {
        setEmail(email = e.target.value);
    }

    const changePhotoLink = (e) => {
        setPhotoLink(photoLink = e.target.value);
    }

    const onExitButtonClick = () => {
        navigate(pathLinks.home);
    }

    const onSubmitLogin = (evt) => {
        evt.preventDefault();
        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            avatar: photoLink,
        }
        createUser(data);
        console.log(data);
    }

    return (
        <div className="create-employee__wrapper">
            <form onSubmit={onSubmitLogin} className="create-employee__form" >
                <Input name="Фамилия" type="text" parentClassName="create-employee" onChangeValue={changeLastName}/>
                <Input name="Имя" type="text" parentClassName="create-employee" onChangeValue={changeFirstName}/>

                <Input name="Email" type="email" parentClassName="create-employee" onChangeValue={changeEmail}/>
                <Input name="Ссылка на фото" type="text" parentClassName="create-employee" onChangeValue={changePhotoLink}/>
                <Button parentClassName="create-employee" textButton="Добавить" />
                <Button parentClassName="create-employee-exit" type="button" textButton="Выход" onClick={onExitButtonClick} />
            </form>
        </div>
    );
};

AddEmployee.propTypes = {
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    createUser: PropTypes.func.isRequired,
};

const mapDispathToProps = (dispath) => {
    return {
        createUser: (data) => dispath(createUser(data)),
    }
};

export default connect(null, mapDispathToProps)(AddEmployee);