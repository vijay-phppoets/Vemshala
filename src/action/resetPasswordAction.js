export const RESET_PASSWORD = 'RESET_PASSWORD'
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS'
export const RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL'
export const RESET_PASSWORD_RESET = 'RESET_PASSWORD_RESET'

export const resetPassword = (params) => {
    return { type: RESET_PASSWORD, params }
}

export const resetPasswordSuccess = (response) => {
    return { type: RESET_PASSWORD_SUCCESS, response }
}

export const resetPasswordFail = (response) => {
    return { type: RESET_PASSWORD_FAIL, response }
}

export const resetPasswordReset = () => {
    return { type: RESET_PASSWORD_RESET }
}
