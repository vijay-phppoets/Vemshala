import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_STATE_LIST,
    getStateListSuccess,
    getStateListFail
} from '../action/getStateListAction'

import getStateListApi from '../api/getStateListApi'

export function* getStateListSaga(action) {
    try {
        const response = yield call(() => getStateListApi(action.params))
        yield put(getStateListSuccess(response, action))
    } catch (e) {
        yield put(getStateListFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_STATE_LIST, getStateListSaga)
}