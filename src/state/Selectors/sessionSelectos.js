export const selectAuth = (state) => {
  return state.session.auth;
};
export const selectUsername = (state) => {
  return state.session.username;
};
export const selectEmail = (state) => {
  return state.session.email;
};
