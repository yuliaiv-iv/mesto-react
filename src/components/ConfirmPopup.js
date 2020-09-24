import React from 'react';
import PopupWithForm from './PopupWithForm';
//import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function ConfirmPopup(props) {

    function handleSubmit(event) {
        event.preventDefault();
        props.onDelete()
}

    return (
        <PopupWithForm
            title="Вы уверены?"
            name="delete"
            button="Да"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}>
        </PopupWithForm>
    )
}

export default ConfirmPopup;