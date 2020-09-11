import React from 'react';

function ImagePopup() {
    return (
        <section className="popup popup__image popup__background_image">
            <figure className="popup__container popup__container_image">
                <button type="button" aria-label="закрыть модальное окно" className="button popup__close opacity"></button>
                <img className="popup__view" src="#" alt="#" />
                <figcaption className="popup__title popup__title_image"></figcaption>
            </figure>
        </section>
    )
}
export default ImagePopup;