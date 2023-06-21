function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return( <article class="element" key={props.card._id}>
                <img src={`${props.card.link}`} alt={`${props.card.name}`} class="element__picture" onClick={handleClick} />
                <button type="button" class="element__delete-button"></button>
                <div class="element__container">
                    <h2 class="element__text">{props.card.name}</h2>
                    <div class="element__like">
                        <button type="button" class="element__like-button"></button>
                        <span class="element__count">{props.card.likes && props.card.likes.length}</span>
                    </div>
                </div>             
            </article> 
    )
}

export default Card;



