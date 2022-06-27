export const SEND_OTP = 'SEND_OTP'
export const SEND_OTP_SUCCESS = 'SEND_OTP_SUCCESS'
export const SEND_OTP_FAIL = 'SEND_OTP_FAIL'
export const SEND_OTP_RESET = 'SEND_OTP_RESET'

export const sendOtp = (params) => {
    return { type: SEND_OTP, params }
}

export const sendOtpSuccess = (response) => {
    return { type: SEND_OTP_SUCCESS, response }
}

export const sendOtpFail = (response) => {
    return { type: SEND_OTP_FAIL, response }
}

export const sendOtpReset = () => {
    return { type: SEND_OTP_RESET }
}
