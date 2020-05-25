import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {

  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 1 }
      ],
      newPostText: "it-camasutra"
    },
    dialogsPage: {
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
    },
    sidebar: {}
  },
  _callSubscriber () {
    console.log('State is changed')
  },


  getState () {
    return this._state;
  }, 
  subscriber (observer) {
    this._callSubscriber = observer;
  },


 
  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
    

  }
 
}


 export default store;
 window.store = store;