import React from 'react';
//import { api } from '../utils/api.js';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {
    //const [userAvatar, setUserAvatar] = React.useState();
    //const [userName, setUserName] = React.useState();
    //const [userDescription, setUserDescription] = React.useState();
    //const [cards, setCards] = React.useState([]);
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <img
                        className="profile__image"
                        src={currentUser.avatar}
                        alt="Фотография профиля"
                    />
                    <div className="profile__cover">
                        <button
                            onClick={props.onEditAvatar}
                            type="button"
                            className="button profile__button-avatar"
                            aria-label="обновить фотографию пользователя">
                        </button>
                    </div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button
                        onClick={props.onEditProfile}
                        type="button"
                        aria-label="обновить информацию пользователя"
                        className="button profile__button-edit opacity">
                    </button>
                    <p className="profile__about">{currentUser.about}</p>
                </div>
                <button
                    onClick={props.onAddPlace}
                    type="button"
                    aria-label="добавить новую карточку"
                    className="button profile__button-add opacity">
                </button>
            </section>
            <section className="card-container">
                <ul className="card-container__list">
                    {props.cards.map(card => <Card {...card}
                        onCardClick={props.onCardClick}
                        onCardLike={props.onCardLike}
                        onCardDelete={props.onCardDelete}
                        key={card._id}
                        card={card} />)}
                </ul>
            </section>
        </main>
    );
}

export default Main;