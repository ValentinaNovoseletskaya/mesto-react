function PopupWithForm(props) {
    const popupClass = `popup ${props.isOpen && "popup_opened"}`;
 
    return (
        <div className={`${popupClass} popup_type_${props.name}`}>
            <div className="popup__container">
                <button type="button" className="popup__close-button" onClick={props.onClose}></button>
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
                <button type="submit" className="popup__save-button">{props.buttonText}</button>
            </div>
        </div>
    );
}
        
export default PopupWithForm;