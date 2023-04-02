import {
	legacy_createStore,
	applyMiddleware,
	compose,
	combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { reducer as adminProductReducer } from "./adminproduct/reducer";
import { reducer as cartReducer } from "./usercart/reducer";
import { reducer as shippingReducer } from "./shipping/reducer";
import { reducer as userAuthReducer } from "./userauth/reducer";
import { reducer as adminAuthReducer } from "./adminauth/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	adminProductReducer,
	cartReducer,
	shippingReducer,
	userAuthReducer,
	adminAuthReducer,
});

export const store = legacy_createStore(
	rootReducer,
	enhancer(applyMiddleware(thunk))
);
