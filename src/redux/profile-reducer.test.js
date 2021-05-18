import profileReducer, { addPostCreator } from './profile-reducer';
// 1. test data
const state = {
  posts: [
    { idUserPage: 0, message: 'hi', name: 'Dima', likesCount: 5 },
    { idUserPage: 1, message: 'hello', name: 'Sergey', likesCount: 10 },
  ],
};

test('length of posts should be incremented', () => {
  const action = addPostCreator(1, 'message', 'name', 5);
  // 2. action
  const newState = profileReducer(state, action);
  console.log(newState);
  //3. expectation
  expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
  // 2. action
  const action = addPostCreator(1, 'message', 'name', 5);
  const newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts[0].message).toBe('message');
  expect(newState.posts[0].idUserPage).toBe(1);
  expect(newState.posts[0].likesCount).toBe(5);
  expect(newState.posts[0].name).toBe('name');
});
