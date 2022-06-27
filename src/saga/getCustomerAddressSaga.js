import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_CUSTOMER_ADDRESS,
    getCustomerAddressSuccess,
    getCustomerAddressFail
} from '../action/getCustomerAddressAction'

import getCustomerAddressApi from '../api/getCustomerAddressApi'

export function* getCustomerAddressSaga(action) {
    try {
        const response = yield call(() => getCustomerAddressApi(action.params))
        yield put(getCustomerAddressSuccess(response, action))
    } catch (e) {
        yield put(getCustomerAddressFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_CUSTOMER_ADDRESS, getCustomerAddressSaga)
}