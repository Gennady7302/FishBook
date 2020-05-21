const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
      ]
    }
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }

  }
 
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ( {  
    type: UPDATE_NEW_POST_TEXT, 
    newText: text
  })


 export default store;
 window.store = store;