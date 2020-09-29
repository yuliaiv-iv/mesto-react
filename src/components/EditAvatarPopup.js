import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
    const avatarRef = React.useRef('');
    const [isValid, setIsValid] = React.useState(false);
    const [validationMessage, setValidationMessage] = React.useState('');

    function handleChange(event) {
        if (!event.target.validity.valid) {
            setIsValid(true)
            setValidationMessage(event.target.validationMessage)
        } else {
            setIsValid(false)
            setValidationMessage('')
        }
    };

    function handleSubmit(event) {
        event.preventDefault();
        props.onUpdateAvatar({
            link: avatarRef.current.value,
        });
        avatarRef.current.value = '';
    }

    function handleClose() {
        props.onClose();
        setValidationMessage('');
        avatarRef.current.value = '';
    }

    return (
        <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            button="Сохранить"
            isOpen={props.isOpen}
            onClick={props.onClick}
            onClose={handleClose}
            onSubmit={handleSubmit}>
            <label className="popup__field">
                <input
                    ref={avatarRef}
                    type="url"
                    onChange={handleChange}
                    id="link-input"
                    className="popup__item"
                    name="link"
                    placeholder="Ссылка на картинку"
                    required />
                <span id="link-input-error" className={isValid ? 'popup__item-error' : ""}>{validationMessage}</span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;