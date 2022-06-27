import {
    TOGGLE_SIGNUP_MODAL,
    SET_USER_LOGGED_IN,
    SET_CUSTOMER_DATA,
    SET_USER_LOGGED_OUT,
    SHOW_SIGNUP_MODAL,
    HIDE_SIGNUP_MODAL,
} from '../action/generalAction'
import strings from "../strings.json"


const initialState = {
    signupModalVisible: false,
    isUserLoginIn: false,
    customerData: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SIGNUP_MODAL:
            return {
                ...state,
                signupModalVisible: !state.signupModalVisible,
            }

        case SHOW_SIGNUP_MODAL:
            return {
                ...state,
                signupModalVisible: true,
            }

        case HIDE_SIGNUP_MODAL:
            return {
                ...state,
                signupModalVisible: false,
            }

        case SET_USER_LOGGED_IN:
            return {
                ...state,
                isUserLoginIn: true,
            }

        case SET_USER_LOGGED_OUT:
            return {
                ...state,
                isUserLoginIn: false,
            }

        case SET_CUSTOMER_DATA:
            return {
                ...state,
                customerData: action.params.customer,
            }

        default:
            return state
    }
}
