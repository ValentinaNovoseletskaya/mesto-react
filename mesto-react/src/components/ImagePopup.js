function ImagePopup() {
    return (
        <div className="popup image">
            <div className="popup__image-container">
                <button type="button" className="popup__close-button"></button>
                <img src="#" alt="увеличенная фотография" className="popup__image-element" />
                <p className="popup__image-title"></p>
            </div>        
        </div>
    );
}
        
export default ImagePopup;