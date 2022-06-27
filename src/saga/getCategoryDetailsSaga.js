import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_CATEGORY_DETAILS,
    getCategoryDetailsSuccess,
    getCategoryDetailsFail
} from '../action/getCategoryDetailsAction'

import getCategoryDetailsApi from '../api/getCategoryDetailsApi'

export function* getCategoryDetailsSaga(action) {
    try {
        const response = yield call(() => getCategoryDetailsApi(action.params))
        yield put(getCategoryDetailsSuccess(response, action))
    } catch (e) {
        yield put(getCategoryDetailsFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_CATEGORY_DETAILS, getCategoryDetailsSaga)
}