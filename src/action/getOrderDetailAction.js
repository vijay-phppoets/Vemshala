
export const GET_ORDER_DETAIL = 'GET_ORDER_DETAIL'
export const GET_ORDER_DETAIL_SUCCESS = 'GET_ORDER_DETAIL_SUCCESS'
export const GET_ORDER_DETAIL_FAIL = 'GET_ORDER_DETAIL_FAIL'
export const GET_ORDER_DETAIL_RESET = 'GET_ORDER_DETAIL_RESET'

export const getOrderDetail = (params) => {
    return { type: GET_ORDER_DETAIL, params }
}

export const getOrderDetailSuccess = (response) => {
    return { type: GET_ORDER_DETAIL_SUCCESS, response }
}

export const getOrderDetailFail = (response) => {
    return { type: GET_ORDER_DETAIL_FAIL, response }
}

export const getOrderDetailReset = () => {
    return { type: GET_ORDER_DETAIL_RESET }
}
