export const validationSettings = {
    formSelector: '.popup__content',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disable',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  };
  
const validationProfilePopup = [
  {
    className: 'popup__input popup__input_type_name',
    type: 'text',
    placeholder: 'Имя',
    name: 'profileName',
    minLength: '2',
    maxLength: '40',
    required: true,
  },
  {
    className: 'popup__input popup__input_type_job',
    type: 'text',
    placeholder: 'О себе',
    name: 'profileJob',
    minLength: '2',
    maxLength: '200',
    required: true,
  }
]

const validationAvatarPopup = [
  {
    className: 'popup__input popup__input_type_link',
    type: 'url',
    name: 'profileAvatar',
    placeholder: 'Ссылка на аватар',
    required: true,
  }]

const validationPlacePopup = [
  {
    className: 'popup__input popup__input_type_name',
    type: 'text',
    placeholder: 'Название',
    name: 'placeName',
    minLength: '2',
    maxLength: '30',
    required: true,
  },
  {
    className: 'popup__input popup__input_type_link',
    type: 'url',
    placeholder: 'Ссылка на картинку',
    name: 'placeImage',
    required: true,
  }
]