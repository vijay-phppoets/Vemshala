import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_PRODUCT_DETAIL,
    getProductDetailSuccess,
    getProductDetailFail
} from '../action/getProductDetailAction'

import getProductDetailApi from '../api/getProductDetailApi'

export function* getProductDetailSaga(action) {
    try {
        const response = yield call(() => getProductDetailApi(action.params))
        yield put(getProductDetailSuccess(response, action))
    } catch (e) {
        yield put(getProductDetailFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_PRODUCT_DETAIL, getProductDetailSaga)
}