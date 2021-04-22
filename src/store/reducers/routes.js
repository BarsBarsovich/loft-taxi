import {SET_ROUTES} from "../actions/actions";

const initialState = {
    routes: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ROUTES: {
            return {
                ...state,
                routes: action.payload
            }

        }
        default:
            return state;
    }
}
