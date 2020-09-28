import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
    const avatarRef = React.useRef();

    function handleSubmit(event) {
        event.preventDefault();
        props.onUpdateAvatar({
            link: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            button="Сохранить"
            isOpen={props.isOpen}
            onClick={props.onClick}
            onClose={props.onClose}
            onSubmit={handleSubmit}>
            <label className="popup__field">
                <input
                    ref={avatarRef}
                    type="url"
                    id="link-input"
                    className="popup__item popup__item_input-avatar"
                    name="link"
                    placeholder="Ссылка на картинку"
                    required />
                <span id="link-input-error" className="popup__item-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;