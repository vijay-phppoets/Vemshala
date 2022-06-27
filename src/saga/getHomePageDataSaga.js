import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_HOME_PAGE_DATA,
    getHomePageDataSuccess,
    getHomePageDataFail
} from '../action/getHomePageDataAction'

import getHomePageDataApi from '../api/getHomePageDataApi'

export function* getHomePageDataSaga(action) {
    try {
        const response = yield call(() => getHomePageDataApi(action.params))
        yield put(getHomePageDataSuccess(response, action))
    } catch (e) {
        yield put(getHomePageDataFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_HOME_PAGE_DATA, getHomePageDataSaga)
}