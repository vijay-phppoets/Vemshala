import { call, put, takeLatest } from 'redux-saga/effects'

import {
    GET_PRODUCT_LIST,
    getProductListSuccess,
    getProductListFail
} from '../action/getProductListAction'

import getProductListApi from '../api/getProductListApi'

export function* getProductListSaga(action) {
    try {
        const response = yield call(() => getProductListApi(action.params))
        console.log('hello response', response);
        yield put(getProductListSuccess(response, action))
    } catch (e) {
        console.log("hello e", e);
        yield put(getProductListFail(e.response, action))
    }
}

export default function* MySaga() {
    yield takeLatest(GET_PRODUCT_LIST, getProductListSaga)
}