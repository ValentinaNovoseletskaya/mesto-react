import {useContext} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function Card(props) {
    const currentUser = useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = ( 
        `element__like-button ${isLiked && 'element__like-button_active'}` 
      );;

    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card);
    }

    return( <article className="element" key={props.card._id}>
                <img src={`${props.card.link}`} alt={`${props.card.name}`} className="element__picture" onClick={handleClick} />                
                {isOwn && <button type="button" className="element__delete-button" onClick={handleDeleteClick} />}
                <div className="element__container">
                    <h2 className="element__text">{props.card.name}</h2>
                    <div className="element__like">
                        <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} ></button>
                        <span className="element__count">{props.card.likes && props.card.likes.length}</span>
                    </div>
                </div>             
            </article> 
    )
}

export default Card;



