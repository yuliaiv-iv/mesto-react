import React from 'react';
import Popup from './Popup';

function ImagePopup(props) {
    return (
        <Popup
            name="image"
            classname="popup__container_image"
            onClose={props.onClose}
            isOpen={props.isOpen}
        >
            <img
                className="popup__view"
                src={props.card ? props.card.link : ""}
                alt={props.card ? props.card.name : ""}
            />
            <figcaption
                className="popup__title popup__title_image">
                {props.card ? props.card.name : ''}
            </figcaption>
        </Popup>
    )
}

export default ImagePopup;
