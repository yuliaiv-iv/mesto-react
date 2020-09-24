import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
//import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmPopup from './ConfirmPopup';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isDeletePopupOpen, setDeletePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState();

    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserData(), api.getInitialCards()])
            .then(([info, card]) => {
                setCurrentUser(info);
                setCards(card);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    function handleCardLike(card) {
        const isLiked = card.likes.some(like => like._id === currentUser._id);
        api.changeLikeStatus(card._id, !isLiked).then((newCard) => {
            const newCards = cards.map((c) => c._id === card._id ? newCard : c);
            setCards(newCards);
        });
    }
    function handleCardDelete(card) {
        api.deleteCard(card._id).then(() => {
            const newCards = cards.filter((item) => {
                return item !== card
            });
            setCards(newCards);
        })
    }
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }
    function handleCardClick(card) {
        setSelectedCard(card);
    }
    function handleDeleteClick() {
        setDeletePopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setDeletePopupOpen(false);
        setSelectedCard();
    }
    function handleUpdateUser(data) {
        api.setUserData(data)
            .then((result) => {
                setCurrentUser(result);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            });
    }
    function handleUpdateAvatar(data) {
        console.log(data)
        api.setUserAvatarData(data)
            .then(result => {
                setCurrentUser(result);
                closeAllPopups();
                console.log(data)
            })
            .catch(err => {
                console.log(err);
            });
    }

    function handleAddPlaceSubmit(card) {
        api.postNewCard(card)
        .then(result => {
            setCards([result, ...cards]);
            closeAllPopups();
        })
        .catch(err => {
            console.log(err);
        });
    }
    return (
        <>
            <div className="page">
                <CurrentUserContext.Provider value={currentUser}>
                    <Header />
                    <div className="container">
                        <Main
                            cards={cards}
                            onEditProfile={handleEditProfileClick}
                            onAddPlace={handleAddPlaceClick}
                            onEditAvatar={handleEditAvatarClick}
                            onCardClick={handleCardClick}
                            onCardLike={handleCardLike}
                            onCardDelete={handleDeleteClick}
                        />
                        <Footer />
                        <EditProfilePopup
                            isOpen={isEditProfilePopupOpen}
                            onClose={closeAllPopups}
                            onUpdateUser={handleUpdateUser}
                        />
                        <EditAvatarPopup
                            isOpen={isEditAvatarPopupOpen}
                            onClose={closeAllPopups}
                            onUpdateAvatar={handleUpdateAvatar}
                        />
                        <AddPlacePopup
                            isOpen={isAddPlacePopupOpen}
                            onClose={closeAllPopups}
                            onAddPlace={handleAddPlaceSubmit}
                        />
                        <ConfirmPopup
                            isOpen={isDeletePopupOpen}
                            onClose={closeAllPopups}
                            onDelete={handleCardDelete}
                            card={selectedCard}
                        />
                        <ImagePopup
                            card={selectedCard}
                            onClose={closeAllPopups}
                        />
                    </div>
                </CurrentUserContext.Provider>
            </div>
        </>
    );
}

export default App;