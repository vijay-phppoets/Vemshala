import { call, put, takeLatest } from 'redux-saga/effects'

import {
    SAVE_WISHLIST,
    saveWishlistDetailSuccess,
    saveWishlistDetailFail
} from '../action/saveWishlistAction'

import saveWishlistApi from '../api/saveWishlistApi'

export function* saveWishlistSaga(action) {
    try {
        const response = yield call(() => saveWishlistApi(action.params))
        yield put(saveWishlistDetailSuccess(response, action))
    } catch (e) {
        yield put(saveWishlistDetailFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(SAVE_WISHLIST, saveWishlistSaga)
}