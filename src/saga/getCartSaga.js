import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_CART,
    getCartSuccess,
    getCartFail
} from '../action/getCartAction'

import getCartApi from '../api/getCartApi'

export function* getCartSaga(action) {
    try {
        const response = yield call(() => getCartApi(action.params))
        yield put(getCartSuccess(response, action))
    } catch (e) {
        yield put(getCartFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_CART, getCartSaga)
}