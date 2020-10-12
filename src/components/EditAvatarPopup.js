import React from 'react';
import Popup from './Popup';
import SubmitButton from './SubmitButton.js';

function EditAvatarPopup(props) {
    const avatarRef = React.useRef('');
    const [isValid, setIsValid] = React.useState(false);
    const [validationMessage, setValidationMessage] = React.useState('');
    const [isFormValid, setFormValid] = React.useState(false);

    function handleChange(event) {
        if (!event.target.validity.valid) {
            setIsValid(true)
            setValidationMessage(event.target.validationMessage)
            setFormValid();
        } else {
            setIsValid(false)
            setValidationMessage('')
            setFormValid(true);
        }
    };

    function handleSubmit(event) {
        event.preventDefault();
        props.onUpdateAvatar({
            link: avatarRef.current.value,
        });
    }

    React.useEffect(() => {
        avatarRef.current.value = '';
        setValidationMessage('');
        setFormValid();
    }, [props.isOpen])

    return (
        <Popup
            name="avatar"
            classname="popup__container"
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <h3 className="popup__title">Обновить аватар</h3>
            <form
                onSubmit={handleSubmit}
                className="popup__form"
                action="#"
                method="POST"
                noValidate
            >
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
                <SubmitButton
                    isDisabled={!isFormValid}
                    button="Сохранить"
                    onClick={props.onClick}
                >
                </SubmitButton>
            </form>
        </Popup>
    )
}

export default EditAvatarPopup;

