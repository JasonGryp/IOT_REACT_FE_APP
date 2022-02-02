import { put, select, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  GET_MARKERS,
  GET_MARKERS_ERROR,
  GET_MARKERS_SUCCESS,
  GET_MARKER_INFO,
  GET_MARKER_INFO_ERROR,
  GET_MARKER_INFO_SUCCESS,
} from "../Actions/mapActions";
//const baseUrl = "https://evpath.azurewebsites.net/";
const baseUrl = "http://localhost:3001";

export function* mapSaga({ type, payload }) {
  
  const data = {
    lat: payload.center.lat,
    lon: payload.center.lng,
    radious: payload.zoom,
  };
  console.log(data);
  try {
    console.log("Fetching Markers ", data);
    const response = yield call(axios.post, `${baseUrl}/map`, data);

    console.log("Markers", response.data.chargingstations);
    yield put({
      type: GET_MARKERS_SUCCESS,
      payload: response.data.chargingstations,
    });
  } catch (e) {
    yield put({
      type: GET_MARKERS_ERROR,
    });
    console.log(e);
  }
}
export function* watchMapSaga() {
  yield takeEvery(GET_MARKERS, mapSaga);
}

export function* markerInfo({ type, payload }) {
  // console.log("Fetching Marker Info", payload);
  
  const data = {
    chStation_id: payload.id,
  };

  try {
    const response = yield call(axios.post, `${baseUrl}/chStation/info`, data);

    console.log("Marker info", response.data);
    yield put({
      type: GET_MARKER_INFO_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: GET_MARKER_INFO_ERROR,
    });

    console.log(e);
  }
}
export function* watchMarkerInfo() {
  yield takeEvery(GET_MARKER_INFO, markerInfo);
}
