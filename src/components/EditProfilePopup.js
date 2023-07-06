import {useState, useContext, useEffect} from 'react';
import PopupWithForm from './PopupWithForm.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import {inputProfilePopup} from '../utils/Utils.js';

function EditProfilePopup(props) {
    const currentUser = useContext(CurrentUserContext);
    const [defaultValue, setDefaultValue] =  useState({});
    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const isDisabled = () => {
        if (
            Object.keys(formData).length === 0 ||
            Object.keys(formData).some(item => !formData[item] || formData[item] === '') ||
            Object.keys(formData).every(item => formData[item] === defaultValue[item]) ||
            Object.keys(formErrors).some(item => formErrors[item] && formErrors[item] !== '' )            
        ) { return true }         
    }

    useEffect(() => {
        setFormData({
            profileName: currentUser ? currentUser.name : '',
            profileJob: currentUser ? currentUser.about : '',
        })
        setDefaultValue({
            profileName: currentUser ? currentUser.name : '',
            profileJob: currentUser ? currentUser.about : '',
        })
      }, [currentUser, props.isOpen]);
 

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name: formData.profileName,
            about: formData.profileJob,
        });
    }

    return (
        <PopupWithForm title='Редактировать профиль' name='profile' onSubmit={handleSubmit} buttonText={props.loadingText ? props.loadingText : 'Сохранить' }  isOpen={props.isOpen} disabled={isDisabled()} onClose={props.onClose}>                
                {inputProfilePopup.map( ({type, required, name, className, placeholder, minLength, maxLength}) => {
                return  <div key={name}>
                    <input 
                    className={className}
                    placeholder={placeholder}
                    minLength={minLength}
                    maxLength={maxLength}
                    type={type}
                    required={required}
                    name={name}
                    value={formData[name] || '' }
                    onChange={ e=>{
                        setFormData({...formData, [name]: e.target.value})
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
        
export default EditProfilePopup;