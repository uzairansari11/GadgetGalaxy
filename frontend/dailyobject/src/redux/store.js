import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as adminProductReducer } from "./adminproduct/reducer";
import { reducer as cartReducer } from "./usercart/reducer";

const rootReducer = combineReducers({
	adminProductReducer,
	cartReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
