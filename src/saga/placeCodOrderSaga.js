import { call, put, takeLatest } from 'redux-saga/effects'

import {
    PLACE_COD_ORDER,
    placeCodOrderSuccess,
    placeCodOrderFail
} from '../action/placeCodOrderAction'

import placeCodOrderApi from '../api/placeCodOrderApi'

export function* placeCodOrderSaga(action) {
    try {
        const response = yield call(() => placeCodOrderApi(action.params))
        yield put(placeCodOrderSuccess(response, action))
    } catch (e) {
        yield put(placeCodOrderFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(PLACE_COD_ORDER, placeCodOrderSaga)
}