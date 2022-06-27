import { call, put, takeLatest } from 'redux-saga/effects'

import {
    RESET_PASSWORD,
    resetPasswordSuccess,
    resetPasswordFail
} from '../action/resetPasswordAction'

import resetPasswordApi from '../api/resetPasswordApi'

export function* resetPasswordSaga(action) {
    try {
        const response = yield call(() => resetPasswordApi(action.params))
        yield put(resetPasswordSuccess(response, action))
    } catch (e) {
        yield put(resetPasswordFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(RESET_PASSWORD, resetPasswordSaga)
}