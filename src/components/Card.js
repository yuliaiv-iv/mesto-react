import React from 'react';

function Card(props) {
    return (
        <template className="card-template">
            <li className="card">
                <img className="card__image" src={props.link} alt={props.name} />
                <button type="button" aria-label="удалить элемент" className="button button__delete opacity"></button>
                <div className="card__info">
                    <h3 className="card__title" >{props.name}</h3>
                    <div className="card__like">
                        <button type="button" aria-label="выразить положительную реакцию" className="button button__like opacity"></button>
                        <dev className="card__like-counter">{props.likes.length}</dev>
                    </div>
                </div>
            </li>
        </template>
    )
}

export default Card;