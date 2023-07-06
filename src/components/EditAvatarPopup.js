import {useState, useRef} from 'react';
import PopupWithForm from './PopupWithForm.js';
import {inputAvatarPopup} from '../utils/Utils.js';

function EditAvatarPopup(props) {
    const avatarRef = useRef('');
    const [formErrors, setFormErrors] = useState({});

    const isDisabled = () => {
        if (
            avatarRef.current.value === "" ||
            Object.keys(formErrors).some(item => formErrors[item] && formErrors[item] !== '' )            
        ) { return true }         
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
        avatarRef.current.value = "";
    }

    return (
        <PopupWithForm title='Обновить аватар' name='avatar' buttonText={props.loadingText ? props.loadingText : 'Сохранить' } onSubmit={handleSubmit} isOpen={props.isOpen} disabled={isDisabled()} onClose={props.onClose}>
            {inputAvatarPopup.map( ({type, required, name, className, placeholder}) => {
                return <div key={name}>
                    <input 
                    className={className}
                    placeholder={placeholder}
                    type={type}
                    required={required}
                    name={name}
                    ref={avatarRef}
                    onChange={ e=>{ 
                        const errorMessage = e.target.validationMessage
                        setFormErrors({...formErrors, [name]: errorMessage || ''})
                    } }
                    />
                    <span className="popup__error_visible" >{formErrors[name]}</span>
                    </div>
            })}
        </PopupWithForm>
    );
}
        
export default EditAvatarPopup;