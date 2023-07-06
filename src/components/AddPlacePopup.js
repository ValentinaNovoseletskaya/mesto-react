import {useState} from 'react';
import PopupWithForm from './PopupWithForm.js';
import {inputPlacePopup} from '../utils/Utils.js';

function AddPlacePopup (props) {
    const [formData, setFormData] = useState({
        placeName: '',
        placeImage: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const isDisabled = () => {
        if (
            Object.keys(formData).length === 0 ||
            Object.keys(formData).some(item => !formData[item] || formData[item] === '') ||
            Object.keys(formErrors).some(item => formErrors[item] && formErrors[item] !== '' )            
        ) { return true }         
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name: formData.placeName,
            link: formData.placeImage,
            likes: []
        });
        setFormData({
            placeName: '',
            placeImage: '',
        });
    }

    return (
        <PopupWithForm title='Новое место' name='place' buttonText={props.loadingText ? props.loadingText : 'Создать' }  onSubmit={handleSubmit} isOpen={props.isOpen} disabled={isDisabled()} onClose={props.onClose}>
            {inputPlacePopup.map( ({type, required, name, className, placeholder, minLength, maxLength}) => {
                return <div key={name}>
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
        
export default AddPlacePopup ;