export const SAVE_CONTACT = 'SAVE_CONTACT'
export const SAVE_CONTACT_SUCCESS = 'SAVE_CONTACT_SUCCESS'
export const SAVE_CONTACT_FAIL = 'SAVE_CONTACT_FAIL'
export const SAVE_CONTACT_RESET = 'SAVE_CONTACT_RESET'

export const saveContact = (params) => {
    return { type: SAVE_CONTACT, params }
}

export const saveContactSuccess = (response) => {
    return { type: SAVE_CONTACT_SUCCESS, response }
}

export const saveContactFail = (response) => {
    return { type: SAVE_CONTACT_FAIL, response }
}

export const saveContactReset = () => {
    return { type: SAVE_CONTACT_RESET }
}
