export const UPDATE_CART = 'UPDATE_CART'
export const UPDATE_CART_SUCCESS = 'UPDATE_CART_SUCCESS'
export const UPDATE_CART_FAIL = 'UPDATE_CART_FAIL'
export const UPDATE_CART_RESET = 'UPDATE_CART_RESET'

export const updateCart = (params) => {
    return { type: UPDATE_CART, params }
}

export const updateCartSuccess = (response) => {
    return { type: UPDATE_CART_SUCCESS, response }
}

export const updateCartFail = (response) => {
    return { type: UPDATE_CART_FAIL, response }
}

export const updateCartReset = () => {
    return { type: UPDATE_CART_RESET }
}
