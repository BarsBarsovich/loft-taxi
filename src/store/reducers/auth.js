import {LOGIN_ACTION, LOGOUT_ACTION} from "../actions/actions";

const initialState = {
    isLoggedIn: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_ACTION: {
            return {isLoggedIn: true}
        }
        case LOGOUT_ACTION: {
            return {isLoggedIn: false}
        }
        default:
            return state;
    }
}
