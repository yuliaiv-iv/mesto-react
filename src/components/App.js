import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

        function handleEditProfileClick() {
            setIsEditProfilePopupOpen(true);
        }
        function handleAddPlaceClick() {
            setIsAddPlacePopupOpen(true);
        }
        function handleEditAvatarClick() {
            setIsEditAvatarPopupOpen(true);
        }
        function closeAllPopups() {
            setIsEditProfilePopupOpen(false);
            setIsAddPlacePopupOpen(false);
            setIsEditAvatarPopupOpen(false);
        }

    return (
    <>
        <Header />
        <div className="container">
            <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            />
            <Footer />

            <PopupWithForm
                title="Редактировать профиль"
                name="edit"
                button="Сохранить"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                >
                    
                <label className="popup__field">
                    <input type="text" id="name-input" className="popup__item popup__item_input-name" name="name" value="" placeholder="Имя" required minLength="2" maxLength="40" />
                    <span id="name-input-error" className="popup__item-error"></span>
                </label>
                <label className="popup__field">
                    <input type="text" id="about-input" className="popup__item popup__item_input-about" name="about" value="" placeholder="О себе" required minLength="2" maxLength="200" />
                    <span id="about-input-error" className="popup__item-error"></span>
                </label>
            </PopupWithForm>

            <PopupWithForm
                title="Новое место"
                name="add"
                button="Создать"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                >
                <label className="popup__field">
                    <input type="text" id="title-input" className="popup__item popup__item_input-title" name="name" value="" placeholder="Название" required minLength="1" maxLength="30" />
                    <span id="title-input-error" className="popup__item-error"></span>
                </label>
                <label className="popup__field">
                    <input type="url" id="link-input" className="popup__item popup__item_input-link" name="link" value="" placeholder="Ссылка на картинку" required />
                    <span id="link-input-error" className="popup__item-error"></span>
                </label>
            </PopupWithForm>

            <PopupWithForm
                title="Обновить аватар"
                name="avatar"
                button="Сохранить"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                >
                <label className="popup__field">
                    <input type="url" id="link-input" className="popup__item popup__item_input-avatar" name="link" value="" placeholder="Ссылка на картинку" required />
                    <span id="link-input-error" className="popup__item-error"></span>
                </label>
            </PopupWithForm>

            <PopupWithForm
                title="Вы уверены?"
                name="confirm"
                button="Да"
                onClose={closeAllPopups}
                >
            </PopupWithForm>
        </div>
    </>
    );
}

export default App;

        {/* <section className="popup popup__edit">
            <div className="popup__container">
                <button type="button" aria-label="закрыть модальное окно" className="button popup__close opacity"></button>
                <h3 className="popup__title">Редактировать профиль</h3>
                <form name="edit" className="popup__form popup__input_container-edit" action="#" method="POST" novalidate>
                    <label className="popup__field">
                        <input type="text" id="name-input" className="popup__item popup__item_input-name" name="name" value="" placeholder="Имя" required minlength="2" maxlength="40" />
                        <span id="name-input-error" className="popup__item-error"></span>
                    </label>
                    <label className="popup__field">
                        <input type="text" id="about-input" className="popup__item popup__item_input-about" name="about" value="" placeholder="О себе" required minlength="2" maxlength="200" />
                        <span id="about-input-error" className="popup__item-error"></span>
                    </label>
                    <button type="submit" className="button popup__button-submit popup__button-submit-edit">Сохранить</button>
                </form>
            </div>
        </section> */}

                {/* <section className="popup popup__add">
            <div className="popup__container">
                <button type="button" aria-label="закрыть модальное окно" className="button popup__close opacity"></button>
                <h3 className="popup__title">Новое место</h3>
                <form name="add" className="popup__form popup__input_container-add" action="#" method="POST" novalidate>
                    <label className="popup__field">
                        <input type="text" id="title-input" className="popup__item popup__item_input-title" name="name" value="" placeholder="Название" required minlength="1" maxlength="30" />
                        <span id="title-input-error" className="popup__item-error"></span>
                    </label>
                    <label className="popup__field">
                        <input type="url" id="link-input" className="popup__item popup__item_input-link" name="link" value="" placeholder="Ссылка на картинку" required />
                        <span id="link-input-error" className="popup__item-error"></span>
                    </label>
                    <button type="submit" className="button popup__button-submit popup__button-submit-add">Создать</button>
                </form>
            </div>
        </section> */}

        // <section className="popup popup__avatar">
        // <div className="popup__container">
        //     <button type="button" aria-label="закрыть модальное окно" className="button popup__close opacity"></button>
        //     <h3 className="popup__title">Обновить аватар</h3>
        //     <form name="avatar" className="popup__form popup__input_container-avatar" action="#" method="POST" novalidate>
        //         <label className="popup__field">
        //             <input type="url" id="link-input" className="popup__item popup__item_input-avatar" name="link" value="" placeholder="Ссылка на картинку" required />
        //             <span id="link-input-error" className="popup__item-error"></span>
        //         </label>
        //         <button type="submit" className="button popup__button-submit popup__button-submit-avatar">Сохранить</button>
        //     </form>
        // </div>
        // </section>

                {/* <section className="popup popup__delete">
            <div className="popup__container">
                <button type="button" aria-label="закрыть модальное окно" className="button popup__close opacity"></button>
                <h3 className="popup__title">Вы уверены?</h3>
                <form name="confirm" className="popup__form popup__input_container-delete">
                    <button type="submit" className="button popup__button-submit">Да</button>
                </form>
            </div>
        </section> */}
