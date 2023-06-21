function ImagePopup(props) {
    const popupClass = `popup ${props.isOpen && "popup_opened"}`;

    return (
        <div className={`${popupClass} image`}>
            <div className="popup__image-container">
                <button type="button" className="popup__close-button" onClick={props.onClose}></button>
                <img src= {props.card && props.card.link} alt={props.card && props.card.name} className="popup__image-element" />
                <p className="popup__image-title">{props.card && props.card.name}</p>
            </div>        
        </div>
    );
}
        
export default ImagePopup;