import { call, put, takeLatest } from 'redux-saga/effects'

import {
    SAVE_CART_ADDRESS,
    saveCartAddressSuccess,
    saveCartAddressFail
} from '../action/saveCartAddressAction'

import saveCartAddressApi from '../api/saveCartAddressApi'

export function* saveCartAddressSaga(action) {
    try {
        const response = yield call(() => saveCartAddressApi(action.params))
        yield put(saveCartAddressSuccess(response, action))
    } catch (e) {
        yield put(saveCartAddressFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(SAVE_CART_ADDRESS, saveCartAddressSaga)
}