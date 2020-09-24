import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleLinkChange(event) {
        setLink(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        props.onAddPlace({ name, link });
    }
    return (
        <PopupWithForm
            title="Новое место"
            name="add"
            button="Создать"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}>
            <label className="popup__field">
                <input
                    type="text"
                    value={name}
                    id="title-input"
                    className="popup__item popup__item_input-title"
                    name="name"
                    placeholder="Название"
                    required
                    minLength="1" maxLength="30"
                    onChange={handleNameChange} />
                <span id="title-input-error" className="popup__item-error"></span>
            </label>
            <label className="popup__field">
                <input
                    type="url"
                    value={link}
                    id="link-input"
                    className="popup__item popup__item_input-link"
                    name="link"
                    placeholder="Ссылка на картинку"
                    required
                    onChange={handleLinkChange} />
                <span id="link-input-error" className="popup__item-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup;