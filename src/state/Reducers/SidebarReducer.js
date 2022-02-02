import { UPDATE_SIDEBAR_CONTENT, TOGGLE_MENU } from "../Actions/SidebarActions";
import { GET_MARKER_INFO_SUCCESS } from "../Actions/mapActions";
const initial_state = {
  user: {},
  sideBarType: "",
  sideBarContent: {},
  metadata: [],
  menuToggle: false,
};
const sidebarReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case UPDATE_SIDEBAR_CONTENT:
      return {
        ...state,
        sideBarContent: payload,
      };
    case GET_MARKER_INFO_SUCCESS:
      return {
        ...state,
        sideBarContent: payload,
        sideBarType: "charger_info",
        menuToggle: true,
      };
    case TOGGLE_MENU:
      {const previousState = state.menuToggle;
      return {
        menuToggle: !previousState,
      };}
    default:
      return state;
  }
};
export default sidebarReducer;
