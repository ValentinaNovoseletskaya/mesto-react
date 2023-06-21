function PopupWithForm(props) {
    const popupClass = `popup ${props.isOpen && "popup_opened"}`;
 
    return (
        <div className={`${popupClass} popup_type_${props.name}`}>
            <div className="popup__container">
                <button type="button" className="popup__close-button" onClick={props.onClose}></button>
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
            </div>
        </div>
    );
}
        
export default PopupWithForm;