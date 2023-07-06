import {useState, useContext, useEffect} from 'react';
import PopupWithForm from './PopupWithForm.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] =
    useState('');
    const [description, setDescription] =
    useState('');

    useEffect(() => {
        setName(currentUser && currentUser.name);
        setDescription(currentUser && currentUser.about);
      }, [currentUser]); 
    
    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name: name,
            about: description,
        });
    }

    return (
        <PopupWithForm title='Редактировать профиль' name='profile' onSubmit={handleSubmit} buttonText={props.loadingText ? props.loadingText : 'Сохранить' }  isOpen={props.isOpen} onClose={props.onClose}>
                <input type="text" id="input-name" name="profileName" className="popup__input popup__input_type_name" value={name} onChange={handleNameChange} placeholder="Имя" minLength="2" maxLength="40" required />
                <span id="input-name-error"></span>
                <input type="text" id="input-job" name="profileJob" className="popup__input popup__input_type_job" value={description} onChange={handleDescriptionChange} placeholder="О себе" minLength="2" maxLength="200" required />
                <span id="input-job-error"></span>
        </PopupWithForm>
    );
}
        
export default EditProfilePopup;