const { default: profileReducer, addPostActionCreator, deletePost } = require("./profile-reducer");

let State = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 1 }
  ]
};


test('Length of posts should be incremented', () => {
  let action = addPostActionCreator('Add post test')
  
  let newState = profileReducer(State, action);

  expect(newState.posts.length).toBe(3);
  
});

test('Message of posts should be correct', () => {
  let action = addPostActionCreator('Add post test')
  
  let newState = profileReducer(State, action);

  expect(newState.posts[2].message).toBe('Add post test');
});

test('after deleting length should be decrement', () => {
  // 1. Test data
  let action = deletePost(1)

  // 2. Action
  let newState = profileReducer(State, action);

  // 3. Expectation
  expect(newState.posts.length).toBe(1);
});

test(`after deleting length shouldn't be changed if id is incorrect`, () => {
  // 1. Test data
  let action = deletePost(1000)

  // 2. Action
  let newState = profileReducer(State, action);

  // 3. Expectation
  expect(newState.posts.length).toBe(2);
});

