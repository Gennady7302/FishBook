const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
      { id: 1, name: 'Genich' },
      { id: 2, name: 'Olga' },
      { id: 3, name: 'Nastia' },
      { id: 4, name: 'Alexey' },
      { id: 5, name: 'Grandpa' },
      { id: 6, name: 'Grandma' }
    ],
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'Whats up!' },
      { id: 3, message: 'YO' },
      { id: 4, message: 'Yo' },
      { id: 5, message: 'Yo' }
    ],
    newMessageBody: ""
  };

const dialogsReducer = (state = initialState, action) => {

  let stateCopy;

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: 
      return {
        ...state,
        newMessageBody: action.body
      };      
    
    case SEND_MESSAGE: 
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }]
      };                  
      
    default:
      return state;
  }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ( {  
    type: UPDATE_NEW_MESSAGE_BODY, 
    body: body
  })

export default dialogsReducer;