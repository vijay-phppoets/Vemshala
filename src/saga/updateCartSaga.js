import { call, put, takeLatest } from 'redux-saga/effects'

import {
    UPDATE_CART,
    updateCartSuccess,
    updateCartFail
} from '../action/updateCartAction'

import updateCartApi from '../api/updateCartApi'

export function* updateCartSaga(action) {
    try {
        const response = yield call(() => updateCartApi(action.params))
        yield put(updateCartSuccess(response, action))
    } catch (e) {
        yield put(updateCartFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(UPDATE_CART, updateCartSaga)
}