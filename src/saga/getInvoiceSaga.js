import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_INVOICE,
    getInvoiceSuccess,
    getInvoiceFail
} from '../action/getInvoiceAction'

import getInvoiceApi from '../api/getInvoiceApi'

export function* getInvoiceSaga(action) {
    try {
        const response = yield call(() => getInvoiceApi(action.params))
        yield put(getInvoiceSuccess(response, action))
    } catch (e) {
        yield put(getInvoiceFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_INVOICE, getInvoiceSaga)
}