export const REMOVE_COUPON = 'REMOVE_COUPON'
export const REMOVE_COUPON_SUCCESS = 'REMOVE_COUPON_SUCCESS'
export const REMOVE_COUPON_FAIL = 'REMOVE_COUPON_FAIL'
export const REMOVE_COUPON_RESET = 'REMOVE_COUPON_RESET'

export const removeCoupon = (params) => {
    return { type: REMOVE_COUPON, params }
}

export const removeCouponSuccess = (response) => {
    return { type: REMOVE_COUPON_SUCCESS, response }
}

export const removeCouponFail = (response) => {
    return { type: REMOVE_COUPON_FAIL, response }
}

export const removeCouponReset = () => {
    return { type: REMOVE_COUPON_RESET }
}
