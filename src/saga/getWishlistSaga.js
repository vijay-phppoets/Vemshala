import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_WISH_LIST,
    getWishlistSuccess,
    getWishlistFail
} from '../action/getWishlistAction'

import getWishlistApi from '../api/getWishlistApi'

export function* getWishlistSaga(action) {
    try {
        const response = yield call(() => getWishlistApi(action.params))
        yield put(getWishlistSuccess(response, action))
    } catch (e) {
        yield put(getWishlistFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_WISH_LIST, getWishlistSaga)
}