export const CHECK_COUPON = 'CHECK_COUPON'
export const CHECK_COUPON_SUCCESS = 'CHECK_COUPON_SUCCESS'
export const CHECK_COUPON_FAIL = 'CHECK_COUPON_FAIL'
export const CHECK_COUPON_RESET = 'CHECK_COUPON_RESET'

export const checkCoupon = (params) => {
    return { type: CHECK_COUPON, params }
}

export const checkCouponSuccess = (response) => {
    return { type: CHECK_COUPON_SUCCESS, response }
}

export const checkCouponFail = (response) => {
    return { type: CHECK_COUPON_FAIL, response }
}

export const checkCouponReset = () => {
    return { type: CHECK_COUPON_RESET }
}
