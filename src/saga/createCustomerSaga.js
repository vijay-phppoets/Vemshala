import { call, put, takeLatest } from 'redux-saga/effects'

import {
    CREATE_CUSTOMER,
    createCustomerSuccess,
    createCustomerFail
} from '../action/createCustomerAction'

import createCustomerApi from '../api/createCustomerApi'

export function* createCustomerSaga(action) {
    try {
        const response = yield call(() => createCustomerApi(action.params))
        yield put(createCustomerSuccess(response, action))
    } catch (e) {
        yield put(createCustomerFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(CREATE_CUSTOMER, createCustomerSaga)
}