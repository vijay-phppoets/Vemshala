export const GET_INVOICE = 'GET_INVOICE'
export const GET_INVOICE_SUCCESS = 'GET_INVOICE_SUCCESS'
export const GET_INVOICE_FAIL = 'GET_INVOICE_FAIL'
export const GET_INVOICE_RESET = 'GET_INVOICE_RESET'

export const getInvoice = (params) => {
    return { type: GET_INVOICE, params }
}

export const getInvoiceSuccess = (response) => {
    return { type: GET_INVOICE_SUCCESS, response }
}

export const getInvoiceFail = (response) => {
    return { type: GET_INVOICE_FAIL, response }
}

export const getInvoiceReset = () => {
    return { type: GET_INVOICE_RESET }
}
