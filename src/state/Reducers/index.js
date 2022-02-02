import {combineReducers} from "redux";
import mapReducer from "./mapReducer";
import menuToggleReducer from "./menuToggleReducer";
import sidebarReducer from './SidebarReducer';
import sessionReducer from './sessionReducer'

const reducers= combineReducers({
    // menuToggle:menuToggleReducer,
    sidebar:sidebarReducer,
    map:mapReducer,
    session:sessionReducer,
})
export default reducers;
