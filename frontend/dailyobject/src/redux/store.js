import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as adminProductReducer } from "./adminproduct/reducer";

const rootReducer = combineReducers({
	adminProductReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
