import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {
    ADDRESS,
    addressAction,
    AUTHENTICATE,
    login,
    PROFILE,
    profileAction,
    ROUTES,
    routesAction
} from "./actions/actions";
import {sendRequestToCoords, sendRequestToFillProfile, sendRequestToLogin, sendRequestToRoutes} from "./api";


export function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const success = yield call(sendRequestToLogin, email, password);


    if (!success) {
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
    debugger
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


export function* rootSaga() {
    yield all([
        fork(addressListSaga),
        fork(authSaga),
        fork(profileSaga),
        fork(routeSaga),
    ]);
}
