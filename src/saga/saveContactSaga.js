import { call, put, takeLatest } from 'redux-saga/effects'

import {
    SAVE_CONTACT,
    saveContactSuccess,
    saveContactFail
} from '../action/saveContactAction'

import saveContactApi from '../api/saveContactApi'

export function* saveContactSaga(action) {
    try {
        const response = yield call(() => saveContactApi(action.params))
        yield put(saveContactSuccess(response, action))
    } catch (e) {
        yield put(saveContactFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(SAVE_CONTACT, saveContactSaga)
}