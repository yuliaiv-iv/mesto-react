import React, { useEffect } from 'react';

function Popup(props) {
    
    function handleEsc(event) {
        if(event.key !== 'Escape') {
            return
        }
        props.onClose();
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [props.isOpen]);

    return (
        <section className={`popup popup_type_${props.name} ${props.isOpen ? "popup_open" : ""}`}>
            <div className={props.classname}>
                <button
                    type="button"
                    aria-label="закрыть модальное окно"
                    className="button popup__close opacity"
                    onClick={props.onClose}>
                </button>
                {props.children}
            </div>
        </section>
    )
}

export default Popup;
