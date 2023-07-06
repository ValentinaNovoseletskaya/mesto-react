import {useState} from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup (props) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();      
        props.onAddPlace({
            name: name,
            link: link,
            likes: []
        });
        setName('');
        setLink('');
    }

    return (
        <PopupWithForm title='Новое место' name='place' buttonText='Создать' onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose}>
            <input type="text" id="input-place" name="placeName" value={name} onChange={handleNameChange} className="popup__input popup__input_type_name" placeholder="Название" minLength="2" maxLength="30" required />
            <span id="input-place-error"></span>
            <input type="url" id="input-image" name="placeImage" value={link} onChange={handleLinkChange} className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" required />
            <span id="input-image-error"></span>
        </PopupWithForm>
    );
}
        
export default AddPlacePopup ;