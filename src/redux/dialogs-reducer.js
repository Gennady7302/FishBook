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
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
            return state;
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