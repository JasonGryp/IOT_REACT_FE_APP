import { applyMiddleware, createStore } from "redux";
import reducers from "./Reducers/index";
import createSagaMiddleware from "@redux-saga/core";
import { watchMapSaga, watchMarkerInfo } from "./Sagas/mapSaga";
import { watchLogin, watchRegister } from "./Sagas/sessionSaga";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchMapSaga);
sagaMiddleware.run(watchMarkerInfo);
sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchRegister);
export default store;
