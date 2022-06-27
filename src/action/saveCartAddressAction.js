export const SAVE_CART_ADDRESS = 'SAVE_CART_ADDRESS'
export const SAVE_CART_ADDRESS_SUCCESS = 'SAVE_CART_ADDRESS_SUCCESS'
export const SAVE_CART_ADDRESS_FAIL = 'SAVE_CART_ADDRESS_FAIL'
export const SAVE_CART_ADDRESS_RESET = 'SAVE_CART_ADDRESS_RESET'

export const saveCartAddress = (params) => {
    return { type: SAVE_CART_ADDRESS, params }
}

export const saveCartAddressSuccess = (response) => {
    return { type: SAVE_CART_ADDRESS_SUCCESS, response }
}

export const saveCartAddressFail = (response) => {
    return { type: SAVE_CART_ADDRESS_FAIL, response }
}

export const saveCartAddressReset = () => {
    return { type: SAVE_CART_ADDRESS_RESET }
}
