function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return( <article className="element" key={props.card._id}>
                <img src={`${props.card.link}`} alt={`${props.card.name}`} className="element__picture" onClick={handleClick} />
                <button type="button" className="element__delete-button"></button>
                <div className="element__container">
                    <h2 className="element__text">{props.card.name}</h2>
                    <div className="element__like">
                        <button type="button" className="element__like-button"></button>
                        <span className="element__count">{props.card.likes && props.card.likes.length}</span>
                    </div>
                </div>             
            </article> 
    )
}

export default Card;



