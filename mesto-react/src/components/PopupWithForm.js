function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name}`}>
            <div className="popup__container">
                <button type="button" className="popup__close-button"></button>
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
            </div>
        </div>
    );
}
        
export default PopupWithForm;