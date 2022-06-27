import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_CUSTOMER_DETAIL,
    getCustomerDetailSuccess,
    getCustomerDetailFail
} from '../action/getCustomerDetailAction'

import getCustomerDetailApi from '../api/getCustomerDetailApi'

export function* getCustomerDetailSaga(action) {
    try {
        const response = yield call(() => getCustomerDetailApi(action.params))
        yield put(getCustomerDetailSuccess(response, action))
    } catch (e) {
        yield put(getCustomerDetailFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_CUSTOMER_DETAIL, getCustomerDetailSaga)
}