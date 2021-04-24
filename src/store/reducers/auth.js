import {LOGIN_ACTION, LOGOUT_ACTION, REGISTER_ACTION} from "../actions/actions";
import Register from "../../pages/register/Register";

const initialState = {
    isLoggedIn: Boolean(localStorage.getItem('token'))
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_ACTION: {
            
            return {isLoggedIn: true, token: action.payload}
        }
        case LOGOUT_ACTION: {
            return {isLoggedIn: false}
        }
        case REGISTER_ACTION:{
            return {isLoggedIn: true, token: action.payload}
        }
        default:
            return state;
    }
}
