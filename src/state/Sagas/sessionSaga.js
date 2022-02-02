import { put, select, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  ATTEMPT_LOGIN,
  ATTEMPT_LOGIN_ERROR,
  ATTEMPT_LOGIN_SUCCESS,
  ATTEMPT_REGISTER,
  ATTEMPT_REGISTER_ERROR,
  ATTEMPT_REGISTER_SUCCESS,
} from "../Actions/sessionActions";
import Cookies from "js-cookie";
//const baseUrl = "https://evpath.azurewebsites.net/";
const baseUrl = "http://localhost:3001";

export function* loginSaga({ type, payload }) {
  try {
    const response = yield call(axios.post, `${baseUrl}/login`, payload);
    console.log("User Info", response.data[0]);
    Cookies.set("user", response);
    yield put({ type: ATTEMPT_LOGIN_SUCCESS, payload: response.data[0] });
  } catch (e) {
    yield put({ type: ATTEMPT_LOGIN_ERROR, payload: e });
  }
}
export function* watchLogin() {
  yield takeEvery(ATTEMPT_LOGIN, loginSaga);
}

export function* registerSaga({ type, payload }) {
  try {
    const response = yield call(axios.post, `${baseUrl}/register`, payload);
    console.log("User Info", response.data[0]);
    Cookies.set("user", response);
    yield put({ type: ATTEMPT_REGISTER_SUCCESS, payload: response.data[0] });
  } catch (e) {
    yield put({ type: ATTEMPT_REGISTER_ERROR, payload: e });
  }
}
export function* watchRegister() {
  yield takeEvery(ATTEMPT_REGISTER, registerSaga);
}
