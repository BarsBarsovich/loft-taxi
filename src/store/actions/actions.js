export const LOGIN_ACTION = "LOG_IN";
export const LOGOUT_ACTION = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const ROUTES = "ROUTES";
export const SET_ROUTES = 'SET_ROUTES';
export const PROFILE = 'PROFILE';
export const SET_PROFILE = 'SET_PROFILE';
export const ADDRESS = 'ADDRESS';
export const SET_ADDRESS = 'SET_ADDRESS';

export const login = (token) => ({type: LOGIN_ACTION, payload: token});
export const logout = () => ({type: LOGOUT_ACTION});
export const authenticate = (email, password) => ({
    type: AUTHENTICATE,
    payload: {email, password},
});

export const getRoutes = () => ({type: ROUTES})

export const routesAction = (data) => {
    return {type: SET_ROUTES, payload: data}
};

export const setProfile = (cardNumber, expiryDate, cardName, cvc, token) => ({
    type: PROFILE,
    payload: {cardNumber, expiryDate, cardName, cvc, token}
})

export const profileAction = (data) => {
    return {type: SET_PROFILE, payload: data}
}

export const setAddress = (to, from) => ({type: ADDRESS, payload: {to, from}})

export const addressAction = (data) => {
    return {type: SET_ADDRESS, payload: data}
}

