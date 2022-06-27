import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_OFFER,
    getOfferSuccess,
    getOfferFail
} from '../action/getOfferAction'

import getOfferApi from '../api/getOfferApi'

export function* getOfferSaga(action) {
    try {
        const response = yield call(() => getOfferApi(action.params))
        yield put(getOfferSuccess(response, action))
    } catch (e) {
        yield put(getOfferFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_OFFER, getOfferSaga)
}