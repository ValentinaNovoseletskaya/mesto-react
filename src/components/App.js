import {api} from '../utils/Api.js';
import {useEffect, useState} from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'; 
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup.js';
import ConfirmationPopup from './ConfirmationPopup.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] =
    useState(false);
    const [loadingText, setLoadingText] =
    useState(null);
    const [selectedCard, setSelectedCard] =
    useState(null);
    const [toDeleteCard, setToDeleteCard] =
    useState(null);
    const [currentUser, setCurrentUser] = useState('');
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
    
    function handleDeleteClick(card) {
        setToDeleteCard(card);
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

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(null);
        setToDeleteCard(null);
    }

    function handleSubmit(request) {
        setLoadingText('Сохранение...');
        request()
          .then(() => {
            closeAllPopups();
          })
          .catch((err) => {
            console.error(`Ошибка: ${err}`);
          })
          .finally(() => {
            setLoadingText(null);
          });
      }

    function handleCardDelete(card) {

        function makeRequest() { 
            return api.removeCard(card._id).then(() => {
                const newCards = cards.filter(c => c._id !== card._id);
                setCards(newCards);
                closeAllPopups();
            });
        }
        handleSubmit(makeRequest);
       
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        function makeRequest() { 
            return api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            });
        }
        handleSubmit(makeRequest);
    }

    function handleUpdateUser(user) {

        function makeRequest() { 
            return api.editUserInfo(user).then((userData) => {
                setCurrentUser(userData);
                closeAllPopups();
            });
        }
        handleSubmit(makeRequest);
    }

    function handleUpdateAvatar(avatar) {
        function makeRequest() { 
            return api.editUserAvatar(avatar).then((userData) => {
                setCurrentUser(userData);
                closeAllPopups();
            });
        }
        handleSubmit(makeRequest);
    }

    function handleAddPlaceSubmit(card) {
        
        function makeRequest() { 
            return api.createNewCard(card).then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            });
        }
        handleSubmit(makeRequest);
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="body">
                <div className="page">
                    <Header />
                    <Main cards={cards} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleDeleteClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
                    <Footer />
                </div>
                <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} loadingText={loadingText} onClose={closeAllPopups} />
                <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} loadingText={loadingText} onClose={closeAllPopups} />
                <AddPlacePopup onAddPlace={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} loadingText={loadingText} onClose={closeAllPopups} />
                <ConfirmationPopup card={toDeleteCard} onConfirmDelete={handleCardDelete} onClose={closeAllPopups} />
                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
