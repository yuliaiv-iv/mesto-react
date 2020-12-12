import React from 'react';

function SubmitButton({isDisabled, onClick, button}) {

    return (
        <button
            type="submit"
            className={`button popup__button-submit ${isDisabled ? 'popup__button-submit_disabled' : ''}`}
            disabled={isDisabled}
        >
            {onClick ? "Сохранение..." : button}
        </button>
    )
}

export default SubmitButton;