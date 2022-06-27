import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_EXCLUSIVE_PRODUCTS,
    getExclusiveProductsSuccess,
    getExclusiveProductsFail
} from '../action/getExclusiveProductsAction'

import getExclusiveProductsApi from '../api/getExclusiveProductsApi'

export function* getExclusiveProductsSaga(action) {
    try {
        const response = yield call(() => getExclusiveProductsApi(action.params))
        yield put(getExclusiveProductsSuccess(response, action))
    } catch (e) {
        yield put(getExclusiveProductsFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_EXCLUSIVE_PRODUCTS, getExclusiveProductsSaga)
}