import cnf from '../config'
import axios from 'axios'

export const getInvoiceApi = async (params) => {
    console.log("hello in API");
    const response = await axios({
        method: 'get',
        url: `${cnf.api.base_url}cart/generateInvoice`,
        params: params,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })

    return response
}

export default getInvoiceApi