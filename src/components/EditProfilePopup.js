import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);
    
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);


    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleDescriptionChange(event) {
        setDescription(event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            title="Редактировать профиль"
            name="edit"
            button="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}>
            <label className="popup__field">
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    id="name-input"
                    className="popup__item popup__item_input-name"
                    name="name"
                    placeholder="Имя"
                    required
                    minLength="2" maxLength="40" />
                <span id="name-input-error" className="popup__item-error"></span>
            </label>
            <label className="popup__field">
                <input
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                    id="about-input"
                    className="popup__item popup__item_input-about"
                    name="about"
                    placeholder="О себе"
                    required
                    minLength="2" maxLength="200" />
                <span id="about-input-error" className="popup__item-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditProfilePopup;