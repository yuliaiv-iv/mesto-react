import React from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.js';


function Main(props) {
    const [userAvatar, setUserAvatar] = React.useState();
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserData()
            .then((item) => {
                setUserAvatar(item.avatar);
                setUserName(item.name);
                setUserDescription(item.about);
            })
            .catch((err) => {
                console.log(err);
            });
    })
    React.useEffect(() => {
        api.getInitialCards()
            .then((item) => {
                setCards(item);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <main className="content">
        <section className="profile">
            <dev className="profile__avatar">
                <img className="profile__image" style={ { backgroundImage: `url(${userAvatar})` }}
                    alt="Фотография профиля" 
                    />
                <div className="profile__cover">
                    <button onClick={props.onEditAvatar}
                        type="button"
                        className="button profile__button-avatar" 
                        aria-label="обновить фотографию пользователя">
                    </button>
                </div>
            </dev>
            <div className="profile__info">
                <h1 className="profile__name">{userName}</h1>
                <button onClick={props.onEditProfile}
                    type="button" 
                    aria-label="обновить информацию пользователя" 
                    className="button profile__button-edit opacity">
                </button>
                <p className="profile__about">{userDescription}</p>
            </div>
            <button onClick={props.onAddPlace}
                type="button" 
                aria-label="добавить новую карточку" 
                className="button profile__button-add opacity">
            </button>
        </section>
        <section className="card-container">
            <ul className="card-container__list">
                {cards.map(card => <Card {...card}/>)}
            </ul>
        </section>
    </main>
    );
}

export default Main;