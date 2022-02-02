import {
    FETCH_MARKERS,
  GET_MARKERS_SUCCESS,
  GET_MARKER_INFO_SUCCESS,
  SET_CENTER
} from "../Actions/mapActions";

const initial_state = {
  markers: [],
  //   center: { lat: 38.246355, lng: 21.734986 },
  center: { lat: 38.301623, lng: 21.784507 },
  zoom: 13,
  markerInfo: {},
  fetchMarkers:true,
};
const mapReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case GET_MARKERS_SUCCESS:
      return {
        ...state,
        markers: payload,
      };
    case FETCH_MARKERS:
        return {
            ...state,
            fetchMarkers:payload.bool,
        }
    case GET_MARKER_INFO_SUCCESS:
      return {
        ...state,
        markerInfo: payload,
      };
      case SET_CENTER:
      return {
        ...state,
        center: payload,
      };
    default:
      return state;
  }
};
export default mapReducer;
