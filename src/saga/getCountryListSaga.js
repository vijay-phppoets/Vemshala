import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_COUNTRY_LIST,
    getCountryListSuccess,
    getCountryListFail
} from '../action/getCountryListAction'

import getCountryListApi from '../api/getCountryListApi'

export function* getCountryListSaga(action) {
    try {
        const response = yield call(() => getCountryListApi(action.params))
        yield put(getCountryListSuccess(response, action))
    } catch (e) {
        yield put(getCountryListFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_COUNTRY_LIST, getCountryListSaga)
}