import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="card">
            <img
                className="card__image"
                src={props.card.link} alt={props.card.name} onClick={handleClick} />
            <button
                type="button"
                aria-label="удалить элемент"
                className="button button__delete opacity">
            </button>
            <div className="card__info">
                <h3 className="card__title" >{props.card.name}</h3>
                <div className="card__like">
                    <button
                        type="button"
                        aria-label="выразить положительную реакцию"
                        className="button button__like opacity">
                    </button>
                    <div className="card__like-counter">{props.card.likes.length}</div>
                </div>
            </div>
        </li>
    )
}

export default Card;