export const GET_CART_COUNT = 'GET_CART_COUNT'
export const GET_CART_COUNT_SUCCESS = 'GET_CART_COUNT_SUCCESS'
export const GET_CART_COUNT_FAIL = 'GET_CART_COUNT_FAIL'
export const GET_CART_COUNT_RESET = 'GET_CART_COUNT_RESET'

export const getCartCount = (params) => {
    return { type: GET_CART_COUNT, params }
}

export const getCartCountSuccess = (response) => {
    return { type: GET_CART_COUNT_SUCCESS, response }
}

export const getCartCountFail = (response) => {
    return { type: GET_CART_COUNT_FAIL, response }
}

export const getCartCountReset = () => {
    return { type: GET_CART_COUNT_RESET }
}
