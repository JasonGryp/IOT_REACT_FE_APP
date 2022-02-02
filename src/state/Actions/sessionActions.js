export const SET_SESSION = "SET_SESSION";
export const ATTEMPT_LOGIN = "ATTEMPT_LOGIN";
export const ATTEMPT_LOGIN_ERROR = "ATTEMPT_LOGIN_ERROR";
export const ATTEMPT_LOGIN_SUCCESS = "ATTEMPT_LOGIN_SUCCESS";
export const ATTEMPT_REGISTER = "ATTEMPT_REGISTER";
export const ATTEMPT_REGISTER_ERROR = "ATTEMPT_REGISTER_ERROR";
export const ATTEMPT_REGISTER_SUCCESS = "ATTEMPT_REGISTER_SUCCESS";
export const LOG_OUT = "LOG_OUT";

export const setSession = (user) => {
  return { type: SET_SESSION, payload: user };
};
export const attemptLogin = (payload) => {
  return { type: ATTEMPT_LOGIN, payload: payload };
};
export const attemptRegister = (payload) => {
  return { type: ATTEMPT_REGISTER, payload: payload };
};
export const logout = (payload) => {
  return { type: LOG_OUT };
};
