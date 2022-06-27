export const PLACE_COD_ORDER = 'PLACE_COD_ORDER'
export const PLACE_COD_ORDER_SUCCESS = 'PLACE_COD_ORDER_SUCCESS'
export const PLACE_COD_ORDER_FAIL = 'PLACE_COD_ORDER_FAIL'
export const PLACE_COD_ORDER_RESET = 'PLACE_COD_ORDER_RESET'

export const placeCodOrder = (params) => {
    return { type: PLACE_COD_ORDER, params }
}

export const placeCodOrderSuccess = (response) => {
    return { type: PLACE_COD_ORDER_SUCCESS, response }
}

export const placeCodOrderFail = (response) => {
    return { type: PLACE_COD_ORDER_FAIL, response }
}

export const placeCodOrderReset = () => {
    return { type: PLACE_COD_ORDER_RESET }
}
