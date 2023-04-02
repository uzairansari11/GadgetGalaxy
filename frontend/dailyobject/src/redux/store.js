import {
	legacy_createStore,
	applyMiddleware,
	compose,
	combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { reducer as adminProductReducer } from "./adminproduct/reducer";
import { reducer as cartReducer } from "./usercart/reducer";
import { reducer as userAuthReducer } from "./userauth/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	adminProductReducer,
	cartReducer,
	userAuthReducer,
});

export const store = legacy_createStore(rootReducer, enhancer(applyMiddleware(thunk)));
