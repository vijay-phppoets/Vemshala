import { call, put, takeLatest } from 'redux-saga/effects'

import {
    SEND_OTP,
    sendOtpSuccess,
    sendOtpFail
} from '../action/sendOtpAction'

import sendOtpApi from '../api/sendOtpApi'

export function* sendOtpSaga(action) {
    try {
        const response = yield call(() => sendOtpApi(action.params))
        yield put(sendOtpSuccess(response, action))
    } catch (e) {
        yield put(sendOtpFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(SEND_OTP, sendOtpSaga)
}