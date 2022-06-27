export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL'
export const GET_PRODUCT_DETAIL_SUCCESS = 'GET_PRODUCT_DETAIL_SUCCESS'
export const GET_PRODUCT_DETAIL_FAIL = 'GET_PRODUCT_DETAIL_FAIL'
export const GET_PRODUCT_DETAIL_RESET = 'GET_PRODUCT_DETAIL_RESET'

export const getProductDetail = (params) => {
    return { type: GET_PRODUCT_DETAIL, params }
}

export const getProductDetailSuccess = (response) => {
    return { type: GET_PRODUCT_DETAIL_SUCCESS, response }
}

export const getProductDetailFail = (response) => {
    return { type: GET_PRODUCT_DETAIL_FAIL, response }
}

export const getProductDetailReset = () => {
    return { type: GET_PRODUCT_DETAIL_RESET }
}
