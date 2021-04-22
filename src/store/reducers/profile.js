import {GET_PROFILE, SET_CARD, SET_PROFILE} from "../actions/actions";

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
        case SET_CARD:{
            return {
                ...state, profile: action.payload, isProfileFilled: true
            }
        }
        default:
            return state;
    }
}
