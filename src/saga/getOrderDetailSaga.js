import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_ORDER_DETAIL,
    getOrderDetailSuccess,
    getOrderDetailFail
} from '../action/getOrderDetailAction'

import getOrderDetailApi from '../api/getOrderDetailApi'

export function* getOrderDetailSaga(action) {
    try {
        const response = yield call(() => getOrderDetailApi(action.params))
        yield put(getOrderDetailSuccess(response, action))
    } catch (e) {
        yield put(getOrderDetailFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_ORDER_DETAIL, getOrderDetailSaga)
}