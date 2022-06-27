import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_WISH_LIST_REMOVE,
    wishlistRemoveSuccess,
    wishlistRemoveFail
} from '../action/wishlistRemoveAction'

import wishlistRemoveApi from '../api/wishlistRemoveApi'

export function* wishlistRemoveSaga(action) {
    try {
        const response = yield call(() => wishlistRemoveApi(action.params))
        yield put(wishlistRemoveSuccess(response, action))
    } catch (e) {
        yield put(wishlistRemoveFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_WISH_LIST_REMOVE, wishlistRemoveSaga)
}