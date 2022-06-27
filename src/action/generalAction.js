export const TOGGLE_SIGNUP_MODAL = 'TOGGLE_SIGNUP_MODAL'
export const SET_USER_LOGGED_IN = 'SET_USER_LOGGED_IN'
export const SET_CUSTOMER_DATA = 'SET_CUSTOMER_DATA'
export const SET_USER_LOGGED_OUT = 'SET_USER_LOGGED_OUT'
export const SHOW_SIGNUP_MODAL = 'SHOW_SIGNUP_MODAL'
export const HIDE_SIGNUP_MODAL = 'HIDE_SIGNUP_MODAL'

export const toggleSignupModal = () => {
    return { type: TOGGLE_SIGNUP_MODAL }
}
export const setUserLoggedIn = () => {
    return { type: SET_USER_LOGGED_IN }
}
export const setUserLoggedOut = () => {
    return { type: SET_USER_LOGGED_OUT }
}
export const setCustomerData = (params) => {
    return { type: SET_CUSTOMER_DATA, params }
}
export const showSignupModal = () => {
    return {type: SHOW_SIGNUP_MODAL }
}
export const hideSignupModal = () => {
    return {type: HIDE_SIGNUP_MODAL }
}
