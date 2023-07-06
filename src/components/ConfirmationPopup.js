import PopupWithForm from './PopupWithForm.js';

function ConfirmationPopup(props) {    
    function handleSubmit(e) {
        e.preventDefault();
        props.onConfirmDelete(props.card);
    }

    return (
        <PopupWithForm onSubmit={handleSubmit} isOpen={props.card} onClose={props.onClose} title='Вы уверены?' name='confirmation' buttonText='Да' />
    );
}
        
export default ConfirmationPopup;