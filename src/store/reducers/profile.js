import {SET_PROFILE} from "../actions/actions";

const initialState = {
    isProfileFilled: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                isProfileFilled: true
            }
        }
        default:
            return state;
    }
}
