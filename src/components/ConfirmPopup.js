import React from 'react';
import Popup from './Popup';
import SubmitButton from './SubmitButton.js';


function ConfirmPopup(props) {

    function handleSubmit(event) {
        event.preventDefault();
        props.onDelete(props.card)
    }

    return (
        <Popup
            name="delete"
            classname="popup__container"
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <h3 className="popup__title">Вы уверены?</h3>
            <form
                onSubmit={handleSubmit}
                className="popup__form"
                action="#"
                method="POST"
                noValidate>
                <SubmitButton
                    button="Да"
                >
                </SubmitButton>
            </form>
        </Popup>
    )
}

export default ConfirmPopup;