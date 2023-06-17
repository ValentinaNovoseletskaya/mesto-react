function Main() {
    function handleEditAvatarClick() {
        document.querySelector('.popup_type_avatar').classList.add("popup_opened");
      }

    function handleEditProfileClick() {
        document.querySelector('.popup_type_profile').classList.add("popup_opened");
      }

    function handleAddPlaceClick() {
        document.querySelector('.popup_type_place').classList.add("popup_opened");
      } 

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__structure">
                    <div className="profile__avatar" onClick={handleEditAvatarClick}> 
                        <img src='{}' alt="Жак-Ив Кусто" className="profile__avatar-img" /> 
                    </div>                    
                    <div className="profile__info">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button type="button" onClick={handleEditProfileClick} className="profile__edit-button"></button>
                        <p className="profile__job">Исследователь океана</p>
                    </div>                    
                </div>
                <button type="button" onClick={handleAddPlaceClick} className="profile__add-button"></button>
            </section>
            <section className="elements" aria-label="Карточки мест">         
            </section>
        </main>         
    );
}

export default Main;