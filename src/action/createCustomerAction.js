export const CREATE_CUSTOMER = 'CREATE_CUSTOMER'
export const CREATE_CUSTOMER_SUCCESS = 'CREATE_CUSTOMER_SUCCESS'
export const CREATE_CUSTOMER_FAIL = 'CREATE_CUSTOMER_FAIL'
export const CREATE_CUSTOMER_RESET = 'CREATE_CUSTOMER_RESET'

export const createCustomer = (params) => {
    return { type: CREATE_CUSTOMER, params }
}

export const createCustomerSuccess = (response) => {
    return { type: CREATE_CUSTOMER_SUCCESS, response }
}

export const createCustomerFail = (response) => {
    return { type: CREATE_CUSTOMER_FAIL, response }
}

export const createCustomerReset = () => {
    return { type: CREATE_CUSTOMER_RESET }
}
