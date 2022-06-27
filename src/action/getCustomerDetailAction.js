export const GET_CUSTOMER_DETAIL = 'GET_CUSTOMER_DETAIL'
export const GET_CUSTOMER_DETAIL_SUCCESS = 'GET_CUSTOMER_DETAIL_SUCCESS'
export const GET_CUSTOMER_DETAIL_FAIL = 'GET_CUSTOMER_DETAIL_FAIL'
export const GET_CUSTOMER_DETAIL_RESET = 'GET_CUSTOMER_DETAIL_RESET'

export const getCustomerDetail = (params) => {
    return { type: GET_CUSTOMER_DETAIL, params }
}

export const getCustomerDetailSuccess = (response) => {
    return { type: GET_CUSTOMER_DETAIL_SUCCESS, response }
}

export const getCustomerDetailFail = (response) => {
    return { type: GET_CUSTOMER_DETAIL_FAIL, response }
}

export const getCustomerDetailReset = () => {
    return { type: GET_CUSTOMER_DETAIL_RESET }
}
