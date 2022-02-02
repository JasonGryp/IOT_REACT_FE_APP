import {
  ATTEMPT_LOGIN_ERROR,
  ATTEMPT_LOGIN_SUCCESS,
  ATTEMPT_REGISTER_ERROR,
  ATTEMPT_REGISTER_SUCCESS,
  LOG_OUT,
  SET_SESSION,
} from "../Actions/sessionActions";

const initial_state = {
  username: "",
  email: "",
  fav_companies: [],
  fav_stations: [],
  e: "",
  auth: false,
};

const sessionReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case ATTEMPT_LOGIN_ERROR:
      return {
        ...state,
        e: "We were unable to log you in at this moment please try again",
      };
    case ATTEMPT_REGISTER_ERROR:
      return {
        ...state,
        e: "We were unable to register your account at this moment please try again",
      };
    case ATTEMPT_LOGIN_SUCCESS:
    case ATTEMPT_REGISTER_SUCCESS:
      return {
        ...state,
        username: payload?.username,
        email: payload?.mail,
        fav_companies: payload?.fav_companies,
        fav_stations: payload?.fav_stations,
        auth: true,
      };
    case SET_SESSION:
      return {
        ...state,
        username: payload?.username,
        email: payload?.email,
        fav_companies: payload?.fav_companies,
        fav_stations: payload?.fav_stations,
        auth: true,
      };
    case LOG_OUT:
      return {
        ...initial_state,
      };
    default:
      return {
        ...state,
      };
  }
};
export default sessionReducer;
