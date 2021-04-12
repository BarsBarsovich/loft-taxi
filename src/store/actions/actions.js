export const LOGIN_ACTION = "LOG_IN";
export const LOGOUT_ACTION = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const ROUTES = "ROUTES";
export const SET_ROUTES = 'SET_ROUTES';

export const login = () => ({type: LOGIN_ACTION});
export const logout = () => ({type: LOGOUT_ACTION});
export const authenticate = (email, password) => ({
    type: AUTHENTICATE,
    payload: {email, password},
});

export const getRoutes = () => ({type: ROUTES})

export const routesAction = (data) => {
    return {type: SET_ROUTES, payload: data}
};
