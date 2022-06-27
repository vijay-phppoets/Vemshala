import { call, put, takeLatest } from 'redux-saga/effects'

import {
    CHECK_COUPON,
    checkCouponSuccess,
    checkCouponFail
} from '../action/checkCouponAction'

import checkCouponApi from '../api/checkCouponApi'

export function* checkCouponSaga(action) {
    try {
        const response = yield call(() => checkCouponApi(action.params))
        yield put(checkCouponSuccess(response, action))
    } catch (e) {
        yield put(checkCouponFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(CHECK_COUPON, checkCouponSaga)
}