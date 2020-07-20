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
    ]
  };

const dialogsReducer = (state = initialState, action) => {

  let stateCopy;

  switch (action.type) {    
    case SEND_MESSAGE: 
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }]
      };                  
      
    default:
      return state;
  }

}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;