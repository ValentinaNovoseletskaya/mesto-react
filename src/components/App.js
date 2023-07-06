import {api} from '../utils/Api.js';
import {useEffect, useState} from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import ImagePopup from './ImagePopup.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] =
    useState(false);
    const [selectedCard, setSelectedCard] =
    useState(null);    
    const [currentUser, setCurrentUser] = useState(null);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getAppInfo().then(([userData, initialCards]) => {
            setCards(initialCards);
            setCurrentUser(userData);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }
    
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }
    
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleCardDelete (card) {
        api.removeCard(card._id).then(() => {
            const newCards = cards.filter(c => c._id !== card._id);
            setCards(newCards);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(null);
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="body">
                <div className="page">
                    <Header />
                    <Main cards={cards} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
                    <Footer />
                </div>
                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
                <PopupWithForm title='Обновить аватар' name='avatar' buttonText='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                    <form className="popup__content popup__content-AvatarForm" name="form" noValidate>
                        <input type="url" id="input-avatar" name="profileAvatar" className="popup__input popup__input_type_link" placeholder="Ссылка на аватар" required />
                        <span id="input-avatar-error"></span>
                    </form>
                </PopupWithForm>
                <PopupWithForm title='Новое место' name='place' buttonText='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                    <form className="popup__content popup__content-placeForm" name="form" noValidate>
                        <input type="text" id="input-place" name="placeName" className="popup__input popup__input_type_name" placeholder="Название" minLength="2" maxLength="30" required />
                        <span id="input-place-error"></span>
                        <input type="url" id="input-image" name="placeImage" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" required />
                        <span id="input-image-error"></span>
                    </form>
                </PopupWithForm>
                <PopupWithForm title='Вы уверены?' name='confirmation' buttonText='Да' />
                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
