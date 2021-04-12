import { combineReducers } from "redux";
import authReducer from "./auth";
import routesReducer from "./routes"

export default combineReducers({ auth: authReducer, routes: routesReducer });
