import {useEffect, useState} from 'react';
import Card from './Card.js';
import {api} from '../utils/Api.js';

function Main(props) {
    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    
    useEffect(() => {
        api.getAppInfo().then(([userData, initialCards]) => {
            setCards(initialCards);
            setCurrentUser(userData);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__structure">
                    <div className="profile__avatar" onClick={props.onEditAvatar}> 
                        <img src={currentUser && currentUser.avatar} alt={currentUser && currentUser.name} className="profile__avatar-img" /> 
                    </div>                    
                    <div className="profile__info">
                        <h1 className="profile__name">{currentUser && currentUser.name}</h1>
                        <button type="button" onClick={props.onEditProfile} className="profile__edit-button"></button>
                        <p className="profile__job">{currentUser && currentUser.about}</p>
                    </div>                    
                </div>
                <button type="button" onClick={props.onAddPlace} className="profile__add-button"></button>
            </section>
            <section className="elements" aria-label="Карточки мест">
                {cards.map((card) => (
                    <Card onCardClick={props.onCardClick} key={card._id} card={card}/> 
                ))}     
            </section>
        </main>
    );
}

export default Main;