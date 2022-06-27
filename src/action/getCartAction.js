export const GET_CART = 'GET_CART'
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS'
export const GET_CART_FAIL = 'GET_CART_FAIL'
export const GET_CART_RESET = 'GET_CART_RESET'

export const getCart = (params) => {
    return { type: GET_CART, params }
}

export const getCartSuccess = (response) => {
    return { type: GET_CART_SUCCESS, response }
}

export const getCartFail = (response) => {
    return { type: GET_CART_FAIL, response }
}

export const getCartReset = () => {
    return { type: GET_CART_RESET }
}
