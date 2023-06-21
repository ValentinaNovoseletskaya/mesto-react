import React from "react";
import Card from './Card.js';
import {api} from '../utils/Api.js';

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);
    
    React.useEffect(() => {
        api.getAppInfo().then(([userData, initialCards]) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
            setCards(initialCards);
        })
        .catch((err) => {
            console.log(err);
        });
    });

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__structure">
                    <div className="profile__avatar" onClick={props.onEditAvatar}> 
                        <img src={`${userAvatar}`} alt={`${userName}`} className="profile__avatar-img" /> 
                    </div>                    
                    <div className="profile__info">
                        <h1 className="profile__name">{`${userName}`}</h1>
                        <button type="button" onClick={props.onEditProfile} className="profile__edit-button"></button>
                        <p className="profile__job">{`${userDescription}`}</p>
                    </div>                    
                </div>
                <button type="button" onClick={props.onAddPlace} className="profile__add-button"></button>
            </section>
            <section className="elements" aria-label="Карточки мест">    

                {cards.map((card) => (
                    <Card onCardClick={props.onCardClick} card={card}/> 
                ))}     
            </section>
        </main>         
    );
}

export default Main;