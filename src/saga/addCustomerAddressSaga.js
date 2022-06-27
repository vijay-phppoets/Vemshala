import { call, put, takeLatest } from 'redux-saga/effects'

import {
    ADD_CUSTOMER_ADDRESS,
    addCustomerAddressSuccess,
    addCustomerAddressFail
} from '../action/addCustomerAddressAction'

import addCustomerAddressApi from '../api/addCustomerAddressApi'

export function* addCustomerAddressSaga(action) {
    try {
        const response = yield call(() => addCustomerAddressApi(action.params))
        yield put(addCustomerAddressSuccess(response, action))
    } catch (e) {
        yield put(addCustomerAddressFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(ADD_CUSTOMER_ADDRESS, addCustomerAddressSaga)
}