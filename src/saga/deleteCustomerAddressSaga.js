import { call, put, takeLatest } from 'redux-saga/effects'

import {
    DELETE_CUSTOMER_ADDRESS,
    deleteCustomerAddressSuccess,
    deleteCustomerAddressFail
} from '../action/deleteCustomerAddressAction'

import deleteCustomerAddressApi from '../api/deleteCustomerAddressApi'

export function* deleteCustomerAddressSaga(action) {
    try {
        const response = yield call(() => deleteCustomerAddressApi(action.params))
        yield put(deleteCustomerAddressSuccess(response, action))
    } catch (e) {
        yield put(deleteCustomerAddressFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(DELETE_CUSTOMER_ADDRESS, deleteCustomerAddressSaga)
}