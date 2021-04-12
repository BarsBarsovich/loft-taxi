import {SET_ROUTES} from "../actions/actions";

const initialState = {
    routes: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ROUTES: {
            debugger
            return {
                ...state,
                ...action.payload
            }

        }
        default:
            return state;
    }
}
