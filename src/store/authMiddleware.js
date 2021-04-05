import {AUTHENTICATE, login} from "./actions/actions";

export const authenticateMiddleware = (store) => (next) => async (action) => {
    if (action.type === AUTHENTICATE) {
        const {email, password} = action.payload;
        const success = await sendRequestToLogin(email, password)
        if (success){
            store.dispatch(login());
        }
    }else{
        next(action);
    }
}


export async function sendRequestToLogin(email, password){
    const url = `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`;
    return fetch(url).then(res=> res.json()).then(data => data.success);
}
