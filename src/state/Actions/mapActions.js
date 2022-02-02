export const GET_MARKERS = "GET_MARKERS";
export const GET_MARKERS_SUCCESS = "GET_MARKERS_SUCCESS";
export const GET_MARKERS_ERROR = "GET_MARKERS_ERROR";
export const GET_MARKER_INFO = "GET_MARKER_INFO";
export const GET_MARKER_INFO_SUCCESS = "GET_MARKER_INFO_SUCCESS";
export const GET_MARKER_INFO_ERROR = "GET_MARKER_INFO_ERROR";
export const FETCH_MARKERS = "FETCH_MARKERS";
export const SET_CENTER = "SET_CENTER";
export const getMarkers = (center, zoom) => {
  return {
    type: GET_MARKERS,
    payload: {
      center,
      zoom,
    },
  };
};

export const getMarkerInfo = (id) => {
  return {
    type: GET_MARKER_INFO,
    payload: {
      id,
    },
  };
};
export const fetchMarkers = (bool) => {
  return {
    type: FETCH_MARKERS,
    payload: {
      bool,
    },
  };
};

export const setCenter = (payload) => {
  return {
    type: SET_CENTER,
    payload,
  };
};
