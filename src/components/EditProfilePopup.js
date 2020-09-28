import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
    
    const currentUser = React.useContext(CurrentUserContext);
    const [isValid, setIsValid] = React.useState({name: false, link: false});
    const [validationMessage, setValidationMessage] = React.useState('');
    const [inputValue, setInputValue] = React.useState({
        name: "", 
        about: "",
    });

    React.useEffect(() => {
        setInputValue({
            name: currentUser.name, 
            about: currentUser.about
        } || '');
    }, [currentUser]);

    function handleInputChange(event) {
        const {name, value} = event.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
        setIsValid({
            ...isValid,
            [name]: event.target.validity.valid,
        })
        setValidationMessage({
            ...validationMessage,
            [name]: event.target.validationMessage,
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onUpdateUser({
            name: inputValue.name,
            about: inputValue.about,
        });
    }

    const handleClose = () => {
        props.onClose();
        setInputValue({
            name: currentUser.name, 
            about: currentUser.about
        })
        setValidationMessage('')
    }

    return (
        <PopupWithForm
            title="Редактировать профиль"
            name="edit"
            button="Сохранить"
            isOpen={props.isOpen}
            onClose={handleClose}
            onClick={props.onClick}
            onSubmit={handleSubmit}>
            <label className="popup__field">
                <input
                    type="text"
                    value={inputValue.name}
                    onChange={handleInputChange}
                    id="name-input"
                    className="popup__item"
                    name="name"
                    placeholder="Имя"
                    required
                    minLength="2" maxLength="40" />
                <span id="name-input-error" className={!isValid.name ? 'popup__item-error' : ""}>{validationMessage.name}</span>
            </label>
            <label className="popup__field">
                <input
                    type="text"
                    value={inputValue.about}
                    onChange={handleInputChange}
                    id="about-input"
                    className="popup__item"
                    name="about"
                    placeholder="О себе"
                    required
                    minLength="2" maxLength="200" />
                <span id="name-input-error" className={!isValid.about ? 'popup__item-error' : ""}>{validationMessage.about}</span>
            </label>
        </PopupWithForm>
    )
}

export default EditProfilePopup;