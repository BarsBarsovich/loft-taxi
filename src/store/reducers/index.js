import {combineReducers} from "redux";
import authReducer from "./auth";
import routesReducer from "./routes"
import profileReducer from "./profile";
import addressReducer from "./addresses"

export default combineReducers({auth: authReducer, routes: routesReducer, isProfileFilled: profileReducer, coords: addressReducer});
