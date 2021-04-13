import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {AUTHENTICATE, login, PROFILE, profileAction, ROUTES, routesAction} from "./actions/actions";
import {sendRequestToLogin, sendRequestToRoutes} from "./api";


export function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const success = yield call(sendRequestToLogin, email, password);
    if (!success) {
        return;
    }

    yield put(login());
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

export function* fillProfile() {
    yield put(profileAction(true));
}

export function* profileSaga() {
    yield takeEvery(PROFILE, fillProfile);
}


export function* rootSaga() {
    yield all([
        // fork(addressListSaga),
        fork(authSaga),
        fork(profileSaga),
        fork(routeSaga),
    ]);
}
