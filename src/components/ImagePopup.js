import React from 'react';

function ImagePopup(props) {
    return (
        <section className={`popup popup_type_image ${props.isOpen ? "popup_open" : ""}`}>
            <figure className="popup__container popup__container_image">
                <button
                    type="button"
                    aria-label="закрыть модальное окно"
                    className="button popup__close opacity"
                    onClick={props.onClose}>
                </button>
                <img
                    className="popup__view"
                    src={props.card ? props.card.link : ""}
                    alt={props.card ? props.card.name : ""}
                />
                <figcaption
                    className="popup__title popup__title_image">
                    {props.card ? props.card.name : ''}
                </figcaption>
            </figure>
        </section>
    )
}

export default ImagePopup;