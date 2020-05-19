let rerenderEntireTree = () => {
  console.log('State is changed')
}

 let state = {
     profilePage: {
        posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 1} 
      ],
        newPostText: "it-camasutra"
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Genich'},
        {id: 2, name: 'Olga'},
        {id: 3, name: 'Nastia'},
        {id: 4, name: 'Alexey'},
        {id: 5, name: 'Grandpa'},
        {id: 6, name: 'Grandma'}
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Whats up!'},
        {id: 3, message: 'YO'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}        
      ]
    }  
 } 


 export const addPost = () => {   
   let newPost = {
     id: 5,
     message: state.profilePage.newPostText,
     likesCount: 0
   };

   state.profilePage.posts.push(newPost);
   state.profilePage.newPostText = '';
   rerenderEntireTree(state);
 }

 export const updateNewPostText = (newText) => {  
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscriber = (observer) => {
    rerenderEntireTree = observer;
}

 export default state;