export const GET_STATE_LIST = 'GET_STATE_LIST'
export const GET_STATE_LIST_SUCCESS = 'GET_STATE_LIST_SUCCESS'
export const GET_STATE_LIST_FAIL = 'GET_STATE_LIST_FAIL'
export const GET_STATE_LIST_RESET = 'GET_STATE_LIST_RESET'

export const getStateList = (params) => {
    return { type: GET_STATE_LIST, params }
}

export const getStateListSuccess = (response) => {
    return { type: GET_STATE_LIST_SUCCESS, response }
}

export const getStateListFail = (response) => {
    return { type: GET_STATE_LIST_FAIL, response }
}

export const getStateListReset = () => {
    return { type: GET_STATE_LIST_RESET }
}
