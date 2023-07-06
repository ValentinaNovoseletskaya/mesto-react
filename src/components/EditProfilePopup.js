import {useState, useContext} from 'react';
import PopupWithForm from './PopupWithForm.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] =
    useState(null);
    const [description, setDescription] =
    useState(null);
    
    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    return (
        <PopupWithForm title='Редактировать профиль' name='profile' buttonText='Сохранить' isOpen={props.isOpen} onClose={props.onClose}>
            <form className="popup__content popup__content-profileForm" name="form" noValidate>
                <input type="text" id="input-name" name="profileName" className="popup__input popup__input_type_name" value={currentUser && currentUser.name} onChange={handleNameChange} placeholder="Имя" minLength="2" maxLength="40" required />
                <span id="input-name-error"></span>
                <input type="text" id="input-job" name="profileJob" className="popup__input popup__input_type_job" value={currentUser && currentUser.about} onChange={handleDescriptionChange} placeholder="О себе" minLength="2" maxLength="200" required />
                <span id="input-job-error"></span>                    
            </form>
        </PopupWithForm>
    );
}
        
export default EditProfilePopup;