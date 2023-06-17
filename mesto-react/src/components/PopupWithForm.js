function PopupWithForm(props) {
    return (
        <div className="popup popup_type_profile">
            <div className="popup__container">
                <button type="button" className="popup__close-button"></button>
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__content popup__content-profileForm" name="form" noValidate>
                    <input type="text" id="input-name" name="profileName" className="popup__input popup__input_type_name" placeholder="Имя" minLength="2" maxLength="40" required />
                    <span id="input-name-error"></span>
                    <input type="text" id="input-job" name="profileJob" className="popup__input popup__input_type_job" placeholder="О себе" minLength="2" maxLength="200" required />
                    <span id="input-job-error"></span>
                    <button type="submit" className="popup__save-button">Сохранить</button>
                </form>
            </div>
        </div>
    );
}
        
export default PopupWithForm;