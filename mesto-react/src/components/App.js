
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  return (
    <div className="body">
        <div className="page">
            <Header />
            <Main />
            <Footer />
        </div>
        <PopupWithForm title='Редактировать профиль' name='profile' >
            <form className="popup__content popup__content-profileForm" name="form" noValidate>
                <input type="text" id="input-name" name="profileName" className="popup__input popup__input_type_name" placeholder="Имя" minLength="2" maxLength="40" required />
                <span id="input-name-error"></span>
                <input type="text" id="input-job" name="profileJob" className="popup__input popup__input_type_job" placeholder="О себе" minLength="2" maxLength="200" required />
                <span id="input-job-error"></span>
                <button type="submit" className="popup__save-button">Сохранить</button>
            </form> 
        </PopupWithForm>
        <PopupWithForm title='Обновить аватар' name='avatar' >
            <form className="popup__content popup__content-AvatarForm" name="form" noValidate>
                <input type="url" id="input-avatar" name="profileAvatar" className="popup__input popup__input_type_link" placeholder="Ссылка на аватар" required />
                <span id="input-avatar-error"></span>
                <button type="submit" className="popup__save-button">Сохранить</button>
            </form>
        </PopupWithForm>
        <PopupWithForm title='Новое место' name='place' >
            <form className="popup__content popup__content-placeForm" name="form" noValidate>
                <input type="text" id="input-place" name="placeName" className="popup__input popup__input_type_name" placeholder="Название" minLength="2" maxLength="30" required />
                <span id="input-place-error"></span>
                <input type="url" id="input-image" name="placeImage" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" required />
                <span id="input-image-error"></span>
                <button type="submit" className="popup__save-button">Создать</button>
            </form>
        </PopupWithForm>
        <PopupWithForm title='Вы уверены?' name='confirmation' >
            <button type="submit" className="popup__confirm-button">Да</button>
        </PopupWithForm>
        <ImagePopup />
    </div>
  );
}

export default App;
