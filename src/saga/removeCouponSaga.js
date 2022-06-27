import { call, put, takeLatest } from 'redux-saga/effects'

import {
    REMOVE_COUPON,
    removeCouponSuccess,
    removeCouponFail
} from '../action/removeCouponAction'

import removeCouponApi from '../api/removeCouponApi'

export function* removeCouponSaga(action) {
    try {
        const response = yield call(() => removeCouponApi(action.params))
        yield put(removeCouponSuccess(response, action))
    } catch (e) {
        yield put(removeCouponFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(REMOVE_COUPON, removeCouponSaga)
}