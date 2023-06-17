
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';

function App() {
  return (
    <div className="body">
        <div className="page">
            <Header />
            <Main />
            <Footer />
        </div>
        <PopupWithForm title='Редактировать профиль' />
        <div className="popup popup_type_avatar">
            <div className="popup__container">
                <button type="button" className="popup__close-button"></button>
                <h2 className="popup__title">Обновить аватар</h2>
                <form className="popup__content popup__content-AvatarForm" name="form" noValidate>
                    <input type="url" id="input-avatar" name="profileAvatar" className="popup__input popup__input_type_link" placeholder="Ссылка на аватар" required />
                    <span id="input-avatar-error"></span>
                    <button type="submit" className="popup__save-button">Сохранить</button>
                </form>
            </div>
        </div>
        <div className="popup popup_type_place">
            <div className="popup__container">
                <button type="button" className="popup__close-button"></button>
                <h2 className="popup__title">Новое место</h2>
                <form className="popup__content popup__content-placeForm" name="form" noValidate>
                    <input type="text" id="input-place" name="placeName" className="popup__input popup__input_type_name" placeholder="Название" minLength="2" maxLength="30" required />
                    <span id="input-place-error"></span>
                    <input type="url" id="input-image" name="placeImage" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" required />
                    <span id="input-image-error"></span>
                    <button type="submit" className="popup__save-button">Создать</button>
                </form>
            </div>
        </div>
        <div className="popup popup_type_image">
            <div className="popup__image-container">
                <button type="button" className="popup__close-button"></button>
                <img src="#" alt="увеличенная фотография" className="popup__image-element" />
                <p className="popup__image-title"></p>
            </div>        
        </div>
        <div className="popup popup_type_confirmation">
            <div className="popup__container">
                <button type="button" className="popup__close-button"></button>
                <h2 className="popup__title">Вы уверены?</h2>
                <button type="submit" className="popup__confirm-button">Да</button>
            </div>
        </div>
    </div>
  );
}

export default App;
