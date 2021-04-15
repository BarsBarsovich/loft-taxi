import {SET_ADDRESS, SET_ROUTES} from "../actions/actions";

const initialState = {
    coords: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ADDRESS: {
            return {
                ...state,
                coords: action.payload
            }
        }
        default:
            return state;
    }
}
