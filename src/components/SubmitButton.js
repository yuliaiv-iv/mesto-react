import React from 'react';

function SubmitButton(props) {

    return (
        <button
            type="submit"
            className={`button popup__button-submit ${props.isDisabled ? 'popup__button-submit_disabled' : ''}`}
            disabled={props.isDisabled}
        >
            {props.onClick ? "Сохранение..." : props.button}
        </button>
    )
}

export default SubmitButton;