import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {
    ADDRESS,
    addressAction,
    AUTHENTICATE,
    GET_CARD,
    login,
    PROFILE,
    profileAction,
    register,
    ROUTES,
    routesAction,
    SET_REGISTER,
    setCard,
} from "./actions/actions";
import {
    sendRequestToCoords,
    sendRequestToFillProfile,
    sendRequestToGetProfile,
    sendRequestToLogin,
    sendRequestToRegister,
    sendRequestToRoutes
} from "./api";


export function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const success = yield call(sendRequestToLogin, email, password);

    if (!success.success) {
        return;
    }

    yield put(login(success.token));
}

export function* authSaga() {
    yield takeEvery(AUTHENTICATE, authenticateSaga);
}

export function* routesSaga() {
    const routesList = yield call(sendRequestToRoutes);
    if (!routesList) {
        return;
    }

    yield put(routesAction(routesList));
}


export function* routeSaga() {
    yield takeEvery(ROUTES, routesSaga)
}

export function* fillProfile(action) {
    const {cardNumber, expiryDate, cardName, cvc, token} = action.payload;

    const success = yield call(sendRequestToFillProfile(cardNumber, expiryDate, cardName, cvc, token));
    
    if (!success) {
        return;
    }
    yield put(profileAction(true));
}

export function* profileSaga() {
    yield takeEvery(PROFILE, fillProfile);
}

export function* getAddressesListSaga(action) {
    const {to, from} = action.payload;
    const response = yield call(sendRequestToCoords, to, from);

    if (!response) {
        return;
    }

    yield put(addressAction(response));
}

export function* addressListSaga() {
    yield takeEvery(ADDRESS, getAddressesListSaga);
}

export function* setRegister(action){
    const {email, password, name} = action.payload;

    const response = yield call(sendRequestToRegister, email, password, name);
    

    if (!response.success){
        return;
    }

    yield put(register(response.token))
}

export function* registerSaga(){
    yield takeEvery(SET_REGISTER, setRegister)
}

export function* getProfileInfo(action){
    const {token} = action.payload;

    const response = yield call(sendRequestToGetProfile, token);

    if (!response){
        return
    }

    yield put(setCard(response));
}

export function* getProfileSaga(){
    yield takeEvery(GET_CARD, getProfileInfo)
}


export function* rootSaga() {
    yield all([
        fork(addressListSaga),
        fork(authSaga),
        fork(profileSaga),
        fork(routeSaga),
        fork(registerSaga),
        fork(getProfileSaga)
    ]);
}
