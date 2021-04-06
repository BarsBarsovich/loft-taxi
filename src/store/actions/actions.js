export const LOGIN_ACTION = "LOG_IN";
export const LOGOUT_ACTION = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";

export const login = () => ({ type: LOGIN_ACTION });
export const logout = () => ({ type: LOGOUT_ACTION });
export const authenticate = (email, password) => ({
    type: AUTHENTICATE,
    payload: { email, password },
});
