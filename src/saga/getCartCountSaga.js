import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_CART_COUNT,
    getCartCountSuccess,
    getCartCountFail
} from '../action/getCartCountAction'

import getCartCountApi from '../api/getCartCountApi'

export function* getCartCountSaga(action) {
    try {
        const response = yield call(() => getCartCountApi(action.params))
        yield put(getCartCountSuccess(response, action))
    } catch (e) {
        yield put(getCartCountFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_CART_COUNT, getCartCountSaga)
}