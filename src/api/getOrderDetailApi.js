import cnf from '../config'
import axios from 'axios'
import { getToken } from "../utils";

export const getOrderDetailApi = async (params) => {

    const response = await axios({
        method: 'get',
        url: `${cnf.api.base_url}order/detail`,
        params: params,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${getToken()}`
        }
    })

    return response
}

export default getOrderDetailApi