import {useRef} from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
    const avatarRef = useRef('');

    function handleSubmit(e) {
        e.preventDefault();      
        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
        avatarRef.current.value = "";
    }

    return (
        <PopupWithForm title='Обновить аватар' name='avatar' buttonText='Сохранить' onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose}>
            <input type="url" id="input-avatar" name="profileAvatar" ref={avatarRef}  className="popup__input popup__input_type_link" placeholder="Ссылка на аватар" required />
            <span id="input-avatar-error"></span>
        </PopupWithForm>
    );
}
        
export default EditAvatarPopup;