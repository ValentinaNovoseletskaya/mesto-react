function PopupWithForm(props) {
    const popupClass = `popup ${props.isOpen && "popup_opened"}`;
    const buttonClass = `popup__save-button ${props.disabled && "popup__save-button_disable"} `;
    
    return (
        <div className={`${popupClass} popup_type_${props.name}`}>
            <div className="popup__container">
                <button type="button" className="popup__close-button" onClick={props.onClose}></button>
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__content" onSubmit={props.onSubmit} name="form" noValidate>
                    {props.children} 
                    <button disabled={props.disabled} type="submit" className={`${buttonClass}`}>{props.buttonText}</button>   
                </form>
            </div>
        </div>
    );
}
        
export default PopupWithForm;